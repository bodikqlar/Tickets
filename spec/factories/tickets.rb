FactoryGirl.define do
  factory :ticket do
    title { Faker::Lorem.word }
    description { Faker::Lorem.paragraph }
    urgency { Ticket.urgencies.keys.sample }
    ticket_status
    owner
    assignee
  end
end
