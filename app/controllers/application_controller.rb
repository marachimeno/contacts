# frozen_string_literal: true

class ApplicationController < ActionController::Base
  rescue_from StandardError, with: :render_unexpected_error
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_error
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_error

  def render_not_found_error(exception)
    error_message = {
      error: 'Record not found',
      message: exception.record.errors
    }

    render json: error_message, status: :not_found
  end

  def render_unprocessable_entity_error(exception)
    error_message = {
      error: 'Unprocessable entity',
      message: exception.record.errors
    }

    render json: error_message, status: :unprocessable_entity
  end

  def render_unexpected_error(exception)
    error_message = {
      error: 'Unexpected error',
      message: exception.message
    }

    render json: error_message, status: :internal_server_error
  end
end
