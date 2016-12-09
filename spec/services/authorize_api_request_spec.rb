require 'rails_helper'

RSpec.describe AuthorizeApiRequest, type: :service do
  describe ".call" do
    it 'returns correct authenticated user' do
      user = create(:user)
      token = AuthenticateUser.call(user.email, attributes_for(:user)[:password]).result
      headers = { 'Authorization' => token }
      expect(AuthorizeApiRequest.call(headers).result).to eq(user)
    end

    it "doesn't return user " do
      headers = { 'Authorization' => 'wrong_token' }
      expect(AuthorizeApiRequest.call(headers).result).to be_nil
      expect(AuthorizeApiRequest.call(headers).errors[:token]).to include('Invalid token')
    end

    it "adds correct token error " do
      headers = { 'Authorization' => 'wrong_token' }
      expect(AuthorizeApiRequest.call(headers).errors[:token]).to include('Invalid token')
    end
  end
end
