require 'rails_helper'

RSpec.describe AuthenticateUser, type: :service do
  describe ".call" do
    it 'authenticates successfully' do
      user = create :user

      command = AuthenticateUser.call(user.email, user.password)
      expect(command).to be_success
      expect(command.result).not_to be_nil
    end

    it "doesn't authenticate" do
      user = create :user

      command = AuthenticateUser.call((build :user).email, user.password)

      expect(command).not_to be_success
      expect(command.result).to be_nil
      expect(command.errors[:user_authentication]).to include('invalid credentials')
    end
  end
end
