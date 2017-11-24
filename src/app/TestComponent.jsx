import React from 'react';
const styles = require('../sass/components/test.scss')


class TestComponent extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className={styles.test}>
        test
      </div>
    );
  }

}

export default TestComponent;