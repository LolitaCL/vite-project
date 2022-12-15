import { useContext } from "react";
import { CounterContext } from './CounterProvider'

const Counter = () => {
  const count = useContext(CounterContext)
  console.log('===in Counter==', count)
  return (
    <div>counter：{ count }</div>
  )
}

export default Counter;