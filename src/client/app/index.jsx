import React from 'react';
import {render} from 'react-dom';
import TestComponent from './TestComponent.jsx';


class App extends React.Component {
  render () {
    return (
      <div>
      	<h1>Hold up!</h1>
        <p>It's ya bois, Webpack & react.....</p>
        <p>Coming to you live</p>
        <TestComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));