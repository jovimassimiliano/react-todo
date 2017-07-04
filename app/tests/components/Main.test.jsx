var expect = require("expect");
var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var $ = require("jquery");
var {Provider} = require("react-redux");
var Main = require("Main");
import ConnectedTodolist, {Todolist} from "Todolist";

var configureStore = require("configureStore");

describe("Main", () => {
  it("should exist", () => {
    expect(Main).toExist();
  });
  it("should render todolist", () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <Main/>
      </Provider>
    );

    var main = TestUtils.scryRenderedComponentsWithType(provider,Main)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(main, Todolist);

    expect(todoList.length).toEqual(1);
  });


  // it("should add todo to the todos state on handleSetTodo", () => {
  //   var todo = "text" ;
  //   var main = TestUtils.renderIntoDocument(<Main/>);
  //
  //   main.setState({
  //     todos:[]
  //   });
  //   main.handleSetTodo(todo);
  //
  //   expect(main.state.todos[0].text).toBe(todo);
  //   expect(main.state.todos[0].createdAt).toBeA("number");
  // });
  //
  // it("should toggle todo completed on handleToggle",() => {
  //   var todo = {
  //     id:1,
  //     text:"test",
  //     completed:false,
  //     createdAt: 0,
  //     completedAt: undefined
  //   };
  //   var main = TestUtils.renderIntoDocument(<Main/>);
  //   main.setState({
  //     todos: [todo]
  //   });
  //
  //   expect(main.state.todos[0].completed).toBe(false);
  //   main.handleToggle(1);
  //   expect(main.state.todos[0].completed).toBe(true);
  //   expect(main.state.todos[0].completedAt).toBeA("number");
  // });
  //
  // it("should removed completedAt when toggle from true to false",() => {
  //   var todo = {
  //     id:1,
  //     text:"test",
  //     completed:true,
  //     createdAt: 0,
  //     completedAt: 300
  //   };
  //   var main = TestUtils.renderIntoDocument(<Main/>);
  //   main.setState({
  //     todos: [todo]
  //   });
  //
  //   expect(main.state.todos[0].completed).toBe(true);
  //   main.handleToggle(1);
  //   expect(main.state.todos[0].completed).toBe(false);
  //   expect(main.state.todos[0].completedAt).toBe(undefined);
  // });
});
