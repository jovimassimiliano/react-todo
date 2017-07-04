var React = require("react");
var uuid = require("node-uuid");
var moment = require("moment");


import Todolist from "Todolist";
import AddTodo from "AddTodo";
import TodoSearch from "TodoSearch";



var Main = React.createClass({
  // getInitialState: function() {
  //   return {
  //     showCompleted:false,
  //     searchText:"",
  //     todos: TodoAPI.getTodos()
  //   };
  // },
  // handleSearch:function(showCompleted,searchText){
  //   this.setState({
  //     showCompleted,
  //     searchText:searchText.toLowerCase()
  //   })
  // },
  // componentDidUpdate: function(){
  //   TodoAPI.setTodos(this.state.todos);
  // },
  // handleSetTodo: function(newTodo) {
  //   this.setState({
  //     todos:[
  //       ...this.state.todos,
  //       {
  //         id:uuid(),
  //         text: newTodo,
  //         completed: false,
  //         createdAt: moment().unix(),
  //         completedAt: undefined
  //       }
  //     ]
  //
  //   });
  // },
  render: function() {
    // var {todos,showCompleted,searchText} = this.state;
    // var filteredTodos = TodoAPI.filterTodos(todos,showCompleted,searchText);
    return (
      <div className="row">
        <h1 className="page-title">What-to-do</h1>
        <div className="column small-centered small-11 medium-6 large-4">
          <TodoSearch/>
          <Todolist/>
          <AddTodo/>
        </div>
      </div>
    );
  }
})

module.exports = Main;
