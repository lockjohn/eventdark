class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name, null:false 
      t.integer :organizer_id, null:false 
      t.datetime :date, null:false
      t.datetime :time, null:false 
      t.integer :location_id, null:false 
      t.text :description, null:false 
      t.float :price, null:false
      t.integer :capacity, null:false 

      t.timestamps
    end
    add_index :events, [:organizer_id, :name]
  end
end
