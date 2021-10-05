class ToddlersController < ApplicationController
  before_action :set_toddler, only: [:show, :update, :destroy]

  # GET /toddlers
  def index
    @toddlers = Toddler.all

    render json: @toddlers
  end

  # GET /toddlers/1
  def show
    render json: @toddler
  end

  # POST /toddlers
  def create
    @toddler = Toddler.new(toddler_params)

    if @toddler.save
      render json: @toddler, status: :created, location: @toddler
    else
      render json: @toddler.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /toddlers/1
  def update
    if @toddler.update(toddler_params)
      render json: @toddler
    else
      render json: @toddler.errors, status: :unprocessable_entity
    end
  end

  # DELETE /toddlers/1
  def destroy
    @toddler.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_toddler
      @toddler = Toddler.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def toddler_params
      params.require(:toddler).permit(:name, :birthday, :eemergency_contact, :phone, :allergy, :daycare_id)
    end
end
