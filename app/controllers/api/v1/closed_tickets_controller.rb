class Api::V1::ClosedTicketsController < ApplicationController
  before_filter :ticket, only: %i(show destroy update)

  def index
    @tickets = Tickets::ClosedInLastMonthTicketsQuery.new(current_user.tickets).call
  end

  def export_pdf
    tickets =Tickets::ClosedInLastMonthTicketsQuery.new(current_user.tickets).call
    send_data TicketsPDF.new(tickets).render,
                filename: "tickets.pdf",
                disposition: 'inline'
  end
end
