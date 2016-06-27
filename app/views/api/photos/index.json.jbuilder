json.array! @popular_photos do |photo_info|
  json.name photo_info["name"]
  json.url photo_info["image_url"]
end
