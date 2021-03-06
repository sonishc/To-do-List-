import React from 'react';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      status: "todo"
    }

    this.handleDragTask = this.handleDragTask.bind(this);
  }

  handleDragTask(e) {
    e.preventDefault();
    let task = e.target;

    task.style.cssText = "position: absolute; width: 380px; padding: 20px 0; \
                          text-align: center; background: antiquewhite; color: #333; \
                          border: 4.5px solid #000;";

    document.body.appendChild(task);
    moveAt(e);

    task.style.zIndex = 1000; // над другими элементами

    function moveAt(e) {
      task.style.left = e.pageX - task.offsetWidth / 2 + 'px';
      task.style.top = e.pageY - task.offsetHeight / 2 + 'px';
    }

    document.onmousemove = e => {
      moveAt(e);
    };

    task.onmouseup = () => {
      document.onmousemove = null;
      task.onmouseup = null;
    };

    task.ondragstart = () => false;
  }

  render() {
    return (
      <div id={this.props.id} onMouseDown={this.handleDragTask} className="todo-item">
        {this.props.placeholder}
      </div>
    )
  }
}
