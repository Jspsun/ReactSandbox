import React, { Component } from 'react';

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divText: 'This is the text for the div',
    };
  }

  render() {
    return (
      <React.Fragment>
        <div>This is a react component that uses state</div>
        <div>{this.state.divText}</div>
      </React.Fragment>
    );
  }
}
