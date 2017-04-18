class Bank
  attr_accessor :name, :accounts

  def initialize(bank_name)
    @name = bank_name
    @accounts = {}
  end

  def create_account(account_name, balance)
    return false if @accounts[account_name] || balance < 0
    @accounts[account_name] = balance
  end

  def withdraw(account_name, amount)
    return false if @accounts[account_name].nil? || amount > @accounts[account_name] || amount < 0
    @accounts[account_name] -= amount
  end
end
