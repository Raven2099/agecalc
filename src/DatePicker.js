import React, { useState } from 'react';

const DatePicker = ({ onDateChange }) => {
  const [birthDate, setBirthDate] = useState('');

  const handleInputChange = (e) => {
    setBirthDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onDateChange(birthDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className='text2'>
        Enter your birth date:<br></br>
        <input className='cal'
          type="date"
          value={birthDate}
          onChange={handleInputChange}
        />
      </label>
      <br></br>
      <br></br>
      <button type="submit" className='button'>Submit</button>
    </form>
  );
};

export default DatePicker;
