require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do
  describe "GET #index" do
    it 'receives all user' do
      users = create_list(:user, 2, role: :standard)
      expected_data = json_data users.map{|u| user_response(u)}

      get :index, format: :json

      expect(response).to have_http_status(:success)
      expect(response).to render_template("api/v1/users/index")
      expect(json_response).to eq(expected_data)
    end
  end

  describe "POST #create" do
    it 'creates user' do
      user_attributes = attributes_for(:user)

      expect{
        post :create, params: { user: user_attributes }, format: :json
      }.to change(User, :count).by(1)
      expect(response).to have_http_status(:success)
      expect(response).to render_template("api/v1/users/create")
    end
  end

  describe "GET #show" do
    it 'receives user' do
      user = create :user

      get :show, format: :json, params: { id: user.id }

      expect(response).to have_http_status(:success)
      expect(response).to render_template("api/v1/users/show")
      expect(json_response).to eq(json_data(user_response(user)))
    end
  end

  describe "DELETE #destroy" do
    it 'destroys user' do
      user = create :user
      stub_current_user(user)

      expect{
        delete :destroy, format: :json, params: { id: user.id }
      }.to change(User, :count).by(-1)

      expect(response).to have_http_status(:success)
      expect(json_response).to eq({ 'success' => true, 'message'=> I18n.t('controllers.user.destroyed') })
    end
  end


  describe "PUT #update" do
    it 'creates user' do
      user = create :user
      stub_current_user(user)
      user_attributes = attributes_for(:user).slice(:firstName, :lastName, :email).stringify_keys

      put :update, format: :json, params: { user: user_attributes, id: user.id }

      expect(json_response['data'].slice(*user_attributes.keys)).to eq(user_attributes.slice(*user_attributes.keys))
      expect(response).to have_http_status(:success)
      expect(response).to render_template("api/v1/users/update")
    end
  end
end
