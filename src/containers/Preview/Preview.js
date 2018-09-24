import React, { Component } from 'react';

import styles from './Preview.css';

class Preview extends Component {

  render() {

    const { values } = this.props;

    // const orientation = (values != null && values.orientation !== undefined) ? values.orientation : "(orientation)";
    // const bgcolor = (values != null && values.bgcolor !== undefined) ? values.bgcolor : "(bgcolor)";
    // const font = (values != null && values.font !== undefined) ? values.font : "(font)";
    const firstName = (values != null && values.firstName !== undefined) ? values.firstName : "(First name)";
    const lastName = (values != null && values.lastName !== undefined) ? values.lastName : "(Last name)";
    const achievement = (values != null && values.achievement !== undefined) ? values.achievement : "(achievement)";
    const date = (values != null && values.date !== undefined) ? values.date : "(date)";
    const city = (values != null && values.city !== undefined) ? values.city : "(city)";
    const authority = (values != null && values.authority !== undefined) ? values.authority : "(authority)";
    const institution = (values != null && values.institution !== undefined) ? values.institution : "(institution)";

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
            {achievement}
          </div>
          <div className={styles.credentials}>
            <div className={styles.tableColumn}>
              <h3>Date:</h3>
              <div>{date}</div>
              <h3>City:</h3>
              <div>{city}</div>
            </div>
            <div className={styles.tableColumn}>
              <h3>Name:</h3>
              <div>{authority}</div>
              <h3>Institution:</h3>
              <div>{institution}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Preview;