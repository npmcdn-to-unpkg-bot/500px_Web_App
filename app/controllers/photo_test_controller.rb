require 'open-uri'

class PhotoTestController < ApplicationController

  def index
    consumer_key = Figaro.env.consumer_key!
    photos = JSON.load(open("https://api.500px.com/v1/photos?feature=popular&image_size=3&rpp=100&include_states=voted&consumer_key=#{consumer_key}"))
    popular_ids = Photo.process_popular(photos)
    current_user = User.create!(session_token: User.generate_session_token, popular_photos: popular_ids)
    login!(current_user)
    
    render :index
  end

end
