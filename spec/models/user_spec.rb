require 'rails_helper'

RSpec.describe User, type: :model do
  it 'has a valid factory' do
    expect(build :user).to be_valid
  end

  context 'validations' do
    it { is_expected.to validate_presence_of(:first_name) }
    it { is_expected.to validate_presence_of(:last_name) }
    it { is_expected.to validate_presence_of(:email) }

    it { is_expected.to validate_uniqueness_of(:email) }
    it { is_expected.to validate_length_of(:email) }
  end

  context 'enums' do
    it { is_expected.to define_enum_for(:role) }
  end

  context 'associations' do
    it { is_expected.to have_many(:ticket_histories) }
    it { is_expected.to have_many(:own_tickets) }
    it { is_expected.to have_many(:assigned_tickets) }
  end

  context 'instance methods' do
    describe '#tickets' do
      let(:owner) { build_stubbed :owner }
      let(:assignee) { build_stubbed :assignee }

      it 'takes both own and assigned tickets' do
        own_ticket = create :ticket, owner: owner, assignee: assignee
        assigned_ticket = create :ticket, owner: assignee, assignee: owner

        expect(owner.tickets).to include(own_ticket, assigned_ticket)
      end
    end
  end
end
