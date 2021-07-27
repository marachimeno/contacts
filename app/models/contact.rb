class Contact < ApplicationRecord
  has_paper_trail
  has_many :versions

  validates :first_name, presence: true, length: { minimum: 2 }
  validates :last_name, presence: true, length: { minimum: 2 }
  validates :email, presence: true, uniqueness: true
  validates :phone_number, presence: true, length: { minimum: 6 }

  before_create :create_slug_username

  def create_slug_username
    self.slug = email.delete('@').delete('.')
  end
end
