var AppDispatcher = require("../dispatcher/dispatcher");
var Store = require("flux/utils").Store;
var PhotoConstants = require("../constants/photoConstants");


var _photos = [];

var PhotoStore = new Store(AppDispatcher);

PhotoStore.all = function(){
  return _photos.slice();
};


PhotoStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case PhotoConstants.RECEIVE_PHOTOS:
      _photos = payload.photos;
      PhotoStore.__emitChange();
      break;
  }
};

module.exports = PhotoStore;
