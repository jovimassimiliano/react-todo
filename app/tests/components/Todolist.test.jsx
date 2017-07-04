var expect = require("expect");
var React = require("react");
var {Provider} = require("react-redux");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var $ = require("jquery");

import {configure} from "configureStore";
import ConnectedTodolist, {Todolist} from "Todolist";
import ConnectedTodo, {Todo} from "Todo";

describe("Todolist", () => {
  it("should exist", () => {
    expect(Todolist).toExist();
  });

  it("should render one Todo component for each todo item", () => {
    var todos = [{
      id: 1,
      text: "test",
      completed:false,
      createdAt:500,
      completedAt:undefined
    },
    {
      id: 2,
      text: "test2",
      completed:false,
      createdAt:500,
      completedAt:undefined
    }
  ];

  var store = configure({
    todos
  });

  var provider = TestUtils.renderIntoDocument(
    <Provider store={store}>
      <ConnectedTodolist/>
    </Provider>
  );

  var todoList = TestUtils.scryRenderedComponentsWithType(provider,ConnectedTodolist)[0];
  var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList,ConnectedTodo);

  expect(todosComponents.length).toBe(todos.length);
  });

  it("should render nothing when todos is empty", () => {
    var todos = [];

    var todoList = TestUtils.renderIntoDocument(<Todolist todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));


    expect($el.find(".message").length).toBe(1);
  });
});
