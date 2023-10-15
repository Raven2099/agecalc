import React, { useState } from 'react';
import DatePicker from './DatePicker';
import AgeDisplay from './AgeDisplay';

function App() {
  const [age, setAge] = useState(null);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const age = today.getFullYear() - birthDateObj.getFullYear();
    setAge(age);
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <DatePicker onDateChange={calculateAge} />
      <AgeDisplay age={age} />
    </div>
  );
}

export default App;
