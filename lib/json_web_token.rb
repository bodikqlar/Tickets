class JsonWebToken
  class << self
    def encode(payload, exp = 24.hours.from_now)
      raise TypeError, 'Hash is expected' unless payload.is_a? Hash

      payload['exp'] = exp.to_i
      JWT.encode(payload, Rails.application.secrets.secret_key_base)
    end

    def decode(token)
      body = JWT.decode(token, Rails.application.secrets.secret_key_base).first
      HashWithIndifferentAccess.new body
    rescue => e
      Rails.logger.warn( "Token decoding error #{e.to_s}" )
      nil
    end
  end
end
