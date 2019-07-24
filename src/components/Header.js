import React from 'react';

class Header extends React.Component {
  constructor() {
    super()

    this.state = {
      meterValue: Math.round(new Date() / (3600 * 24 * 1000)),
      meterMax: Math.round(new Date(2019, 6, 27).getTime() / (3600 * 24 * 1000)) + 1
    }
  }
  render () {
    return (
      <header className="header">
        <div></div>
        <span>This is to-do list</span>
        <div className="spint-timeline">
          <div className="deadline">Deadline</div>
          <meter value={14 - (this.state.meterMax - this.state.meterValue)} max={14}></meter>
        </div>
      </header>
    );
  }
}

export default Header;
