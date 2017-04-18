class User < ApplicationRecord
  validates_presence_of :first_name, :last_name, :email
  has_many :experiences

  def full_name
    "#{first_name} #{last_name}"
  end
end
