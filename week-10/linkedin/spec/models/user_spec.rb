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

  describe "#current_position" do
    context "when a user has experiences" do
      it "should return the title from the users most recent experience" do
        user = FactoryGirl.create(:user, :with_experiences)
        current_experience = FactoryGirl.create(:experience, user: user, start_date: Time.now)
        expect(user.current_position).to eq "#{current_experience.title}, #{current_experience.company}"
      end
    end
    context "when a user has no experiences" do
      it "should return empty string" do
        user = User.create(email: "foo@goo.com", first_name: "Foo", last_name: "Bar")
        expect(user.current_position).to eq "Unemployed"
      end
    end
  end
end
