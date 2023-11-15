import React, { useState, useEffect, useRef } from 'react';

export function Counter({ initialValue = 0, incrementAmount = 1, decrementAmount = 1 }) {
  const [counter, setCounter] = useState(initialValue);
  const directionRef = useRef(null);
  const prevValueRef = useRef(null);

  useEffect(() => {
    // Determine the direction of the change
    const direction = counter > prevValueRef.current ? 'up' : 'down';

    // Update the ref with the direction
    directionRef.current = direction;

    // Print to the console only when the direction changes
    if (direction !== prevValueRef.current) {
      console.log(`Direction changed: ${direction}`);
    }

    // Update the previous value ref
    prevValueRef.current = counter;
  }, [counter]);

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

  return (
    <div>
      <h2>Counter Value: {counter}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}