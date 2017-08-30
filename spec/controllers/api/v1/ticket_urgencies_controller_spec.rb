require 'rails_helper'

RSpec.describe Api::V1::TicketUrgenciesController, type: :controller do

  let(:user) { create(:user, role: :standard) }

  before(:each) do
    stub_current_user(user)
  end

  describe "GET #index" do

    it 'receives all tickets' do
      get :index, format: :json
      expect(response).to have_http_status(:success)
      expect(json_response).to eq(Ticket.urgencies.keys)
      expect(response).to render_template("api/v1/ticket_urgencies/index")
    end
  end
end
