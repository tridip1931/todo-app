import React, { Component } from "react";

class AddTodo extends Component {
  render() {
    return (
      <div className="relative">
        <div className="absolute flex-parent flex-parent--center-cross flex-parent--center-main w36 h36">
          <svg className="icon"><use xlinkHref="#icon-plus"></use></svg>
        </div>
        <input className="input pl36" placeholder="Add a new task" />
      </div>
    );
  }
}

export default AddTodo;
