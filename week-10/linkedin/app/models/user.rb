class User < ApplicationRecord
  validates_presence_of :first_name, :last_name, :email
  validates_uniqueness_of :email
  has_many :experiences

  def full_name
    "#{first_name} #{last_name}"
  end

  def current_position
    experience = experiences.order(start_date: :desc).first
    if experience.nil?
      "Unemployed"
    else
      "#{experience.title}, #{experience.company}"
    end
  end
end
