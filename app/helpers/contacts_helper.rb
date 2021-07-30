# frozen_string_literal: true

module ContactsHelper
  def render_serialized_contact(contact)
    render json: ContactSerializer.new(contact, options).serialized_json
  end
end
