class Api::PhotosController < ApplicationController
  def index
    consumer_key = Figaro.env.consumer_key!

    photos = JSON.load(open("https://api.500px.com/v1/photos?feature=popular&image_size=3&rpp=100&include_states=voted&consumer_key=#{consumer_key}"))
    popular_ids = Photo.process_popular(photos)
    unless current_user
      new_user = User.create!(session_token: User.generate_session_token, popular_photos: popular_ids)
      login!(new_user)
    end

    @popular_photos = current_user.popular_photos
    @popular_photos.map! do |photo_id|
      Photo.find_by("500px_id".to_sym => photo_id).photo_info
    end
    render :index
  end
end
