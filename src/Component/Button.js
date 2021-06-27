

import React, { useState, useEffect } from 'react';

function Button() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(1);
  const [maxValue, setMaxValue] = useState(1000);
  const [error, showError] = useState(false);



  const handleInputChange = (value, type) => {
    if (type === "default") {
      if(maxValue <  value){
        showError(true);
        return
      }
      setCount(Number(value))
      showError(false)
    } else {  
          if(value <  count){
      showError(true);
      return
    } 
      setMaxValue(Number(value))
      showError(false)
    }
  }

  useEffect(() => {
    if (maxValue < count) {
      setCount(1)
      showError(true)
    }else if(count> maxValue){
      setCount(1)
      showError(true)
    }
  }, [maxValue, count])

  const handleIncrementChange = () => {
    if(error){
      return
    }
    let value = Number(count);
    value++;
    setCount(value)
  }

  const handleDecrementChange = () => {
    if(error){
      return
    }
    let value = Number(count);
    value--;
    setCount(value)
  }



  return (
    <div>
      <div className="wrapper">
      <div className="title">
        <p>Enter default value for counter:</p>
        <input
          maxValue={maxValue}
          type="number"
          onChange={(e) => handleInputChange(e.target.value, "default")}
        />
      </div>
      <div>
        <p className="title">Enter Max value for counter:</p>
        <input
          type="number"
          onChange={(e) => handleInputChange(e.target.value, "maxValue")}
        />
      { error && <p className="error-text">*You can't add Max value less than default value.</p>}
      </div>
      </div>
   
      <div className="button-wrapper">
        <button className="sub-button" onClick={handleDecrementChange}>-</button>
        <div className="text-wrapper">{count}</div>
        <button className="add-button" onClick={handleIncrementChange}>+</button>
      </div>
    </div>
  );
}

export default Button;

