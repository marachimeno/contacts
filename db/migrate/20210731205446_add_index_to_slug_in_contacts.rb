class AddIndexToSlugInContacts < ActiveRecord::Migration[6.0]
  def change
    add_index :contacts, :slug
  end
end
