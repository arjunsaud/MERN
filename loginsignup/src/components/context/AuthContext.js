import { createContext, useReducer, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { initialState } from "../Store";
import { reducer } from "../reducer/reducer";
import { ACTIONS } from "../action/actions";

export const AuthContext = createContext();

const AuthContextProvider = () => {
const [loginDetails, dispatch] = useReducer(reducer, initialState);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user,setUser]=useState("")
  const [signup,setSignup]=useState("")

  const [error, setError] = useState("Enter User Details");
  const navigate = useNavigate();

  const checkUser=(username,password)=>{
    return loginDetails.filter((data)=>(data.username===username && data.password===password))
  }

  const registerDetails=(username,password)=>{
    if(loginDetails.length>0){
        const check=checkUser(username,password)
        if(check.length>0){
            setSignup("User Already Present")
        }
        else{
            dispatch({type:ACTIONS.SIGNUP,payload:{username,password}})
            navigate("/login")
        }
    }else{
        dispatch({type:ACTIONS.SIGNUP,payload:{username,password}})
        navigate("/login")
    }
  }

  const attemptLogin=(username,password)=>{
    if(loginDetails.length>0){
        const check=checkUser(username,password)
        if(check.length>0){
            setIsLoggedIn(true)
            setUser(username)
            navigate("/",{replace:true})
        }
        else{
            setIsLoggedIn(false)
            setError("Incorrect User Details")
        }
    }
    else{
        setIsLoggedIn(false)
        setError("User Not found")
    }
  }


  return (
    <AuthContext.Provider value={{signup,registerDetails,isLoggedIn,error,user,attemptLogin }}>
      <Outlet />
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
