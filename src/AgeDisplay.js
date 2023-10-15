import React from 'react';

const AgeDisplay = ({ age }) => {
  return (
    <div className='textt'>
      {age && <h2>You are {age} years old</h2>}
    </div>
  );
};

export default AgeDisplay;
