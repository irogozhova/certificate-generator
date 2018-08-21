import React from 'react';

const Input = ({ type, value, name, handleChange, placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}

export default Input;


