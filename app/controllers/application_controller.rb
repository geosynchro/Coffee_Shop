class ApplicationController < ActionController::API
    include ActionController::Cookies
  
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    before_action :authorize
    
    private
  
    def render_not_found_response(exception)
      render json: { error: "#{exception.model} not found" }, status: :not_found
    end
  
    def render_unprocessable_entity_response(exception)
      render json:{errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    def authorize
      @user ||= User.find_by(id: session[:user_id])
      return render json: { error: ["Not Authorized"]}, status: :unauthorized unless @user 
    end 
  end