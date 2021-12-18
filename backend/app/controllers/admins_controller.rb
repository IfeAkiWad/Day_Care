class AdminsController < ApplicationController
  skip_before_action :authorized, only: [:create]

  # GET /admins
  def index
    @admins = Admin.all

  #   render json: @admins
  # end

  # POST /admins
  def create
    # byebug
    @admin = Admin.new(admin_params)

    if @admin.save
        session[:admin_id] = @admin.id
        render json: @admin, status: :created, location: @admin
    else
        render json: @admin.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin
      @admin = Admin.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def admin_params
      params.require(:admin).permit(:username, :password_digest, :password_confirmation)
    end
end
