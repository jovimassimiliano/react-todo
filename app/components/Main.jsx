import React from "react";
import * as Redux from "react-redux";
import * as actions from "actions";

import Todolist from "Todolist";
import AddTodo from "AddTodo";
import TodoSearch from "TodoSearch";


export var Main = React.createClass({
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
  onLogout(e){
    var {dispatch} = this.props;
    e.preventDefault();
    dispatch(actions.startLogout());
  },
  render() {
    // var {todos,showCompleted,searchText} = this.state;
    // var filteredTodos = TodoAPI.filterTodos(todos,showCompleted,searchText);
    return (
      <div className="row">
        <a href="#" className="logout" onClick={this.onLogout}>Logout</a>
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

export default Redux.connect() (Main);
