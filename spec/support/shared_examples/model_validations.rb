# frozen_string_literal: true

RSpec.shared_examples 'invalid object' do |subject|
  it { expect(subject).not_to be_valid }
end
