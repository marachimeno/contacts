# frozen_string_literal: true

require 'rails_helper'

RSpec.shared_examples 'returns status successful' do
  it { expect(response).to have_http_status(:success) }
end

RSpec.shared_examples 'returns status unsuccessful' do
  it { expect(response).to have_http_status(:bad_request) }
end

RSpec.shared_examples 'returns JSON with all contact keys' do
  let(:json_response) { JSON.parse(response.body) }
  let(:keys) do
    %w[
      first_name
      last_name
      email
      phone_number
slug
    ]
  end

  it { expect(json_response['data']['attributes'].keys).to match_array(keys) }
end

RSpec.shared_examples 'returns JSON with all main keys' do
  let(:json_response) { JSON.parse(response.body) }
  let(:keys) do
    %w[
      data
      included
    ]
  end

  it { expect(json_response.keys).to match_array(keys) }
end

RSpec.shared_examples 'returns JSON with all versions keys' do
  let(:json_response) { JSON.parse(response.body) }
  let(:keys) do
    %w[
      item_id
      item_type
      event
      created_at
    ]
  end

  it { expect(json_response['included'].first['attributes'].keys).to match_array(keys) }
end

RSpec.shared_examples 'renders err message' do |err_message|
  let(:json_response) { JSON.parse(response.body) }

  it { expect(json_response['message']).to eq err_message }
end

RSpec.shared_examples 'JSON body response contains expected contact data attributes' do |response_body|
  let(:json_response) { JSON.parse(response.body)['data']['attributes'] }

  it { expect(json_response).to match(response_body) }
end

RSpec.shared_examples 'JSON body response contains expected contact included versions' do |response_body|
  let(:json_response) { JSON.parse(response.body)['included'].first['attributes'] }

  it { expect(json_response).to include(response_body) }
end
