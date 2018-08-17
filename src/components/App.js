import React, { Component } from 'react';

import '../App.css';
import Form from '../containers/Form/Form';
import Preview from '../containers/Preview';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className="halfpage">
          <Form />
        </div>
        <div className="halfpage">
          <Preview />
        </div>
      </div>
    );
  }
}

export default App;