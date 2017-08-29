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
      <form className="relative" onSubmit={this.handleSubmit}>
          <div className="absolute flex-parent flex-parent--center-cross flex-parent--center-main w36 h36">
              <svg className="icon"><use xlinkHref="#icon-plus"></use></svg>
          </div>
          <input className="input pl36" placeholder="Add a new task"
            value={this.state.value}
            onChange={this.handleChange}
          />
      </form>
    );
  }
}

export default AddTodo;
