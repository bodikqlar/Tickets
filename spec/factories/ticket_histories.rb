FactoryGirl.define do
  factory :ticket_history do
    user
    ticket_status
    ticket
  end
end
