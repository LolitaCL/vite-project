import React, { useState } from 'react';

export const CounterContext = React.createContext(1)

export const CounterProvider = (props) => {
  const [count, setCount] = useState(1)
  console.log('===in CounterProvider===', count)
  return (
    <CounterContext.Provider value={count}>
      <div onClick={() => setCount(count + 1)}>click to add one</div>
      {props.children}
    </CounterContext.Provider>
  )
}
