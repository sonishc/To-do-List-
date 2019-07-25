import React from 'react';

export default class Header extends React.Component {
  constructor() {
    super()

    this.state = {
      meterValue: Math.round(new Date() / (3600 * 24 * 1000)),
      meterMax: Math.round(new Date(2019, 6, 27).getTime() / (3600 * 24 * 1000)) + 1,
    }
  }
  render () {
    return (
      <header className="header">
        <div></div>
        <span>This is to-do list</span>
        <div className="spint-timeline">
          <div className="deadline">Progress live<b>{ this.state.formatted_deadline}</b></div>
          <meter value={14 - (this.state.meterMax - this.state.meterValue)} max={14}></meter>
        </div>
      </header>
    );
  }
}
