class DaycaresController < ApplicationController
  before_action :set_daycare, only: [:show, :update, :destroy]

  # GET /daycares
  def index
    @daycares = Daycare.all

    render json: @daycares
  end

  # GET /daycares/1
  def show
    render json: @daycare
  end

  # POST /daycares
  def create
    @daycare = Daycare.new(daycare_params)

    if @daycare.save
      render json: @daycare, status: :created, location: @daycare
    else
      render json: @daycare.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /daycares/1
  def update
    if @daycare.update(daycare_params)
      render json: @daycare
    else
      render json: @daycare.errors, status: :unprocessable_entity
    end
  end

  # DELETE /daycares/1
  def destroy
    @daycare.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_daycare
      @daycare = Daycare.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def daycare_params
      params.require(:daycare).permit(:name, :address)
    end
end
