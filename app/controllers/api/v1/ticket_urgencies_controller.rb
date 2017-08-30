class Api::V1::TicketUrgenciesController < ApplicationController
  def index
    @ticket_urgencies = Ticket.urgencies.keys
  end
end
