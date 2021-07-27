module Api
  module V1
    class ContactsController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        contacts = Contact.all

        render json: ContactSerializer.new(contacts).serialized_json
      end

      def show
        contact = set_contact

        render_serialized_contact(contact)
      end

      def create
        contact = Contact.new(contact_params)
        if contact.save!
          render_serialized_contact(contact)
        else
          render_json_errors(contact)
        end
      end

      def update
        contact = set_contact
        if contact.update!(contact_params)
          render_serialized_contact(contact)
        else
          render_json_errors(contact)
        end
      end

      def destroy
        contact = set_contact
        if contact.destroy!
          head :no_content
        else
          render json: { errors: contact.errors.messages }, status: 422
        end
      end

      private

      def contact_params
        params.require(:contact).permit(:first_name, :last_name, :email, :phone_number, :slug)
      end

      def set_contact
        Contact.find_by(slug: params[:slug])
      end

      def render_serialized_contact(contact)
        render json: ContactSerializer.new(contact).serialized_json
      end

      def render_json_errors(contact)
        render json: { error: contact.errors.messages }, status: 422
      end
    end
  end
end
