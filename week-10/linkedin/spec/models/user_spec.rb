require 'rails_helper'

RSpec.describe User, type: :model do
  describe "validations" do
    it { is_expected.to validate_presence_of :first_name }
    it { is_expected.to validate_presence_of :last_name }
    it { is_expected.to validate_presence_of :email }
  end

  describe "associations" do
    it { is_expected.to have_many :experiences }
  end

  describe "#full_name" do
    it "returns the first_name and last_name together" do
      user = User.create(email: "foo@foo.com", first_name: "Foo", last_name: "Bar")
      expect(user.full_name).to eq "Foo Bar"
    end
  end
end
