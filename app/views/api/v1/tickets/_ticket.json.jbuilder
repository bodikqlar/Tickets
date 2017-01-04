json.(ticket, :id, :title, :description, :estimate, :closed_at, :urgency, :created_at, :updated_at)

json.assignee do
  json.cache! ['v1', ticket.assignee], expires_in: 1.hour do
    json.partial! '/api/v1/users/user', user: ticket.assignee
  end
end

json.owner do
  json.cache! ['v1', ticket.owner], expires_in: 1.hour do
    json.partial! '/api/v1/users/user', user: ticket.owner
  end
end

json.cache! ['v1', ticket.ticket_status], expires_in: 1.hour do
  json.ticket_status do
    json.partial! '/api/v1/ticket_statuses/ticket_status', ticket_status: ticket.ticket_status
  end
end
