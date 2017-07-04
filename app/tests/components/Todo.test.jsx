var expect = require("expect");
var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var $ = require("jquery");
import * as actions from "actions";
import {Todo} from "Todo";


describe("Todo", () => {
  it("should exist", () => {
    expect(Todo).toExist();
  });

  // it("should call onToggle prop with id on click", () => {
  //   var todoData = {
  //     id:2,
  //     text:"tst",
  //     completed: true
  //   };
  //
  //   var spy = expect.createSpy();
  //   var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
  //   var $el = $(ReactDOM.findDOMNode(todo));
  //
  //   TestUtils.Simulate.click($el[0]);
  //   expect(spy).toHaveBeenCalledWith(2);
  // });

  it("should dispatch TOGGLE_TODO on click", () => {
    var todoData = {
      id:2,
      text:"tst",
      completed: true
    };

    var action = actions.startToggleTodo(todoData.id, !todoData.completed);

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(action);
  })
});
