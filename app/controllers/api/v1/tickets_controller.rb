class Api::V1::TicketsController < ApplicationController
  before_action :ticket, only: %i(show destroy update)

  def index
    ticket_statuses = TicketStatus.all
    tickets = current_user.tickets

    @data = TicketJsonGenerator.index(ticket_statuses, tickets)
  end

  def create
    @ticket = current_user.own_tickets.create!(
      ticket_params.except(:id)
                   .merge({owner_id: current_user.id})
    )
  end

  def show
  end

  def destroy
    @ticket.destroy

    render json: {
      success: true,
      message: I18n.t('controllers.ticket.destroyed')
    }
  end

  def update
    @ticket.update!(ticket_params)
  end

  private

  def ticket
    @ticket = current_user.tickets.find(params[:id])
  end

  def ticket_params
    params.require(:ticket).permit(:id, :title, :description, :estimate, :closed_at, :urgency, :assignee_id, :owner_id, :ticket_status_id)
  end
end
