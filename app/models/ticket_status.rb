class TicketStatus < ApplicationRecord
#---------Constants--------------

  CLOSED = 'closed'.freeze

#---------Associations-----------

  has_many :tickets, dependent: :nullify

#---------Validations------------

  validates :title, uniqueness: true, presence: true

#---------Class methods ---------

  def self.closed
    find_by title: CLOSED
  end
end
