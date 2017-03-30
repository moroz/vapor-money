class CreateAccounts < ActiveRecord::Migration[5.0]
  def change
    create_table :accounts do |t|
      t.string :name
      t.integer :owner_id
      t.string :currency
      t.decimal :balance, precision: 8, scale: 2

      t.timestamps
    end
  end
end
