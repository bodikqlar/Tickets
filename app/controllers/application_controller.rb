class ApplicationController < ActionController::API
  before_action :authenticate_request
  attr_reader :current_user

  rescue_from Exception, with: :notify_admin
  rescue_from StandardError, with: :standard_error_handler
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_handler
  rescue_from ActiveRecord::RecordInvalid, ActionController::ParameterMissing, with: :handle_validation_error
  # Just a reminder to add Pundit

  # rescue_from CanCan::AccessDenied, with: :access_denied_handler

  private

  def notify_admin
    # send email to admin
  end

  def authenticate_request
    @current_user = AuthorizeApiRequest.call(request.headers).result
    render json: { error: 'Not Authorized' }, status: 401 unless @current_user
  end

  def standard_error_handler(e)
    Rails.logger.error "exception when retrieving appointments: #{e.message}, #{e.backtrace.join"\n"}"

    render json: { success: false, message: e.to_s }, status: :internal_server_error
  end

  def handle_validation_error(error)
    e = error.respond_to?(:record) ? error.record.errors : error
    render json: { message: e, success: false }, status: :unprocessable_entity
  end
end
