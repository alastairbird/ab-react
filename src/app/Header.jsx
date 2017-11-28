import React from 'react';
import { Link } from 'react-router-dom'

const styles = require('../sass/components/header.scss')


export class Header extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <header className={styles.header}>
        <span className={styles.headerLogo}></span>
        <ul className={styles.headerNav}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/OtherPage'>OtherPage</Link></li>
        </ul>
      </header>
    );
  }

}

