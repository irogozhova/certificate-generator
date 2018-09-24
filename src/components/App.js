import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../Global.css';
import styles from '../App.css';
import CertificateForm from '../containers/Form/Form';
import Preview from '../containers/Preview/Preview';

const mapStateToProps = state => { 
  return { form: state.form };
};

class ConnectedApp extends Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  }

  render() {

    const { certificate } = this.props.form;

    //console.log('values' in certificate);
    //console.log(certificate !== undefined && 'values' in certificate);
    
    const values = 
      (certificate !== undefined && 'values' in certificate) 
      ? certificate.values 
      : null;

    return (
      <div className={styles.app}>
        <div className={styles.halfpage}>
          <CertificateForm onSubmit={this.submit} />
        </div>
        <div className={styles.halfpage}>
          <Preview values={values}
            // values={('values' in certificate) ? certificate.values : null}
          />
        </div>
      </div>
    );
  }
}

const App = connect(mapStateToProps)(ConnectedApp);

export default App;