import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import styles from './Preview.css';

class Preview extends Component {

  onFormSubmit = (event) => {
    event.preventDefault();
  }

  render() {

    return (
      <div className={styles.preview}>
        <h1>Preview</h1>
        <div className={styles.certificate}>
          <h2>Certificate of Award</h2>
          <h3 className='context-heading'>This certificate is awarded to</h3>
          <div></div>
          <h3 className='context-heading'>For excellence in</h3>
          <div></div>
          <div className={styles.credentials}>
            <div className={styles.tableColumn}>
              <h3>Date:</h3>
              <h3>Place:</h3>
            </div>
            <div className={styles.tableColumn}>
              <h3>Name:</h3>
              <h3>Institution:</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Preview;