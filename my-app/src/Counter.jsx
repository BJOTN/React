import { useState } from "react";

export function Counter({ initialValue = 0, incrementAmount = 1, decrementAmount = 1 }) {
  const [counter, setCounter] = useState(initialValue);
  const onIncrement = () => {
    setCounter((c) => c + incrementAmount);
  };
  const onDecrement = () => {
  if (counter - decrementAmount > 0) {
    setCounter((c) => c - decrementAmount);
  } else {
    setCounter(0);
  }

  }
  const  onReset = () => {
    setCounter(initialValue)
  }
/*   if(setCounter = 1){
    setCounter = 0
  } */
  return (
    <div>
      <h2>
        Counter Value: <CounterDisplay count={counter} />
      </h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
