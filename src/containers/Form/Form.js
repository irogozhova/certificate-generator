import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import RadioInputs from '../../components/RadioInputs';
import Select from '../../components/Select';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

export const BASE_COLOR = '#e57e24';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      certifData: {
        orientation: '',
        bgcolor: BASE_COLOR,
        font: '',
        firstName: '',
        lastName: '',
        achievement: '',
        date: '',
        city: '',
        authority: '',
        institution: ''
      },

      fontOptions: ['Times New Roman', 'Arial', 'Calibri'],
      cityOptions: ['Moscow', 'Saint-Petersburg','Tver']
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
  }

  handleFormClear() {
    // Logic for resetting the form
  }

  handleInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState( prevState => {
      return { 
        certifData : {
          ...prevState.certifData, [name]: value 
        }
      }
    })
  }

  render() {

    const { 
      bgcolor,
      font,
      firstName, 
      lastName, 
      achievement, 
      date, 
      city,
      authority, 
      institution 
    } = this.state.certifData;

    const { fontOptions, cityOptions } = this.state;

    return (
      <form 
        onSubmit={this.handleFormSubmit}
        className=''
      >
        <fieldset>
          <legend>Choose your certificate style</legend>
          <div>
            <h2>Orientation:</h2>
            <RadioInputs />
          </div>
          <div>
            <h2>Background color:</h2>
            <label>
            <Input 
              type={'color'}
              value={bgcolor}
              name={'bgcolor'}
              placeholder={''} 
              handleChange = {this.handleInput}
            />
            Choose color
            </label>
          </div>
          <div>
            <h2>Font:</h2>
            <Select 
              name={'font'}
              options={fontOptions}
              value={font}
              handleChange={this.handleInput}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>Name of the nominee:</legend>
          <Input 
            type={'text'}
            value={firstName}
            name={'firstName'}
            placeholder={'First name'} 
            handleChange = {this.handleInput}
          />
          <Input 
            type={'text'}
            value={lastName}
            name={'lastName'}
            placeholder={'Last name'} 
            handleChange = {this.handleInput}
          />
        </fieldset>
        <fieldset>
          <legend>Describe the area of achievement:</legend>
          <Textarea 
            rows={'5'}
            cols={'40'}
            value={achievement}
            name={'achievement'}
            placeholder={'For excellence in...'} 
            handleChange = {this.handleInput}
          />
        </fieldset>
        <fieldset>
          <legend>Credentials (who issued the certificate):</legend>
          <Input 
            type={'date'}
            value={date}
            name={'date'}
            placeholder={' '}
            handleChange = {this.handleInput}
          />
          <br/>
          <Select 
            name={'city'}
            options={cityOptions}
            value={city}
            handleChange={this.handleInput}
          />
          <br/>
          <Input 
            type={'text'}
            value={authority}
            name={'authority'}
            placeholder={'Name of authority'}
            handleChange = {this.handleInput}
          />
          <br/>
          <Input 
            type={'text'}
            value={institution}
            name={'institution'}
            placeholder={'Name of institution'}
            handleChange = {this.handleInput}
          />
        </fieldset>
        <span className=''>
          <button type='submit' className=''>Create</button>
        </span>
        <span className=''>
          <button type='submit' className=''>Clear</button>
        </span>
      </form>
    )
  }
}

export default Form;