import React, { Component } from 'react';

export default class LifeCycleMethods extends Component {
  componentDidMount() {
    console.log('------------------');
    console.log('component mounted');
    console.log('------------------');
  }

  render() {
    return (
      <div>This is a react component with life-cycle methods</div>
    );
  }
}
