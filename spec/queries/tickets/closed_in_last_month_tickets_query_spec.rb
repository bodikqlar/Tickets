require 'rails_helper'

RSpec.describe Tickets::ClosedInLastMonthTicketsQuery, type: :service do
  describe ".call" do
    it 'returns necessary data' do
      ticket = create :ticket_status, title: TicketStatus::CLOSED
      ticket = create :ticket
      unexpected_ticket = create :ticket
      ticket.update(ticket_status_id: TicketStatus.closed.id)
      TicketHistory.last.update(created_at: DateTime.now - 1.month )

      expect(Tickets::ClosedInLastMonthTicketsQuery.new.call).to include(ticket)
    end
  end
end
