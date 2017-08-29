import React, { Component } from "react";

import AddTodo from "./AddTodo";
import FilterBy from "./FilterBy";
import TodoList from "./TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todos,
      currentFilter: "ALL",
    };
  }

  getFilteredTodos = () => {
    const { todos, currentFilter } = this.state;

    switch(currentFilter) {
      case "ACTIVE":
        return todos.filter(t => !t.completed);
      case "COMPLETED":
        return todos.filter(t => t.completed);
      default:
        return todos;
    }
  }

  setCurrentFilter = (filter) => {
    this.setState({
      currentFilter: filter,
    });
  }

  addTodo = (text) => {
    this.setState({
      todos: this.state.todos.concat([{
        id: Date.now(),
        text: text,
        completed: false,
      }]),
    });
  }

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(t => t.id != id),
    });
  }

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(t => {
        if ((t.id) === id) {
          t.completed = !t.completed;
        }
        return t;
      }),
    });
  }

  render() {
    return (
      <div className="flex-parent--column flex-parent--center-main flex-parent--center-main">
        {/* Title */}
        <div className="flex-child align-center my60">
            <h1 className="txt-h1 color-white">Today's Tasks</h1>
        </div>

        {/* Main Container */}
        <div className="flex-parent flex-parent--center-cross flex-parent--center-main">
          <div className="main-wrapper align-center round w600 py24 px24">
            <AddTodo
              addTodo={this.addTodo}
            />
            <FilterBy
              currentFilter={this.state.currentFilter}
              setCurrentFilter={this.setCurrentFilter}
            />
            <TodoList
              todos={this.getFilteredTodos(this.state.todos)}
              toggleComplete={this.toggleComplete}
              deleteTodo={this.deleteTodo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
