class CoursesController < ApplicationController

    def index
      if session[:user_id]
        render json: Course.all, status: :created
      else
        render json: { errors: [] }, status: :unauthorized
      end
    end
  
    def create
      # byebug
      if course[:user_id]
        user = User.find(session[:user_id])
        course= user.course.new(course_params)
        if course.valid?
          course.save!
          render json: course, status: :created
        else
          render json: { errors: course.errors.full_messages }, status: :unprocessable_entity
        end
      else
        render json: { errors: [] }, status: :unauthorized
      end
    end
  
    private
  
    def course_params
      params.permit(:title, :description, :duration)
    end
  end
