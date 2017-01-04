class Api::V1::AuthenticationController < ApplicationController

  skip_before_action :authenticate_request

  def authenticate
    @command = AuthenticateUser.call(params[:email], params[:password])

    render json: { error: @command.errors }, status: :unauthorized unless @command.success?
  end
end
