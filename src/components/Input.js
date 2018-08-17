import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};
  }

  onInputChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {

    return (
      
      <input
        type='text'
        placeholder={this.props.placeholder}
        className=''
        value={this.state.value}
        onChange={this.onInputChange}
      />
    )
  }
}

export default Input;