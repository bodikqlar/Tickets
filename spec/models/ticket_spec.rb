require 'rails_helper'

RSpec.describe Ticket, type: :model do
  it 'has a valid factory' do
    expect(build :ticket).to be_valid
  end

  context 'associations' do
    it { is_expected.to belong_to(:assignee) }
    it { is_expected.to belong_to(:owner) }
    it { is_expected.to belong_to(:ticket_status) }

    it { is_expected.to have_many(:ticket_histories) }
  end

  context 'validations' do
    it { is_expected.to validate_presence_of(:owner) }
    it { is_expected.to validate_presence_of(:assignee) }
    it { is_expected.to validate_presence_of(:urgency) }
    it { is_expected.to validate_presence_of(:ticket_status) }
  end

  context 'enums' do
    it { is_expected.to define_enum_for(:urgency) }
  end

  context 'instance methods' do
    describe '#add_to_history' do
      it 'adds ticket to the history' do
        ticket = create :ticket
        ticket_status = build_stubbed :ticket_status
        expect { ticket.update(ticket_status: ticket_status) }.to change{TicketHistory.count}.by(1)
      end
    end
  end
end
