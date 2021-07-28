class ContactSerializer
  include FastJsonapi::ObjectSerializer
  attributes :first_name, :last_name, :email, :phone_number, :slug
  has_many :versions
end
