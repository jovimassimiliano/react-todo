var expect = require("expect");
var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var $ = require("jquery");
import {AddTodo} from "AddTodo";
import * as actions from "actions";

describe("AddTodo", () => {
  it("should exist", () => {
    expect(AddTodo).toExist();
  });

  it("should dispatch ADD_TODO with valid data", () => {
    var todoText = "test";
    var action = actions.startAddTodo(todoText);
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todo.value = todoText;
    TestUtils.Simulate.submit($el.find("form")[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it("should not dispatch ADD_TODO with invalid data", () => {
    var todoText = "";
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todo.value = todoText;
    TestUtils.Simulate.submit($el.find("form")[0]);

    expect(spy).toNotHaveBeenCalled();
  });

  // it("should call on onSetTodo prop with valid data", () => {
  //   var todoText = "test"
  //   var spy = expect.createSpy();
  //   var addTodo = TestUtils.renderIntoDocument(<AddTodo setTodo={spy}/>);
  //   var $el = $(ReactDOM.findDOMNode(addTodo));
  //
  //   addTodo.refs.todo.value = todoText;
  //   TestUtils.Simulate.submit($el.find("form")[0]);
  //
  //   expect(spy).toHaveBeenCalledWith(todoText);
  // });

  // it("should not call on onSetTodo prop with invalid data", () => {
  //   var todoText = "";
  //   var spy = expect.createSpy();
  //   var addTodo = TestUtils.renderIntoDocument(<AddTodo setTodo={spy}/>);
  //   var $el = $(ReactDOM.findDOMNode(addTodo));
  //
  //   addTodo.refs.todo.value = todoText;
  //   TestUtils.Simulate.submit($el.find("form")[0]);
  //
  //   expect(spy).toNotHaveBeenCalled();
  // });

});
