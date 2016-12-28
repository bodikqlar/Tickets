class Api::V1::UsersController < ApplicationController
  skip_before_action :authenticate_request, except: %i(update destroy)
  before_action :user, only: %i(show destroy update)

  def index
    @users = User.standard
  end

  def create
    @user = User.create!(user_params.except(:id))
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
