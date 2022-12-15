


// useCallback、useMemo、Memo使用场景

// useMemo主要用来解决使用React hooks产生的无用渲染的性能问题

import { useEffect, useState } from "react";
import Tips from "./Tips";

// 缓存useEffect的引用类型依赖

const MessageDisplay = (props) => {
  console.log('===message display====')
  return (
    <>
      This is current message：{ props.message.info }
    </>
  )
}

const UsageCase = () => {
  const message = {
    info: 'hello'
  };
  const [date, setDate] = useState(new Date().toString())
  useEffect(() => {
    console.log('--message-->', message.info)
  }, [message])
  const handleDateChange = () => {
    setDate(new Date().toString())
  }
  return ( 
    <div>
      <MessageDisplay message={message} />
      {/* <div>current date: {date}</div> */}
      <button onClick={() => handleDateChange()}>click change date</button>
      <Tips/>
    </div>
  )
}

export default UsageCase

// 缓存子组件props中的引用类型依赖
// 目的：防止组件非必要的重新渲染造成的性能消耗
// 组件重新渲染条件：1、组件的props或state变化会导致组件重新渲染 2、父组件的重新渲染会导致其子组件的重新渲染