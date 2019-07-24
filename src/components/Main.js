import React from 'react';
import Tododata from './../apiResponse/Tododata.js';
import Doing from './../apiResponse/Doing.js';
import Done from './../apiResponse/Done.js';
import ListItem from './ListItem.js';

class Main extends React.Component {
  constructor() {
    super()

    this.state = {
      toDo: Tododata,
      doing: Doing,
      done: Done
    }
  }

  render() {
    const toDoes = this.state.toDo.map(item => <ListItem key={item.id} placeholder={item.task} />);
    const doings = this.state.doing.map(item => <ListItem key={item.id} placeholder={item.task} />);
    const dones = this.state.done.map(item => <ListItem key={item.id} placeholder={item.task} />);

    return (
      <div className="main" style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ textAlign: "center" }}>
          <h2>To-do</h2>
          <div className="form-check">
            {toDoes}
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2>Doing</h2>
          <div className="form-check">
            {doings}
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2>Done</h2>
          <div className="form-check">
            {dones}
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
