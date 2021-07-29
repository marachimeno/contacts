# frozen_string_literal: true

module Api
  module V1
    class ContactsController < ApplicationController
      protect_from_forgery with: :null_session
      include ContactsHelper
      before_action :set_contact, only: [:show, :update, :destroy]

      def index
        contacts = Contact.all

        render_serialized_contact(contacts)
      end

      def show
        render_serialized_contact(@contact)
      end

      def create
        contact = Contact.new(contact_params)

        contact.save!
        render_serialized_contact(contact)
      end

      def update
        @contact.update!(contact_params)
        render_serialized_contact(@contact)
      end

      def destroy
        @contact.destroy!

        head :no_content
      end

      private

      def contact_params
        params.require(:contact).permit(:first_name, :last_name, :email, :phone_number)
      end

      def set_contact
        @contact ||= Contact.find_by!(slug: params[:slug])
      end

      def options
        @options ||= { include: %i[versions] }
      end
    end
  end
end
