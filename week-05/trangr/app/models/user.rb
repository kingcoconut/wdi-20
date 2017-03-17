class User < ApplicationRecord
  has_secure_password
  validates_uniqueness_of :email
  validates :email, exclusion: {
    in: ["xander@me.com", "xander@ga.com"],
    message: "is a forbidden email address"
  }
  validates :email, format: {
    with: /\A.*@wdi.com\z/,
    message: "invalid email address"
  }
end
