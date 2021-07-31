# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Contact, type: :model do
  subject do
    described_class.new(first_name: 'test', last_name: 'test surname',
                        email: 'test@email.com', phone_number: '1234567890')
  end

  let(:contact) do
    described_class.create(first_name: 'test', last_name: 'test surname',
                           email: 'test@email.com', phone_number: '1234567890')
  end
  let(:first_name) { contact.first_name }
  let(:last_name) { contact.last_name }
  let(:email) { contact.email }
  let(:phone) { contact.phone_number }

  context 'when given valid attributes' do
    it { expect(subject).to be_valid }
  end

  context 'when given invalid attributes' do
    context 'with empty phone number' do
      it_behaves_like 'invalid object', described_class.create(first_name: 'test', last_name: 'test surname',
                                                               email: 'test@email.com')
    end

    context 'with duplicate email' do
      before do
        described_class.create!(first_name: 'test', last_name: 'test surname',
                                email: 'test@email.com', phone_number: '1234567890')
      end

      it { expect(subject).not_to be_valid }
    end
  end

  describe 'contact versions' do
    let(:contact) do
      described_class.create(first_name: 'test', last_name: 'test surname',
                             email: 'test@email.com', phone_number: '1234567890',
                             slug: 'testemailcom')
    end
    before do
      contact.update!(last_name: 'test last name')
    end

    it 'has two versions' do
      expect(contact.versions.count).to eq 2
    end

    it 'has a created version' do
      expect(contact.versions.first.event).to eq 'create'
    end

    it 'has a updated version' do
      expect(contact.versions.last.event).to eq 'update'
    end
  end
end
