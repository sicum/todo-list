import React, { Component } from 'react'

class TodoItems extends Component {
  createTasks = item => {
    return (
      <li 
        key={item.key}
        className="list-group-item list-group-item-action"
        data-toggle="list"
        onClick={() => this.props.deleteItem(item.key)}
      >
        {item.text}
      </li>
    )
  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return <ul className="list-group">{listItems}</ul>
  }
}

export default TodoItems