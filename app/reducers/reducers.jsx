var uuid = require("node-uuid");
var moment = require("moment");

export var searchTextReducer = (state = '',action) => {
  switch (action.type) {
    case "SET_SEARCH_TEXT":
      return action.searchText;
      break;
    default:
      return state;
  }
};

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_SHOW_COMPLETED":
      return !state;
      break;
    default:
      return state;
  }
};

export var todosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        action.todo
      ];
      break;
      case "UPDATE_TODO":
        return state.map((todo) => {
          if(todo.id === action.id){
            return{
              ...todo,
              ...action.updates
            }
          }
          else{
            return todo;
          }
        });
    // case "TOGGLE_TODO":
    //   return state.map((todo) => {
    //     if(todo.id === action.id){
    //       var nextCompleted = !todo.completed;
    //       return{
    //         ...todo,
    //         completed: nextCompleted,
    //         completedAt: nextCompleted ? moment().unix() : undefined
    //       };
    //     }
    //     else{
    //       return todo;
    //     }
    //   });
    case "ADD_TODOS":
      return [
        ...state,
        ...action.todos
      ];
      break;
    case "LOGOUT":
      return [];
      break;
    default:
      return state;
  }
};

export var authReducer = (state={}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        uid:action.uid
      };
      break;
    case "LOGOUT":
      return{};
    default:
      return state;
      break;
  }
}