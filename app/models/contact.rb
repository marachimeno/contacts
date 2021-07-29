# frozen_string_literal: true

class Contact < ApplicationRecord
  has_many :versions
  has_paper_trail

  validates :first_name, presence: true, length: { minimum: 2 }
  validates :last_name, presence: true, length: { minimum: 2 }
  validates :email, presence: true, uniqueness: true
  validates :phone_number, presence: true, length: { minimum: 6 }

  before_create :create_slug_username
  before_update :create_slug_username

  def create_slug_username
    self.slug = email.delete('@').delete('.')
  end
end
