import firebase from "firebase";

var config = {
    apiKey: "AIzaSyD9caCdxfJOdgJMV4ZkFNmlUqz9Hshq3O0",
    authDomain: "what-to-do-a268b.firebaseapp.com",
    databaseURL: "https://what-to-do-a268b.firebaseio.com",
    projectId: "what-to-do-a268b",
    storageBucket: "what-to-do-a268b.appspot.com",
    messagingSenderId: "960312871520"
  };
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app:{
    name:"ReactTodo",
    version: "1.0.0"
  },
  isRunning: true,
  user:{
    name: "joni",
    age: 24
  }
});

var todosRef = firebaseRef.child("todos");
todosRef.on("child_added", (snapshot) => {
  console.log("new todo added", snapshot.key, snapshot.val());
});

var data1 = {
  text:"test"
};
todosRef.push(data1);
todosRef.push({
  text:"holla"
});

console.log("new object", newTodo.key);


// firebase fetching
//--------------------
// firebaseRef.child("user").on("value",(snapshot) => {
//   console.log("user ref changed",snapshot.val());
// });
//
// firebaseRef.child("user").update({
//   name:"bams"
// });
//
// firebaseRef.child("app").update({
//   name:"Todo App"
// });


// firebase remove
//---------------------
// firebaseRef.update({
//   isRunning:null
// });
//
// firebaseRef.child("user/age").remove();


// firebase update
//----------------------
// firebaseRef.update({
//   "app/name": "Todo App",
//   "user/name": "Jov"
// }).then(() => {
//   console.log("Update worked!");
// },(e) => {
//   console.log("Update error");
// });
//
// firebaseRef.child("app").update({
//   name: "ReactTodo"
// }).then(() => {
//   console.log("Update succedeed");
// }, (e) => {
//   console.log("Update failed");
// });

// firebase set
//-------------------
// firebaseRef.child("app").set({
//   name:"joki"
// });
