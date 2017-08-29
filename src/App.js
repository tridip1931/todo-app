import React, { Component } from "react";

import AddTodo from "./AddTodo";
import FilterBy from "./FilterBy";
import TodoList from "./TodoList";

class App extends Component {
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
            <AddTodo />
            <FilterBy />
            <TodoList todos={this.props.todos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
