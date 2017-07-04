var React = require("react");
var moment = require("moment");
var {connect} = require("react-redux");
var actions = require("actions");

export var Todo = React.createClass({
  render:function(){
    var {text,id,completed,createdAt,completedAt,dispatch} = this.props;
    var todoClassName = completed ? "todo todo-completed" : "todo";
    var renderDate = () => {
      var message = "Created";
      var timestamp = createdAt;

      if(completed) {
        message = "Completed";
        timestamp = completedAt;
      }

      return message +" "+ moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };
    return(
      <div className={todoClassName} onClick={() => {
          dispatch(actions.startToggleTodo(id,!completed));
          // this.props.onToggle(id);
        }}>
        <div className="checkbox">
          <input type="checkbox" checked={completed}/>
        </div>
        <div className="text">
          <p>{text}</p>
        </div>
        <div>
          <p>{renderDate()}</p>
        </div>
      </div>
    );
  }
});

export default connect() (Todo);