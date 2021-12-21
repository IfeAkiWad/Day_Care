class SessionsController < ApplicationController
    def new
        # @admin = Admin.new
    end
    
    def create
    @admin = Admin.find_by(username: session_params[:username])
        if @admin && @admin.authenticate(session_params[:password])
            session[:admin_id] = @admin.id
            render json: {
            user: AdminSerializer.new(@admin)
            }
        else
            render json: { 
            status: 401, 
            error: "Could not authenticate your account"
            }
        end
    end

    def is_logged_in?
    # @current_admin = Admin.find_by_id(session[:admin_id]) if session[:admin_id]
        if current_admin
            render json: {
            logged_in: true,
            user: AdminSerializer.new(@current_admin)
            }
        else
            render json: {
            logged_in: false
            }
        end
    end

    def destroy
        session.clear  #:admin_id
        render json: {
            status: 200,
            logged_out: true
        }
    end

    private
        def current_admin
            if session[:admin_id]
                @current_admin ||= Admin.find_by_id(session[:admin_id])
            end
        end 

        def session_params
            params.require(:admin).permit(:username, :password)
        end
    end