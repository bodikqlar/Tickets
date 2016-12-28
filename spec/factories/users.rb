FactoryGirl.define do
  factory :user, aliases: %i(owner assignee) do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    email { Faker::Internet.email }
    role { User.roles.keys.sample }
    password { '12345678' }
  end
end
