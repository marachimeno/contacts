# frozen_string_literal: true

class ApplicationController < ActionController::Base
  rescue_from StandardError, with: :unexpected_error
  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_error
  rescue_from ActiveRecord::RecordNotFound, with: :not_found_error

  def not_found_error(exception)
    error_message = error_message('Record not found', exception.message)

    render json: error_message, status: :not_found
  end

  def unprocessable_entity_error(exception)
    error_message = error_message('Unprocessable entity', exception.record.errors)

    render json: error_message, status: :unprocessable_entity
  end

  def unexpected_error(exception)
    error_message = error_message('Unexpected error', exception.message)

    render json: error_message, status: :internal_server_error
  end

  private

  def error_message(error, message)
    {
      error: error,
      message: message
    }
  end
end
