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
end
