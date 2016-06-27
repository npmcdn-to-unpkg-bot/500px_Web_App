var PhotoApiUtil = require("../util/photoApiUtil");

var PhotoClientActions = {
  fetchPhotos: function(id){
    PhotoApiUtil.fetchPhotos();
  }
};

module.exports = PhotoClientActions;
