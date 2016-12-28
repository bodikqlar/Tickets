class TicketHistory < ApplicationRecord
#---------Associations-----------

  belongs_to :ticket
  belongs_to :user
  belongs_to :ticket_status

end
