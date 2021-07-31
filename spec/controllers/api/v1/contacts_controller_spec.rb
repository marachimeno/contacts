# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::ContactsController, type: :controller do
  let(:selected_contact) { Contact.create(first_name: 'test', last_name: 'test surname',
                                          email: 'test@email.com', phone_number: '1234567890',
                                          slug: 'testemailcom') }

  describe "GET #index" do
    context 'with a successful request'  do
      before { get :index }

      it_behaves_like 'returns status successful'
      it_behaves_like 'returns JSON with all main keys'
    end
  end

  describe "GET #show" do
    context 'with a successful request'  do
      before { put :show, params: { slug: selected_contact.slug } }

      it_behaves_like 'returns status successful'
      it_behaves_like 'returns JSON with all main keys'
      it_behaves_like 'returns JSON with all contact keys'
      it_behaves_like 'returns JSON with all versions keys'

    end
  end

  describe "POST #create" do
    before { post :create, params: params }

    context 'when given the required params'  do
      let(:params) do
        {
          contact: {
            first_name: 'test name',
            last_name: 'test surname',
            email: 'test@email.com',
            phone_number: '1234567890'
          }
        }
      end

      let(:data_response_body) do
        {
          "first_name"=>'test name',
          "last_name"=>'test surname',
          "email"=>'test@email.com',
          "phone_number"=>'1234567890',
          "slug"=>"testemailcom"
        }
      end

      let(:included_response_body) do
        {
          "item_type"=>"Contact",
          "event"=>"create",
          "created_at"=>"2008-09-01T12:00:00.000Z"
        }
      end

      before { Timecop.freeze(2008, 9, 1, 12, 0, 0) }

      it_behaves_like 'returns status successful'
      it_behaves_like 'returns JSON with all main keys'
      it_behaves_like 'returns JSON with all contact keys'
      it_behaves_like 'returns JSON with all versions keys'
      it_behaves_like 'JSON body response contains expected contact data attributes', { "first_name"=>'test name',
                                                                                        "last_name"=>'test surname',
                                                                                        "email"=>'test@email.com',
                                                                                        "phone_number"=>'1234567890',
                                                                                        "slug"=>"testemailcom" }
      it_behaves_like 'JSON body response contains expected contact included versions', { "item_type"=>"Contact",
                                                                                          "event"=>"create",
                                                                                          "created_at"=>"2008-09-01T12:00:00.000Z" }
    end

    context 'when given invalid params'  do
      let(:params) do
        {
          contact: {
            first_name: 'test name',
            email: 'test@email.com',
          }
        }
      end

      let(:json_response) { JSON.parse(response.body) }

      it_behaves_like 'returns JSON with all error keys'
      it_behaves_like 'renders error message', 'Unprocessable entity'
    end
  end

  describe "PATCH #update" do
    context 'with a successful request'  do
      let(:contact_attributes) do
        {
          first_name: 'test name',
          last_name: 'test surname',
          email: 'test@email.com',
          phone_number: '0987654321',
          slug: 'testemailcom'
        }
      end

      let(:data_response_body) do
        {
          "first_name"=>'test name',
          "last_name"=>'test surname',
          "email"=>'test@email.com',
          "phone_number"=>'0987654321',
          "slug"=>"testemailcom"
        }
      end

      let(:included_response_body) do
        {
          "item_type"=>"Contact",
          "event"=>"create",
          "created_at"=>"2008-09-01T12:00:00.000Z"
        }
      end

      before do
        Timecop.freeze(2008, 9, 1, 12, 0, 0)
        put :update, params: { slug: selected_contact.slug, contact: contact_attributes }
      end

      it_behaves_like 'returns status successful'
      it_behaves_like 'returns JSON with all main keys'
      it_behaves_like 'returns JSON with all contact keys'
      it_behaves_like 'returns JSON with all versions keys'
      it_behaves_like 'JSON body response contains expected contact data attributes', { "first_name"=>'test name',
                                                                                        "last_name"=>'test surname',
                                                                                        "email"=>'test@email.com',
                                                                                        "phone_number"=>'0987654321',
                                                                                        "slug"=>"testemailcom" }
      it_behaves_like 'JSON body response contains expected contact included versions', { "item_type"=>"Contact",
                                                                                          "event"=>"create", #todo
                                                                                          "created_at"=>"2008-09-01T12:00:00.000Z" }
    end

    context "when given an non-existing contact" do
      before do
        put :update, params: { slug: contact[:slug], contact: contact_attributes }
      end

      let(:contact) do
        {
          slug: 'testslug'
        }
      end

      let(:contact_attributes) do
        {
          first_name: 'first name'
        }
      end

      it_behaves_like 'returns JSON with all error keys'
      it_behaves_like 'renders error message', 'Record not found'
    end
  end

  describe "DELETE #delete" do
    context 'with a successful request'  do
      before do
        delete :destroy, params: { slug: selected_contact.slug }
      end

      it_behaves_like 'returns status successful'
    end
  end
end
