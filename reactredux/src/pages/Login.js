import React, {useRef } from "react";
import { setmessage,login } from "../slice/authSlice";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();

  const dispatch=useDispatch()
  const {userDetails,message} = useSelector((state) => {
    console.log(state.auth);
    return state.auth;
  });

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
        dispatch(login())
        navigate('/todo')    
      }
      else{
        dispatch(setmessage("User Details Not Match"))    
      }
    }else{
      dispatch(setmessage("User Not Present"))
    }

  }

  return (
    <div className="d-flex justify-content-center mt-4">
      <form>
      <h3>Login</h3>
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
