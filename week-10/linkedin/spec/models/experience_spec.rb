require 'rails_helper'

RSpec.describe Experience, type: :model do
  describe "validations" do
    it { is_expected.to validate_presence_of :company }
    it { is_expected.to validate_presence_of :title }
    it { is_expected.to validate_presence_of :start_date }
  end

  describe "associations" do
    it { is_expected.to belong_to :user }
  end
end
