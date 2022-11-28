import React, { useRef, useContext } from "react";
import { AuthContext } from "../components/context/AuthContext";

const Signup = () => {
  const username = useRef();
  const password = useRef();

  const { registerDetails, signup } = useContext(AuthContext);

  const handleClick = (event) => {
    event.preventDefault();
    const uname = username.current.value;
    const upass = password.current.value;
    registerDetails(uname, upass);
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      <form>
        <h3>Sign up</h3>
        <h4 className="my-4 text-warning">{signup ? signup : ""}</h4>
        <div className="mb-3 mt-4">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input ref={username} type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input ref={password} type="password" className="form-control" />
        </div>
        <button onClick={handleClick} type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
