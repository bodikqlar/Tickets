require 'rails_helper'

RSpec.describe AuthenticateUser, type: :service do
  describe '.encode' do
    it 'encodes successfully' do
      example_hash = { 'example_token' => 'example_token' }
      result = JsonWebToken.encode(example_hash)
      expect(result).not_to be_nil
      expect(result).not_to eq(example_hash)
    end

    it "doesn't encode wrong type" do
      example_string = 'example_token'
      expect{JsonWebToken.encode(example_string)}.to raise_error(TypeError)
    end
  end

  describe '.decode' do
    it 'decodes successfully' do
      example_hash = { 'example_token' => 'example_token' }
      token = JsonWebToken.encode(example_hash)

      expect(JsonWebToken.decode(token)).to eq(example_hash)
    end

    it "doesn't decode wrong type" do
      example_hash = { 'example_token' => 'example_token' }
      wrong_token = 'example_token'
      expect(JsonWebToken.decode(wrong_token)).not_to eq(example_hash)
      expect(JsonWebToken.decode(wrong_token)).to be_nil
    end
  end
end
