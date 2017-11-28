import React from 'react';
import { Link } from 'react-router-dom'

export class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <small>
         Webpack, React, ES6, Babel, etc.. starter app \\ 2017
        </small>
      </footer>
    );
  }

}

