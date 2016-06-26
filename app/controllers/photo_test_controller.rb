require 'open-uri'

class PhotoTestController < ApplicationController

  def index
    consumer_key = Figaro.env.consumer_key!
    @photos = JSON.load(open("https://api.500px.com/v1/photos?feature=popular&image_size=3&rpp=100&include_states=voted&consumer_key=#{consumer_key}"))
    render json: @photos
  end

end
