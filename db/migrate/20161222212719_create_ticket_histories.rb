class CreateTicketHistories < ActiveRecord::Migration[5.0]
  def change
    create_table :ticket_histories do |t|
      t.belongs_to :ticket, index: true
      t.belongs_to :user, index: true
      t.belongs_to :ticket_status, index: true
      t.timestamps
    end
  end
end
