class Api::V1::RolesController < ApplicationController
  def index
    @roles = User.roles.keys
  end

  def update
    User.find(params[:id]).apply_role(params[:role])
  end
end
