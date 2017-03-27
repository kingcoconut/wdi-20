require_relative "../calculator.rb"

describe Calculator do
  describe ".add" do
    it "should add the arguments together" do
      expect(Calculator.add(2,8)).to eq 10
      expect(Calculator.add(6,6)).to eq 12
    end
  end
end
