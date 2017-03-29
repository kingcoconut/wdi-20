class CreateSpecies < ActiveRecord::Migration[5.0]
  def change
    create_table :species do |t|
      t.string :name
      t.string :status
      t.integer :habitat_id

      t.timestamps
    end
  end
end
