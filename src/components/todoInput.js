import React from "react";
//import "./todoInput.css";

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.todoText };

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  addTodo(todo) {
    // Ensure a todo was actually entered before submitting
    if (todo.length > 0) {
      this.props.addTodo(todo);
      this.setState({ value: "" });
    }
  }

  render() {
    return (
      <div className="form-row align-items-center">
        <div className="col-sm-10 my-1">
          <div className="input-group">
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter.."
            />
          </div>
        </div>
        <div className="col-auto my-1">
          <button
            type="submit"
            className="btn btn-success"
            onClick={() => this.addTodo(this.state.value)}
          >
            <i className="fa fa-plus-square" /> Add
          </button>
        </div>
      </div>
    );
  }
}
