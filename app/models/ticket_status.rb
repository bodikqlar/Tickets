class TicketStatus < ApplicationRecord
#---------Associations-----------

  has_many :tickets, dependent: :nullify

#---------Validations------------

  validates :title, uniqueness: true, presence: true
end
