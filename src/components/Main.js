import React from "react";
import Tododata from "./../apiResponse/Tododata";
import ListItem from "./ListItem";

export default class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      toDoS: Tododata,
      doingS: [],
      doneS: []
    };
  }

  remove(id, currentColumn) {
    if (currentColumn == "to-do") {
      this.setState({
        toDoS: this.state.toDoS.filter(el => id != el.id)
      });
    }
    if (currentColumn == "to-do") {
      this.setState({
        doingS: this.state.doingS.filter(el => id != el.id)
      });
    }
    if (currentColumn == "to-do") {
      this.setState({
        doneS: this.state.doneS.filter(el => id != el.id)
      });
    }
  }

  handeMove(currentColumn, e) {
    e.preventDefault();
    let task = e.target;

    let currentT = document.getElementById(currentColumn);
    let todo = document.getElementById("to-do");
    let doing = document.getElementById("doing");
    let done = document.getElementById("done");

    let taskCoords = getCoords(task);

    var text = "no";

    switch (true) {
      case taskCoords.left > getCoords(todo).left &&
        taskCoords.right < getCoords(todo).right:
        task.style = "";
        this.state.toDoS.push({ id: task.id, task: task.innerHTML });
        this.setState({ toDoS: this.state.toDoS });
        text = "cahnged";
        break;
      case taskCoords.left > getCoords(doing).left &&
        taskCoords.right < getCoords(doing).right:
        task.style = "";
        this.state.doingS.push({ id: task.id, task: task.innerHTML });
        this.setState({ doingS: this.state.doingS });
        text = "cahnged";
        break;
      case taskCoords.left > getCoords(done).left &&
        taskCoords.right < getCoords(done).right:
        task.style = "";
        this.state.doneS.push({ id: task.id, task: task.innerHTML });
        this.setState({ doneS: this.state.doneS });
        text = "cahnged";
        break;
      default:
        task.style = "";
        currentT.appendChild(task);
    }
    if (text == "cahnged") {
      task.remove();
    }
  }

  render() {
    let toDoes = this.state.toDoS.map(item => (
      <ListItem id={item.id} key={item.id} placeholder={item.task} />
    ));
    let doings = this.state.doingS.map(item => (
      <ListItem id={item.id} key={item.id} placeholder={item.task} />
    ));
    let dones = this.state.doneS.map(item => (
      <ListItem id={item.id} key={item.id} placeholder={item.task} />
    ));

    return (
      <div
        className="main"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <div style={{ textAlign: 'center' }} onMouseEnter={this.getParentName}>
          <h2>To-do</h2>
          <div
            id="to-do"
            className="form-check"
            onMouseUp={e => this.handeMove("to-do", e)}
          >
            {toDoes}
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h2>Doing</h2>
          <div
            id="doing"
            className="form-check"
            onMouseUp={e => this.handeMove("doing", e)}
          >
            {doings}
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h2>Done</h2>
          <div
            id="done"
            className="form-check"
            onMouseUp={e => this.handeMove("done", e)}
          >
            {dones}
          </div>
        </div>
      </div>
    );
  }
}

function getCoords(elem) {
  // кроме IE8-
  var box = elem.getBoundingClientRect();

  return {
    right: box.right + pageYOffset,
    left: box.left + pageXOffset
  };
}
