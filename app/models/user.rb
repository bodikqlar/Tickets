class User < ApplicationRecord
#---------Validations------------
  validates :email, presence: true, uniqueness: true, length: { maximum: 100 }, email: true
  validates :first_name, :last_name, presence: true, length: { maximum: 100 }

#---------Extensions-------------

  has_secure_password
end
