class CreateChildren < ActiveRecord::Migration[6.0]
  def change
    create_table :children do |t|
      t.string :name
      t.date :birthday
      t.string :emergency_contact
      t.integer :phone
      t.string :allergy
      t.integer :daycare_id

      t.timestamps
    end
  end
end
