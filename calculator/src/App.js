import React, { useState } from 'react'
import InputRange from 'react-input-range';

const App = () => {
  const [value, setValue] = useState(0);

  const handleAmountChange = value => {
    setValue({ value: value });
  };
  return (
    <div>
      <h4>Money : {value}</h4>
      <InputRange
          step={100}
          maxValue={20000}
          minValue={1000}
          value={value}
          onChange={() => handleAmountChange}
        />
    </div>
  )
}

export default App
