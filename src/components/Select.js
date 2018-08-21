import React from 'react';

const Select = ({ name, value, handleChange, options }) => {

  return (
    <select 
      name={name}
      value={value} 
      onChange={handleChange}
    >
      {options.map(option => {
        return (
          <option
            key={option}
            value={option}
            label={option}>{option}
          </option>
        );
      })}
    </select>
  )
}

export default Select;