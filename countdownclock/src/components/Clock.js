import React, { useContext,createContext } from "react";
import useCustomHook from "./useCustomHook";
import "./clock.css";

const TimeContext = createContext();

const Clock = () => {

  const [time,setTime,getTime,status] = useCustomHook();
  return (
    <>
      <TimeContext.Provider value={{time,setTime,getTime,status}}>
        <Title />
        <SetTimer />
        <ClockTimer/>
      </TimeContext.Provider>
    </>
  );
};

const Title = () => {
  return (
    <>
      <h3 className="title">Countdown Clock</h3>
    </>
  );
};

const SetTimer = () => {
  const context=useContext(TimeContext)
  const handleClick=(event)=>{
    if(context.getTime.current.value){
    event.preventDefault()
    context.setTime(context.getTime.current.value)
    context.getTime.current.value=null
    }
  }
  return (
    <>
      <form className="form">
        <input type="number" ref={context.getTime} placeholder="Enter Time in Seconds" required min="0"/>
        <button onClick={handleClick}>Set Time</button>
      </form>
    </>
  );
};

const ClockTimer =()=> {
  const context=useContext(TimeContext)
  if(context.status){
    return <div className="clocktimer">{context.time?context.time +"  : SEC":"0 : SEC"}</div>;
  }else{
    return <div className="clocktimer">Time Expired</div>;
  }
};

export default Clock;
