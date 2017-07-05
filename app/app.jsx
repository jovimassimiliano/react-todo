var React = require("react");
var ReactDOM = require("react-dom");
var {Provider} = require("react-redux");
var {hashHistory} = require("react-router");

var actions = require("actions");
var store = require("configureStore").configure();

import firebase from "app/firebase";
import router from "app/router";

// store.subscribe(() => {
//   var state = store.getState();
//   console.log("New state", state);
//
//   TodoAPI.setTodos(state.todos);
// });

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

//conditions when user login or logout
firebase.auth().onAuthStateChanged((user) => {
  if(user){
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddTodos());//set the uid first, because start add todos need uid
    hashHistory.push("/todos");
  }else{
    store.dispatch(actions.logout());
    hashHistory.push("/");
  }
});

/*fetching data from firebase*/
// store.dispatch(actions.startAddTodos());

//load foundation

$(document).foundation();

//app css
require("style!css!sass!applicationStyles");

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById("app")
);
