import React from 'react';

const AgeDisplay = ({ age }) => {
  return (
    <div>
      {age && <h2>Your age is: {age} years</h2>}
    </div>
  );
};

export default AgeDisplay;
