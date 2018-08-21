import React, { Component } from 'react';

import '../Global.css';
import styles from '../App.css';
import Form from '../containers/Form/Form';
import Preview from '../containers/Preview/Preview';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.halfpage}>
          <Form />
        </div>
        <div className={styles.halfpage}>
          <Preview />
        </div>
      </div>
    );
  }
}

export default App;