import React, { useContext } from 'react'
import { AuthContext } from '../components/context/AuthContext'

const Dashboard = () => {
  const {user}=useContext(AuthContext)
  return (
    <div style={{textAlign:"center",marginTop:"100px"}}>Welcome <h3>{user}</h3></div>
  )
}

export default Dashboard