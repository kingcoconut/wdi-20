FactoryGirl.define do
  factory :user do
    first_name {Faker::Name.first_name}
    last_name {Faker::Name.last_name}
    sequence(:email) {|n| "foo-#{n}@foo.com"}

    trait :with_experiences do
      after(:create) do |user|
        rand(1..6).times { FactoryGirl.create(:experience, user: user) }
      end
    end
  end
end
