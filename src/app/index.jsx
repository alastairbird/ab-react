import React from 'react';
import {render} from 'react-dom';
import BackButton from './BackButton.jsx';
import TestComponent from './TestComponent.jsx';

require('../sass/base/base.scss')


class App extends React.Component {
  render () {
    return (
      <div>
      	<TestComponent />
        <BackButton />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));