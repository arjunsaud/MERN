import React, { useContext, useRef } from "react";
import { AuthContext } from "../components/context/AuthContext";


const Login = () => {
  const username=useRef()
  const password=useRef()
  const {attemptLogin,error}=useContext(AuthContext)

  const handleClick=(event)=>{
    event.preventDefault()
    const uname=username.current.value;
    const upass=password.current.value;
    attemptLogin(uname,upass)    
  }

  return (
    <div className="d-flex justify-content-center mt-4">
      <form>
      <h3>Login</h3>
      <h4 className="my-4 text-primary">{error?error:""}</h4>
        <div className="mb-3 mt-4">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input ref={username}
            type="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input ref={password}
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
