import {useState} from 'react'

function Counter() {
  const [val,setVal]=useState(0)

  const increase=()=>{
    setVal((preValue)=>{
      return preValue+1
    })
  }
  const decrease=()=>{
    setVal((preValue)=>{
      return preValue-1
    })
  }
  return (
    <>
    <h2>{val}</h2>
    <button onClick={increase}>increase</button> 
    <button onClick={decrease}>deccrease</button>

    </>

  );
}

export default Counter;
