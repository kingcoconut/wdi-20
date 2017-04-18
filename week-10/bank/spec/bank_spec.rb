require_relative "../bank.rb"

describe Bank do
  describe ".new" do
    it "should assign a name to the new bank" do
      bank_name = "Commonweatlth"
      bank = Bank.new(bank_name)
      expect(bank.name).to eq bank_name
    end

    it "should have no accounts" do
      bank = Bank.new("FOO")
      expect(bank.accounts.length).to eq 0
    end
  end

  describe "#create_account" do
    let(:bank) { Bank.new("Foo") }

    it "creates an account with the given account name" do
      bank.create_account("Sam Smith", 200)
      expect(bank.accounts["Sam Smith"]).to_not eq nil
    end
    it "initializes the account balance to the specified amount" do
      bank.create_account("Sam Smith", 200)
      expect(bank.accounts["Sam Smith"]).to eq 200
    end
    it "returns false when account name is already taken" do
      bank.create_account("Sam Smith", 200)
      expect(bank.create_account("Sam Smith", 200)).to eq false
    end
    it "cannot initialize a negative account balance" do
      expect(bank.create_account("Sam Smith", -200)).to eq false
    end
    it "it returns the account balance on successful creation" do
      expect(bank.create_account("Sam Smith", 200)).to eq 200
    end
  end

  describe "#withdraw" do
    let(:bank) {Bank.new("Foo")}

    before :each do
      bank.create_account("Foo Bar", 1000)
    end

    it "should deduct the amount from the given balance" do
      bank.withdraw("Foo Bar", 500)
      expect(bank.accounts["Foo Bar"]).to eq 500
    end
    it "should return false if not enough funds" do
      expect(bank.withdraw("Foo Bar", 2000)).to eq false
    end
    it "should return false if account doesn't exist" do
      expect(bank.withdraw("Sam Smith", 2000)).to eq false
    end
    it "should return false if deducting negative amount" do
      expect(bank.withdraw("Foo Bar", -1)).to eq false
    end
    it "should return the new balance" do
      expect(bank.withdraw("Foo Bar", 600)).to eq 400
    end
  end
end
