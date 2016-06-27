class Photo < ActiveRecord::Base

  validates "500px_id".to_sym, :photo_info, presence: true

  def self.process_popular(popular_photos)
    popular_photos["photos"].each do |photo_info|
      unless Photo.find_by("500px_id".to_sym => photo_info["id"])
        Photo.create!("500px_id".to_sym => photo_info["id"], )


end
