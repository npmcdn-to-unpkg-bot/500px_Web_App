class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :session_token, null: false, index: true
      t.integer :popular_photos, null: false, array: true
      t.timestamps null: false
    end
  end
end
