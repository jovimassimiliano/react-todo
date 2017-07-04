var expect = require("expect");
var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var $ = require("jquery");

var actions = require("actions");
import {TodoSearch} from "TodoSearch";

describe("TodoSearch", () => {
  it("should exist", () => {
    expect(TodoSearch).toExist();
  });

  it("should dispatch SET_SEARCH_TEXT with entered input text", () => {
    var searchText = "test";
    var spy = expect.createSpy();

    var action = {
      type: "SET_SEARCH_TEXT",
      searchText
    };
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it("should dispatch TOGGLE_SHOW_COMPLETED with proper checked value", () => {
    var action = {
      type: "TOGGLE_SHOW_COMPLETED"
    };
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);
    expect(spy).toHaveBeenCalledWith(action);
  });

  // it("should called onSearch with entered input text", () => {
  //   var spy = expect.createSpy();
  //   var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
  //
  //   todoSearch.refs.searchText.value = "test";
  //   TestUtils.Simulate.change(todoSearch.refs.searchText);
  //
  //   expect(spy).toHaveBeenCalledWith(false,"test");
  // });
  //
  // it("should called onSearch with proper checked value", () => {
  //   var spy = expect.createSpy();
  //   var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
  //
  //   todoSearch.refs.showCompleted.checked = true;
  //   TestUtils.Simulate.change(todoSearch.refs.showCompleted);
  //   expect(spy).toHaveBeenCalledWith(true,"");
  // });
});
