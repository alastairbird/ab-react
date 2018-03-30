import React from 'react';
import { Link } from 'react-router-dom'

const logo = require('../assets/logo-plain.svg');
const styles = require('../sass/components/header.scss')


export class Header extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <header className={styles.header}>
        <img src={logo} width="100" height="100" />

        <ul className={styles.headerNav}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/OtherPage'>OtherPage</Link></li>
        </ul>
      </header>
    );
  }

}

