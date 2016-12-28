class CreateTicketStatuses < ActiveRecord::Migration[5.0]
  def change
    create_table :ticket_statuses do |t|
      t.string :title
      t.timestamps
    end
  end
end
