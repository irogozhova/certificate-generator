import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Input from '../../components/Input';

class Form extends Component {

  onFormSubmit = (event) => {
    event.preventDefault();
  }

  render() {

    return (
      <form 
        onSubmit={this.onFormSubmit}
        className=''
      >
        <fieldset>
          <legend>Name of the nominee:</legend>
          <Input placeholder='first name'/>
          <Input placeholder='last name'/>
        </fieldset>
        <fieldset>
          <legend>Describe the area of achievement:</legend>
          <textarea placeholder='for excellence in...'>
          </textarea>
        </fieldset>
        <fieldset>
          <legend>Credentials:</legend>
          <input type='date'/>
          <br/>
          <select name='' id=''>
            <option value='one'>one</option>
            <option value='two'>two</option>
          </select>
          <br/>
          <Input placeholder='Name of authority'/>
          <br/>
          <Input placeholder='Name of institution'/>
        </fieldset>
        <span className=''>
          <button type='submit' className=''>Create</button>
        </span>
      </form>
    )
  }
}

export default Form;