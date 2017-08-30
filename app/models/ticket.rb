class Ticket < ApplicationRecord

#---------Associations-----------

  belongs_to :assignee, class_name: 'User'
  belongs_to :owner, class_name: 'User'
  belongs_to :ticket_status

  has_many :ticket_histories, dependent: :destroy

#---------Enums------------------

  enum urgency: %i(trivial low medium high urgent critical)

#---------Callbacks--------------

  before_validation :assign_assignee, on: :create
  after_update :add_to_history

#---------Validations--------------

  validates :owner, :assignee, :urgency, :ticket_status, presence: true

#---------Instance methods---------

  def add_to_history
    ticket_histories.create(user: assignee, ticket_status: ticket_status) if changed.include?('ticket_status_id')
  end

#---------Class methds ------------

  def self.closed_in_last_month
  end

  private

  def assign_assignee
    self.assignee = owner unless assignee
  end
end
