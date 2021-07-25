class ContactsController < ApplicationController
  def index
    @contacts = Contact.all
  end

  def show
    @contact = set_contact
    @history = @contact.versions
  end

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    @contact.save

    if @contact.save
      redirect_to contact_path(@contact)
    else
      render :new
    end
  end

  def edit
    @contact = set_contact
  end

  def update
    @contact = set_contact

    if @contact.update(contact_params)
      redirect_to contact_path(@contact)
    else
      render :edit
    end
  end

  def destroy
    @contact = set_contact
    @contact.destroy

    redirect_to contacts_path
  end

  private

  def contact_params
    params.require(:contact).permit(:first_name, :last_name, :email, :phone_number)
  end

  def set_contact
    @contact = Contact.find(params[:id])
  end
end
