import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import MyNav from '../navbar/MyNav'

const LoginWrapper = () => {
  const isLoggedIn=true
  return (
    isLoggedIn ?
      <div>
        <MyNav/><Outlet/>
      </div>:
      <Navigate to="/login" replace={true}></Navigate>
  )
}

export default LoginWrapper