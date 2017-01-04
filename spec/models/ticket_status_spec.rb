require 'rails_helper'

RSpec.describe TicketStatus, type: :model do
  it 'has a valid factory' do
    expect(build :ticket_status).to be_valid
  end

  context 'associations' do
    it { is_expected.to have_many(:tickets) }
  end

  context 'validations' do
    it { is_expected.to validate_presence_of(:title) }
    it { is_expected.to validate_uniqueness_of(:title) }
  end
end
