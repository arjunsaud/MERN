import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import MyNav from '../components/navbar/MyNav'
import { useSelector } from "react-redux";


const LoginWrapper = () => {
  const isLoggedIn=useSelector((state)=>{
    return state.auth.isLoggedIn
  })
  
  return (
    isLoggedIn ?
      <div>
        <MyNav/>
        <Outlet/>
      </div>:<Navigate to="/login" replace={true}></Navigate>
  )
}

export default LoginWrapper