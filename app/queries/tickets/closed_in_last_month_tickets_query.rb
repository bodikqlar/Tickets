class Tickets::ClosedInLastMonthTicketsQuery
  def initialize(relation = Ticket.all)
    @relation = relation
  end

  def call
    ticket_status_id = TicketStatus.closed.id
    @relation.joins(:ticket_histories).where(
      'ticket_histories.ticket_status_id = ? AND tickets.ticket_status_id = ?',
      ticket_status_id, ticket_status_id
    ).where(
      ticket_histories: {
        created_at: Date.current.prev_month.beginning_of_month..Date.current.prev_month.end_of_month
    })
  end
end
