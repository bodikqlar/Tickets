json.data do
  json.partial! '/api/v1/tickets/ticket', ticket: @ticket
end
json.message I18n.t('controllers.ticket.created')
