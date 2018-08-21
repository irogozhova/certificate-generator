import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import Radios from '../../components/Radios';
import Select from '../../components/Select';
import Checkboxes from '../../components/Checkboxes';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';

export const LANDSCAPE = 'Landscape';
export const PORTRAIT = 'Portrait';
export const BASE_COLOR = '#e57e24';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      certifData: {
        orientation: LANDSCAPE,
        bgcolor: BASE_COLOR,
        font: '',
        decor: [],
        firstName: '',
        lastName: '',
        achievement: '',
        date: '',
        city: '',
        authority: '',
        institution: ''
      },

      orientOptions: [LANDSCAPE, PORTRAIT],
      fontOptions: ['Times New Roman', 'Arial', 'Calibri'],
      decorOptions: ['border', 'copyright'],
      cityOptions: ['Moscow', 'Saint-Petersburg','Tver']
    };
  }

  handleRadio = (e) => {
    let value = e.target.value;
    this.setState( prevState => ({ certifData:
      {...prevState.certifData, orientation: value }
    }));
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

  handleDecorCheckbox = (e) => {
    const newSelection = e.target.value;
    const decorArray = this.state.certifData.decor;
    let newSelectionArray;

    if(decorArray.indexOf(newSelection) > -1) {
      newSelectionArray = decorArray.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...decorArray, newSelection];
    }

    this.setState( prevState => ({ certifData:
      {...prevState.certifData, decor: newSelectionArray }
    })
    )
  }

  handleFormClear = (e) => {
    e.preventDefault();
    this.setState({ 
      certifData: {
        orientation: LANDSCAPE,
        bgcolor: BASE_COLOR,
        font: '',
        decor: [],
        firstName: '',
        lastName: '',
        achievement: '',
        date: '',
        city: '',
        authority: '',
        institution: ''
      },
    })
  }

  render() {

    const { 
      orientation,
      bgcolor,
      font,
      decor,
      firstName, 
      lastName, 
      achievement, 
      date, 
      city,
      authority, 
      institution 
    } = this.state.certifData;

    const { 
      orientOptions, 
      fontOptions, 
      decorOptions, 
      cityOptions
    } = this.state;

    return (
      <form 
        onSubmit={this.handleFormSubmit}
        className=''
      >
        <fieldset>
          <legend>Choose your certificate style</legend>
          <div>
            <h2>Orientation:</h2>
            <Radios
              options={orientOptions}
              orientation={orientation}
              handleChange={this.handleRadio}
            />
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
          <div>
            <h2>Decorations:</h2>
            <Checkboxes 
              options={decorOptions}
              selectedOptions={decor}
              handleChange={this.handleDecorCheckbox}
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
        <span>
          <Button
            className=''
            title={'Reset'}
            onClick= {this.handleFormClear}
          />
        </span>
      </form>
    )
  }
}

export default Form;