import React, { Component } from 'react';
import Business from './Business';
import Hobby from './Hobby';
import Passion from './Passion';
export default class About extends Component {
  render() {
    return (
      <div>
        <Hobby />
        <Passion />
        <Business />
      </div>
    )
  }
}

