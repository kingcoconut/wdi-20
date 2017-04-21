class CreateRequestCounts < ActiveRecord::Migration[5.0]
  def change
    create_table :request_counts do |t|
      t.string :ip
      t.integer :count

      t.timestamps
    end
  end
end
