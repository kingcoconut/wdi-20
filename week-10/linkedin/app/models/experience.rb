class Experience < ApplicationRecord
  belongs_to :user
  validates_presence_of :company, :title, :start_date
end
