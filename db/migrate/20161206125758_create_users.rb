class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email, index: { unique: true }
      t.string :password_digest
      t.integer :role, default: User.roles[:standard], null: false
      t.timestamps
    end
  end
end
