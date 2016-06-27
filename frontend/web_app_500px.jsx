var React = require("react"),
    ReactDOM = require("react-dom"),
    ReactRouter = require("react-router"),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    hashHistory = ReactRouter.hashHistory;

var ImageScreen = require('./components/imageScreen');

var routes =(
  <Route path="/" component={ImageScreen}>
  </Route>
);



document.addEventListener("DOMContentLoaded", function(){
  console.log("hello world");
  console.log("hello world");
  console.log("hello world");

  if(document.getElementById('content')){
    ReactDOM.render(<Router routes={routes} history={hashHistory} />,
      document.getElementById('content'));
  }
});
