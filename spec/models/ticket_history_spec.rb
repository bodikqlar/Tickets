require 'rails_helper'

RSpec.describe TicketHistory, type: :model do
  it 'has a valid factory' do
    expect(build :ticket_history).to be_valid
  end

  context 'associations' do
    it { is_expected.to belong_to(:ticket) }
    it { is_expected.to belong_to(:user) }
    it { is_expected.to belong_to(:ticket_status) }
  end
end
