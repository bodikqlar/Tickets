class TicketJsonGenerator
  class << self
    def index(statuses, tickets)
      statuses.inject([]) do |rez, item|
        rez.push({
          status: item,
          tickets: tickets.select{|t| t.ticket_status_id.eql?(item.id) }
        })
      end
    end
  end
end
