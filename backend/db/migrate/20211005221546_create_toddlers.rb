class CreateToddlers < ActiveRecord::Migration[6.0]
  def change
    create_table :toddlers do |t|
      t.string :name
      t.date :birthday
      t.string :contact
      t.integer :phone
      t.string :allergy
      t.integer :daycare_id

      t.timestamps
    end
  end
end
