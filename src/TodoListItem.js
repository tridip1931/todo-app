import React, { Component } from "react";

class TodoListItem extends Component {
  render() {
    const { text, completed } = this.props.todo;
    const textClass = completed ? "task-completed" : "task";
    return (
      <li>
        <div className="flex-parent relative task-list">
          <label className="checkbox-container">
            <input type="checkbox" checked={completed} onChange={() => {}}/>
            <div className="checkbox mr6 checkbox--green">
              <svg className="icon"><use xlinkHref="#icon-check" /></svg>
            </div>
            <span className={textClass}>{text}</span>
          </label>

          {/* Action Buttons */}
          <div className="absolute flex-parent flex-parent--center-main right task-action">
            <a href="#">
              <svg className="icon ml6"><use xlinkHref="#icon-pencil"></use></svg>
            </a>
            <a href="#">
              <svg className="icon ml6"><use xlinkHref="#icon-trash"></use></svg>
            </a>
          </div>
        </div>
      </li>
    );
  }
}

export default TodoListItem;
