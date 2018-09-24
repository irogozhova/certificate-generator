import React from 'react';
import { Field, reduxForm } from 'redux-form';

let CertificateForm = props => {

  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Choose your certificate style</legend>
        <div>
          <h2>Orientation:</h2>
          <div>
            <label><Field name="orientation" component="input" type="radio" value="landscape" /> Landscape</label>
            <label><Field name="orientation" component="input" type="radio" value="portrait" /> Portrait</label>
          </div>
        </div>
        <div>
          <h2>Background color:</h2>
          <label>
            <Field name="bgcolor" component="input" type="color" value="#4286f4" />
            Choose color
          </label>
        </div>
      <div>
          <h2>Font:</h2>
          <Field name="font" component="select">
            <option></option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Verdana">Verdana</option>
            <option value="Comic Sans">Comic Sans</option>
          </Field>
        </div>
        <div>
          <h2>Decorations:</h2>
          <label htmlFor="border">Border</label>
          <Field name="border" id="border" component="input" type="checkbox" />
          <label htmlFor="copyright">Copyright</label>
          <Field name="copyright" id="copyright" component="input" type="checkbox" />
        </div>
      </fieldset>
      <fieldset>
        <legend>Name of the nominee:</legend>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text" />
        </div>
      </fieldset>
      <fieldset>
        <legend>Describe the area of achievement:</legend>
        <Field name="achievement" component="textarea" placeholder={'For excellence in...'} />
      </fieldset>
      <fieldset>
        <legend>Credentials (who issued the certificate):</legend>
        <Field name="date" component="input" type="date" />
        <br/>
        <label htmlFor="city">City</label>
        <Field name="city" component="select">
          <option></option>
          <option value="Tver">Tver</option>
          <option value="Moscow">Moscow</option>
          <option value="Saint Petersburg">Saint Petersburg</option>
        </Field>
        <br/>
        <Field name="authority" component="input" type="text" placeholder={'Name of authority'} />
        <Field name="institution" component="input" type="text" placeholder={'Institution'} />
      </fieldset>
      <button type="submit">Clear</button>
    </form>
  );
};

CertificateForm = reduxForm({
  form: 'certificate'
})(CertificateForm)

export default CertificateForm;
