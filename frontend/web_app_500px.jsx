var React = require("react"),
    ReactDOM = require("react-dom"),
    ReactRouter = require("react-router"),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    hashHistory = ReactRouter.hashHistory;

var PhotoScreen = require('./components/photoScreen');

var routes =(
  <Route path="/" component={PhotoScreen}>
  </Route>
);



document.addEventListener("DOMContentLoaded", function(){
  if(document.getElementById('content')){
    ReactDOM.render(<Router routes={routes} history={hashHistory} />,
      document.getElementById('content'));
  }
});
