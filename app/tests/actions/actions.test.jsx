import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
var expect = require("expect");
var actions = require("actions");

import firebase, {firebaseRef} from "app/firebase";
var createMockStore = configureMockStore([thunk]);

describe("Actions",() => {
  it("should generate search text action", () => {
    var action = {
      type: "SET_SEARCH_TEXT",
      searchText: "anything"
    };

    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });
  it("should generate add todo action", () => {
    var action = {
      type: "ADD_TODO",
      todo: {
        id:12,
        text:"hello world",
        completed:false,
        createdAt:0
      }
    };

    var res = actions.addTodo(action.todo);
    expect(res).toEqual(action);
  });

  it("should dispatch ADD_TODOS", () => {
    var todos = [{
      id:1,
      text:"test",
      completed:false,
      createdAt:1000,
      completedAt:undefined
    }];
    var action = {
      type:"ADD_TODOS",
      todos
    }
    var res = actions.addTodos(todos);
    expect(res).toEqual(action);
  })

  it("should generate toggle show completed action", () => {
    var action = {
      type: "TOGGLE_SHOW_COMPLETED"
    }

    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);

  });

  it("should generate toggle todo action", () => {
    var action = {
      type: "UPDATE_TODO",
      id:1,
      updates: {completed:false}
    };

    var res = actions.updateTodo(action.id, action.updates);
    expect(res).toEqual(action);

  });

  it("should generate login action", () => {
    const action = {
      type: "LOGIN",
      uid: "123abc"
    };

    const res = actions.login(action.uid);
    expect(res).toEqual(action);
  });

  it("should generate logout action", () => {
    const action = {
      type:"LOGOUT",
      uid: "123abc"
    };

    const res = actions.logout();
    expect(res.uid).toNotExist();
  });

  describe("Tests with firebase todos", () => {
    var todoTestRef;
    var uid;
    var todosRef;
    beforeEach((done) => {
      var credential = firebase.auth.GithubAuthProvider.credential(process.env.GITHUB_ACCESS_TOKEN);
      firebase.auth().signInWithCredential(credential).then((user) => {
        uid = user.uid;
        todosRef = firebaseRef.child(`users/${uid}/todos`);

        return todosRef.remove();
      }).then(() => {
        todoTestRef = todosRef.push();
        return todoTestRef.set({
          text: "makanmakan",
          completed: false,
          createdAt:121515
        });
      })
      .then(() => done())
      .catch(done);

      // todoTestRef = firebaseRef.child("todos").push();
      // todoTestRef.set({
      //   text: "makanmakan",
      //   completed: false,
      //   createdAt:121515
      // });
    });

    afterEach((done) => {
      todosRef.remove().then(() => done());
    });

    it("should add todos and dispatch ADD_TODOS action", (done) => {
      const store = createMockStore({auth:{uid}});
      const action = actions.startAddTodos();

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0].type).toEqual("ADD_TODOS");
        expect(mockActions[0].todos.length).toEqual(1);
        expect(mockActions[0].todos[0].text).toEqual("makanmakan");
        done();
      });
    });

    it("should toggle todo and dispatch UPDATE_TODO action", (done) => {
      const store = createMockStore({auth:{uid}});
      const action = actions.startToggleTodo(todoTestRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type:"UPDATE_TODO",
          id:todoTestRef.key
        });

        expect(mockActions[0].updates).toInclude({
          completed: true
        });

        expect(mockActions[0].updates.completedAt).toExist();

        done();
      },done);
    });

    it("should create todo and dispatch ADD_TODO", (done) => {
    const store = createMockStore({auth:{uid}});
    var todoText = "hello";

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();

      expect(actions[0]).toInclude({
        type:"ADD_TODO"
      });
      expect(actions[0].todo).toInclude({
        text:todoText
      });
      done();
    }).catch(done);


  });
  });
});
