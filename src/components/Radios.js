import React from 'react';

const Radios = ({ options, orientation, handleChange }) => {

  return (
    <div>
      {options.map(option => {
        return (
          <div key={option}>
            <label>
              <input 
                type='radio'
                value={option} 
                checked={orientation === option}
                onChange={handleChange}
              />
              {option}
            </label>
          </div>
        );
      })}
    </div>
  )
}

export default Radios;