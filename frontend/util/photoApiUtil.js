var PhotoServerActions = require("../actions/photoServerActions");

var PhotoApiUtil = {
  fetchPhotos: function(id){
    $.ajax({
      type:"GET",
      url:"api/photos/",
      success: function(photos){
        PhotoServerActions.receivePhotos(photos);
      },
      error: function(errors){
        PhotoServerActions.receiveErrors(errors);
      }
    });
  },
};

module.exports = PhotoApiUtil;
