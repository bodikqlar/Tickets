class User < ApplicationRecord
#---------Validations------------

  validates :email, presence: true, uniqueness: true, length: { maximum: 100 }, email: true
  validates :first_name, :last_name, presence: true, length: { maximum: 100 }

#---------Enums------------------

  enum role: %i(admin standard support_agent)

#---------Associations-----------

  has_many :ticket_histories, dependent: :destroy
  has_many :own_tickets, foreign_key: :owner_id, class_name: 'Ticket'
  has_many :assigned_tickets, foreign_key: :assignee_id, class_name: 'Ticket'

#---------Extensions-------------

  has_secure_password

#----------Instance methods------

  def tickets
    own_tickets.or(assigned_tickets).preload(:owner, :ticket_status, :assignee).distinct
  end

  def apply_role(role)
    if User.roles.keys.include?(role)
      update(role: role)
    else
      raise ActiveRecord::RecordInvalid
    end
  end

  def as_json(options = {})
    super(except: %i(password_digest)).merge(options)
  end
end
