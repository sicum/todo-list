import React, { Component } from 'react'

class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }
  render() {
    return (
      <div className="todoListMain lead">
        <div className="header">
          <form onSubmit={this.props.addItem}>
          <div className="input-group mb-3">
            <input type="text" 
              className="form-control" 
              placeholder="Task"
              aria-label="Task" 
              aria-describedby="button-addon2"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-outline-secondary" id="button-addon2">Add Task</button>
            </div>
          </div>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoList