class AddSlugToContact < ActiveRecord::Migration[6.0]
  def change
    add_column :contacts, :slug, :string
  end
end
