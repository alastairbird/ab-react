import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';


class App extends React.Component {
  render () {
    return (
      <div>
      	<h1>Hold up!</h1>
        <p>It's ya bois, Webpack & react.....</p>
        <p>Coming to you live</p>
        <AwesomeComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));