import React, { Component } from 'react';

import TodoListItem from './TodoListItem';

class TodoList extends Component {
  render() {
    return (
      <div className="py18">
        <ul className="todo-list">
          {this.props.todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
        </ul>
      </div>
    );
  }
}

export default TodoList;
