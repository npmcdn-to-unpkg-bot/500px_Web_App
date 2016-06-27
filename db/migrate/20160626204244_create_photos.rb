class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.integer "500px_id", null: false, index: true
      t.json :photo_info, null: false
      t.timestamps null: false
    end
  end
end
