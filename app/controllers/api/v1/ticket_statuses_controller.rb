class Api::V1::TicketStatusesController < ApplicationController

  def index
    @ticket_statuses = TicketStatus.all
  end
end
