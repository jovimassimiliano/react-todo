var React = require("react");
var {connect} = require("react-redux");
var actions = require("actions");

export var AddTodo = React.createClass({
  onSubmit:function(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var newTodo = this.refs.todo.value;

    if(newTodo.length > 0){
      this.refs.todo.value = "";
      dispatch(actions.startAddTodo(newTodo));
    }else {
      this.refs.todo.focus();
    }
  },
  render:function(){
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="todo" placeholder="Enter your todo"/>
          <input type="submit" value="Add Todo" className="button success expanded"/>
        </form>
      </div>
    )
  }
});

export default connect() (AddTodo);
