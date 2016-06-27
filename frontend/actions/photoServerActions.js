var PhotoConstants = require("../constants/photoConstants");
var AppDispatcher = require("../dispatcher/dispatcher");

var PhotoServerActions = {
  receivePhotos: function(photos){
    AppDispatcher.dispatch({
      actionType: PhotoConstants.RECEIVE_PHOTOS,
      photos: photos
    });
  },

//   receiveErrors: function(errors){
//     AppDispatcher.dispatch({
//       actionType: ConversationConstants.RECEIVE_ERRORS,
//       errors: errors
//     });
//   }
};

module.exports = PhotoServerActions;
