class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string :location, null: false 
      t.string :address, null: false 

      t.timestamps null: false 
    end
  end
end
