class CreateRecords < ActiveRecord::Migration[5.0]
  def change
    create_table :records do |t|
      t.date :date
      t.decimal :amount, precision: 8, scale: 2
      t.string :description

      t.timestamps
    end
  end
end
