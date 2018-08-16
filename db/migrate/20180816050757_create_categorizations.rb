class CreateCategorizations < ActiveRecord::Migration[5.2]
  def change
    create_table :categorizations do |t|
      t.integer :event_id
      t.integer :category_id
      t.integer :taggings

      t.timestamps
    end
    add_index :categorizations, [:event_id, :category_id]
    #Ex:- add_index("admin_users", "username")
  end
end
