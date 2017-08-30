class Api::V1::UsersController < ApplicationController
  # skip_before_action :authenticate_request, except: %i(update destroy)
  before_action :user, only: %i(show destroy update)

  def index
    @users = if params[:only_support]
               User.support_agent
             else
               User.all
             end
  end

  def create
    # @user = User.create!(user_params.except(:id))
    render json: { valid: true, ttl: 1.day, cookies: { code: 3, data: 4 } }
  end

  def show
  end

  def destroy
    @user.destroy
    render json: {
      success: true,
      message: I18n.t('controllers.user.destroyed')
    }
  end

  def update
    @user.update!(user_params)
  end

  private

  def user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:id, :first_name, :last_name, :password, :password_confirmation, :email)
  end
end
