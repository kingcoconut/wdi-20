class Bank
  def initialize
    @accounts = {}
  end

  def add_account(account_name, deposit)
    return false if @accounts[account_name]
    @accounts[account_name] = deposit
    true
  end

  def account_value(account_name)
    return false if @accounts[account_name].nil?
    @accounts[account_name]
  end
end
