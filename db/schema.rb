# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161222213015) do

  create_table "ticket_histories", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "ticket_id"
    t.integer  "user_id"
    t.integer  "ticket_status_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.index ["ticket_id"], name: "index_ticket_histories_on_ticket_id", using: :btree
    t.index ["ticket_status_id"], name: "index_ticket_histories_on_ticket_status_id", using: :btree
    t.index ["user_id"], name: "index_ticket_histories_on_user_id", using: :btree
  end

  create_table "ticket_statuses", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tickets", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "title"
    t.text     "description",      limit: 65535
    t.datetime "estimate"
    t.datetime "closed_at"
    t.integer  "urgency"
    t.integer  "assignee_id"
    t.integer  "owner_id"
    t.integer  "ticket_status_id"
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.index ["assignee_id"], name: "index_tickets_on_assignee_id", using: :btree
    t.index ["owner_id"], name: "index_tickets_on_owner_id", using: :btree
    t.index ["ticket_status_id"], name: "index_tickets_on_ticket_status_id", using: :btree
  end

  create_table "users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "password_digest"
    t.integer  "role",            default: 1, null: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
  end

end
