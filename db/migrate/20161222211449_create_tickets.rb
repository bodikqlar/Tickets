class CreateTickets < ActiveRecord::Migration[5.0]
  def change
    create_table :tickets do |t|
      t.string :title
      t.text :description
      t.datetime :estimate
      t.datetime :closed_at
      t.integer :urgency
      t.belongs_to :assignee, index: true
      t.belongs_to :owner, index: true
      t.belongs_to :ticket_status, index: true
      t.timestamps
    end
  end
end
