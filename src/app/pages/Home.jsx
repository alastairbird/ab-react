import React from 'react';
const test = require('../../assets/test.svg');

export class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>Home</h1>
        <p>
        	<img src={test}/>
        </p>
      </div>
    );
  }
}
