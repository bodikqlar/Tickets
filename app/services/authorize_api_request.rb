class AuthorizeApiRequest

  prepend SimpleCommand

  def initialize(request = {})
    @request = request
  end

  def call
    user
  end

  private

  attr_reader :request

  def user
    @user ||= User.find(decoded_auth_token[:user_id]) if decoded_auth_token
    @user || errors.add(:token, 'Invalid token') && nil
  end

  def decoded_auth_token
    @decoded_auth_token ||= JsonWebToken.decode(http_auth_header)
  end

  def http_auth_header
    token = request.headers['Authorization'] || request.params['access_token']
    if token.present?
      return token.split(' ').last
    else
      errors.add(:token, 'Missing token')
    end
    nil
  end
end
