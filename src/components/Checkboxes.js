import React from 'react';

const Checkboxes = ({ options, selectedOptions, handleChange }) => {

  return (
    <div>
      {options.map(option => {
        return (
          <label key={option}>
            <input 
              type='checkbox'
              value={option} 
              onChange={handleChange}
              checked={ selectedOptions.indexOf(option) > -1 }
            />
            {option}
          </label>
        );
      })}
    </div>
  )
}

export default Checkboxes;