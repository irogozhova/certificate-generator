import React, { Component } from 'react';

import styles from './Preview.css';

class Preview extends Component {

  render() {

    const { values } = this.props;

    const orientation = (values != null && values.orientation !== undefined) ? values.orientation : "(orientation)";
    const bgcolor = (values != null && values.bgcolor !== undefined) ? values.bgcolor : "(bgcolor)";
    const firstName = (values != null && values.firstName !== undefined) ? values.firstName : "(First name)";
    const lastName = (values != null && values.lastName !== undefined) ? values.lastName : "(Last name)";

    return (
      <div className={styles.preview}>
        <h1>Preview</h1>
        <div className={styles.certificate}>
          <h2>Certificate of Award</h2>
          <h3 className='context-heading'>This certificate is awarded to</h3>
          <div>
            {firstName + " " + lastName} 
          </div>
          <h3 className='context-heading'>For excellence in</h3>
          <div>
          </div>
          <div className={styles.credentials}>
            <div className={styles.tableColumn}>
              <h3>Date:</h3>
              <div>{orientation}</div>
              <h3>Place:</h3>
              <div>{bgcolor}</div>
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