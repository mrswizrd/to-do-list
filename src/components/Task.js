import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }
  delete(key) {
    this.props.delete(key);
  }
  createTasks(item) {
    return (
      <li onClick={() => this.delete(item.key)} key={item.key}>
        {item.text}
      </li>
    );
  }

  render() {
    var todoEntries = this.props.entries;
    var listedTasks = todoEntries.map(this.createTasks);

    return <ul className="theList">{listedTasks}</ul>;
  }
}

export default Task;
