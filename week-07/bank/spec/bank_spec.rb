require_relative '../bank.rb'

describe Bank do
  describe "#add_account" do
    let(:bank){ Bank.new }

    it "should create an account with the given value" do
      bank.add_account("Paul", 200)
      expect(bank.account_value("Paul")).to eq 200
    end

    it "should prevent duplicate account names" do
      bank.add_account("Paul", 200)
      expect(bank.add_account("Paul", 300)).to eq false
      expect(bank.account_value("Paul")).to eq 200
    end

    it "should return true when successfully added account" do
      expect(bank.add_account("Paul", 200)).to eq true
    end
  end

  describe "#account_value" do
    let(:bank){ Bank.new }
    it "should return the correct value for an account" do
      bank.add_account("Paul",100)
      expect(bank.account_value("Paul")).to eq 100
    end
    it "should return false if the account does not exist" do
      expect(bank.account_value("Paul")).to eq false
    end
  end

  describe "#transfer" do
    it "should subtract the transfer amount from the transferer"
    it "should add the ammount to the reciever"
    it "should return false if transfer does not exist"
    it "should return false if reciver does not exist"
    it "should return false if transferer does not have enough money"
  end
end
