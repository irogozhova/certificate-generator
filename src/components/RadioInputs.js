import React, { Component } from 'react';

export const PORTRAIT = 'Portrait';
export const LANDSCAPE = 'Landscape';

class RadioInputs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: PORTRAIT
    };
  }

  handleChange = (event) => {
    this.setState({
      selectedOption: event.target.value
    });
  }

  render() {

    const { selectedOption } = this.state;

    return (
      <div>
        <div>
          <label>
            <input 
              type="radio" 
              value='Portrait' 
              checked={selectedOption === PORTRAIT}
              onChange={this.handleChange}
            />
            Portrait
          </label>
        </div>
        <div>
          <label>
            <input 
              type="radio" 
              value='Landscape'
              checked={selectedOption === LANDSCAPE}
              onChange={this.handleChange}
            />
            Landscape
          </label>
        </div>
      </div>
    )
  }
}

export default RadioInputs;