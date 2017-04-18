FactoryGirl.define do
  factory :experience do
    company {Faker::Company.name}
    title {Faker::Company.profession}
    start_date {Time.now - (rand(30) + 1).years}
  end
end
