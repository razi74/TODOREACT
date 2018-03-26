import React from "react";
//import "./todoItem.css";

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <div className="form-row align-items-center">
        <div className="col-sm-10 my-1">
          <li>{this.props.todo.text}</li>
        </div>
        {/* <button type="submit" className="btn btn-success">
          <i className="fa fa-edit" />
        </button> */}
        <div className="col-auto my-1">
          <button
            type="submit"
            className="btn btn-success"
            onClick={e => this.removeTodo(this.props.id)}
          >
            <i className="fa fa-trash-o" /> Del
          </button>
        </div>
      </div>
    );
  }
}
