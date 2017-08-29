import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.value);
    this.setState({
      value: ""
    });
  }

  render() {
    return (
      <div className="flex-parent">
        <input
          type="text"
          className="input border-r--0 round-l"
          placeholder="Add a new task"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button className="btn px24 round-r" onClick={this.handleSubmit}>Add</button>
      </div>
    );
  }
}

export default AddTodo;
