import React, { useEffect, useState } from 'react'
import './login.css'

const LoginComponent = () => {
    const [data,setData]=useState({
        username:"",
        password:""
    })

    console.log(data);

    const handleChange=(event)=>{
        const userData={
            ...data,
            [event.target.name]:event.target.value
        }
        setData(userData)
    }

    useEffect(()=>{
        alert("Please Login")
    },[])

    const handleSubmit=(event)=>{
        event.preventDefault()
        if(data.username && data.password){
            if(data.username==="admin" && data.password==="admin"){
                alert("Login Successfully")
            }
            else{
                alert("Login Failed")
            }
        }
        else{
            alert("Username and Password is Required")
        }
        setData({
            username:"",password:""
        })
        
    }
  return (
    <>
    <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form className="login-form">
          <input type="text" name='username' onChange={handleChange} value={data.username} placeholder="username"/>
          <input type="password" onChange={handleChange} name="password" value={data.password} placeholder="password"/>
          <button type='submit' onClick={handleSubmit}>Login</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default LoginComponent