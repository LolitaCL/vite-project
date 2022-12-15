import React, { useState } from "react";
import Counter from "./Counter";
import Tips from "./Tips";
import { CounterContext, CounterProvider } from "./CounterProvider";
import { CounterWrapper } from './CounterWrapper';

// 这种写法程序运行正常，但每次state更新，Provider中所有子组件（包括未使用context的组件Tips都会重新渲染）
// 解决方案：将state单独封装到Provider组件内，将子组件通过props.children方式传入
// const CounterContainer = () => {
//   const [count, setCount] = useState(1)
//   console.log('--in counterContainer--')
//   return (
//     <CounterContext.Provider value={count}>
//       <div onClick={() => setCount(count + 1)}>click to add one</div>
//       <Counter/>
//       <Tips/>
//     </CounterContext.Provider>
//   )
// }


// CounterContainer组件成为无状态组件，CounterProvider内state变化的时候props.children不会改变
const CounterContainer = () => {
  console.log('--in counterContainer--')
  return (
    <CounterWrapper>
      <CounterProvider>
        <Counter/>
        <Tips/>
      </CounterProvider>
    </CounterWrapper>
  )
}

export default CounterContainer;
