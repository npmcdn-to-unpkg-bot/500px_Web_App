class Photo < ActiveRecord::Base

  validates "500px_id".to_sym, :photo_info, presence: true

  def self.process_popular(popular_photos)
    photo_ids = []
    popular_photos["photos"].each do |photo_info|
      photo_ids << photo_info["id"]

      unless Photo.find_by("500px_id".to_sym => photo_info["id"])
        Photo.create!("500px_id".to_sym => photo_info["id"], photo_info: photo_info.to_json)
      end
    end

    photo_ids
  end

end
