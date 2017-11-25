import React from 'react';
const styles = require('../../sass/components/test.scss')


export class OtherPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.test}>
        <h1>OtherPage</h1>
      </div>
    );
  }

}
