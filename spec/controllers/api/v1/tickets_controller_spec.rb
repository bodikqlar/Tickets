require 'rails_helper'

RSpec.describe Api::V1::TicketsController, type: :controller do

  let(:user) { create(:user, role: :standard) }

  before(:each) do
    stub_current_user(user)
  end

  describe "GET #index" do

    it 'receives all tickets' do
      tickets = [create(:ticket, owner: user), create(:ticket, assignee: user)]

      excpected_data = json_data tickets.map{|u| ticket_response(u)}

      get :index, format: :json

      expect(response).to have_http_status(:success)
      expect(response).to render_template("api/v1/tickets/index")
      expect(json_response).to eq(excpected_data)
    end
  end

  describe "POST #create" do
    it 'creates ticket' do
      ticket_attributes = attributes_for(:ticket).merge({ticket_status_id: create(:ticket_status).id})

      expect{
        post :create, params: { ticket: ticket_attributes }, format: :json
      }.to change(Ticket, :count).by(1)
      expect(response).to have_http_status(:success)
      expect(response).to render_template("api/v1/tickets/create")
    end
  end

  describe "GET #show" do
    let(:ticket) { create :ticket, owner: user }

    it 'receives ticket' do
      get :show, format: :json, params: { id: ticket.id }

      expect(response).to have_http_status(:success)
      expect(response).to render_template("api/v1/tickets/show")
      expect(json_response).to eq(json_data(ticket_response(ticket)))
    end
  end

  describe "DELETE #destroy" do
    let!(:ticket) { create :ticket, owner: user }

    it 'destroys ticket' do
      expect{
        delete :destroy, format: :json, params: { id: ticket.id }
      }.to change(Ticket, :count).by(-1)

      expect(response).to have_http_status(:success)
      expect(json_response).to eq({ 'success' => true, 'message'=> I18n.t('controllers.ticket.destroyed') })
    end
  end

  describe "PUT #update" do
    let!(:ticket) { create(:ticket) }

    it 'updates ticket' do
      ticket_attributes = attributes_for(:ticket).slice(:title, :description).stringify_keys

      put :update, format: :json, params: { ticket: ticket_attributes, id: ticket.id }
      byebug
      expect(json_response['data'].slice(*ticket_attributes.keys)).to eq(ticket_attributes.slice(*ticket_attributes.keys))
      expect(response).to have_http_status(:success)
      expect(response).to render_template("api/v1/users/update")
    end
  end
end
