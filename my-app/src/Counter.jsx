import React, { useState} from 'react';

function useCounter(initialValue = 0,incrementAmount = 1,decrementAmount =1){
  const [counter, setCounter] = useState(initialValue);

  const onIncrement = () => {
    setCounter((c) => c + incrementAmount);
  };

  const onDecrement = () => {
    if (counter - decrementAmount >= 0) {
      setCounter((c) => c - decrementAmount);
    } else {
      setCounter(0);
    }
  };

  const onReset = () => {
    setCounter(0);
  };
  return{
    currentNum:counter,
    increment: onIncrement,
    decrement: onDecrement,
    reset: onReset
  }
}

export function Counter({ initialValue = 0}) {
  const {currentNum, increment,decrement, reset} =useCounter(initialValue)

  return (
    <div>
      <h2>Counter Value: {currentNum}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}