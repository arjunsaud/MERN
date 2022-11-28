import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import MyNav from '../components/MyNav'
import { AuthContext } from './context/AuthContext'

const LoginWrapper = () => {
  const {isLoggedIn}=useContext(AuthContext)
  return (
    isLoggedIn ?
      <div>
        <MyNav/>
        <Outlet/>
      </div>:
      <Navigate to="/login" replace={true}></Navigate>
  )
}

export default LoginWrapper