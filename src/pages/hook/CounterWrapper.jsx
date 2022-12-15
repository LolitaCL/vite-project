import { useState } from "react"

export const CounterWrapper = (props) => {
  const [date, setDate] = useState(new Date().toString())
  const handleDateChange = () => {
    setDate(new Date().toString())
  }
  console.log('---in CounterWrapper---', date)
  return (
    <div>
      <div onClick={() => { handleDateChange() }}>click to change date:{date}</div>
      {props.children}
    </div>
  )
}