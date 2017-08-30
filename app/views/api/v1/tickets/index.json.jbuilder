json.array! @data do |item|
  json.status_id item[:status].id
  json.status item[:status].title

  json.tickets do
    json.partial! '/api/v1/tickets/ticket', collection: item[:tickets], as: :ticket
  end
end
