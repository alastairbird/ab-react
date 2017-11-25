import React from 'react';
import { Link } from 'react-router-dom'

const styles = require('../sass/components/test.scss')


export class Header extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className={styles.test}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/OtherPage'>OtherPage</Link></li>
      </div>
    );
  }

}

