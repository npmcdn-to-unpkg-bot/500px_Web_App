var React = require('react');
var PhotoStore = require('../stores/photoStore');
var PhotoClientActions = require('../actions/PhotoClientActions');
var Gallery = require("./gallery.js");

var ImageScreen = React.createClass({
  getInitialState: function() {
    return {
      photos: []
    };
  },

  componentDidMount: function(){
    this.photoListener = PhotoStore.addListener(this.updatePhotos);
    PhotoClientActions.fetchPhotos();
  },

  updatePhotos: function(){
    this.setState({photos: PhotoStore.all()});
  },

  render: function() {
    console.log(this.state.photos);
    return (
      <div>
        <Gallery photos={this.state.photos} />
      </div>
    );
  }

});

module.exports = ImageScreen;
