class Ticket < ApplicationRecord

#---------Associations-----------

  belongs_to :assignee, class_name: 'User'
  belongs_to :owner, class_name: 'User'
  belongs_to :ticket_status

  has_many :ticket_histories, dependent: :destroy

#---------Enums------------------

  enum urgency: %i(trivial low medium high urgent critical)

#---------Callbacks--------------

  after_update :add_to_history

#---------Validations--------------

  validates :owner, :assignee, :urgency, :ticket_status, presence: true

#---------Instance methods---------

  def add_to_history
    ticket_histories.create(user: assignee, ticket_status: ticket_status)
  end
end
