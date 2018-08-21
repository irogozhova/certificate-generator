import React from 'react';

const Textarea = ({ rows, cols, value, name, handleChange, placeholder }) => {

  return (
    <textarea 
      rows={rows}
      cols={cols}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
    >
    </textarea>
  )
}

export default Textarea;