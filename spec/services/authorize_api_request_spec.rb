require 'rails_helper'

RSpec.describe AuthorizeApiRequest, type: :service do
  describe ".call" do
    it 'returns correct authenticated user' do
      user = create(:user)
      token = AuthenticateUser.call(user.email, attributes_for(:user)[:password]).result
      headers = { 'Authorization' => token }
      request = OpenStruct.new(headers: headers)
      expect(AuthorizeApiRequest.call(request).result).to eq(user)
    end

    it "doesn't return user " do
      headers = { 'Authorization' => 'wrong_token' }
      request = OpenStruct.new(headers: headers)
      expect(AuthorizeApiRequest.call(request).result).to be_nil
      expect(AuthorizeApiRequest.call(request).errors[:token]).to include('Invalid token')
    end

    it "adds correct token error " do
      headers = { 'Authorization' => 'wrong_token' }
      request = OpenStruct.new(headers: headers)
      expect(AuthorizeApiRequest.call(request).errors[:token]).to include('Invalid token')
    end
  end
end
