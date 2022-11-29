import React, {useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {register,setmessage} from "../slice/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const dispatch=useDispatch()
  const {userDetails,message} = useSelector((state) => {
    console.log(state.auth);
    return state.auth;
  });
  console.log(userDetails);

  const uname=useRef()
  const upass=useRef()
  const handleClick=(event)=>{
    event.preventDefault()
    const username=uname.current.value;
    const password=upass.current.value;
    const checkUser= (username,password)=> {return userDetails.filter((data)=>(data.username===username && data.password===password))}

    if(userDetails.length>0){
      const check=checkUser(username,password)
      if(check.length>0){
        dispatch(setmessage("User Already Present"))        
      }
      else{
        dispatch(register({username,password}))    
        navigate('/login')    
      }
    }else{
      dispatch(register({username,password}))
      navigate('/login')    
    }
  }
  return (
    <div className="d-flex justify-content-center mt-4">
      <form>
      <h3>Register</h3>
      <h3 className="bg-warning">
      {message?message:""}
      </h3>
        <div className="mb-3 mt-4">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input ref={uname}
            type="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input ref={upass}
            type="password"
            className="form-control"
          />
        </div>
        <button onClick={handleClick} type="submit" className="btn btn-primary">
        Register
        </button>
      </form>
    </div>
  );
};

export default Register;
