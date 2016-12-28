require 'rails_helper'

RSpec.describe Api::V1::AuthenticationController, type: :controller do
  describe "POST #create" do
  	it 'authenticates successfully' do
  	  user = create :user
      post :authenticate, format: :json, params: { email: user.email, password: attributes_for(:user)[:password] }
      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body)['authToken']).not_to be_nil
    end
  end
end
