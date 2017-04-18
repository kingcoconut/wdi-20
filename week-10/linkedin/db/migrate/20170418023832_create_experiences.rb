class CreateExperiences < ActiveRecord::Migration[5.0]
  def change
    create_table :experiences do |t|
      t.string :company
      t.string :title
      t.timestamp :start_date
      t.timestamp :end_date
      t.string :description
      t.string :location
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
