import React, { Component } from 'react';
import Form from './Form';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <Form />
        </div>
      </div>
    );
  }
}
