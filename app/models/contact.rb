class Contact < ApplicationRecord
  has_paper_trail

  validates :first_name, presence: true, length: { minimum: 2 }
  validates :last_name, presence: true, length: { minimum: 2 }
  validates :email, presence: true, uniqueness: true
  validates :phone_number, presence: true, length: { minimum: 6 }
end
