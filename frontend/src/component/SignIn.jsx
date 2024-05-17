import React, { useEffect, useState } from "react";
import "../css section/sign.css";
import Axios from "axios"
import { Navigate } from "react-router-dom";
export default function SignIn() {
  const[name,setname]=useState('')
  const[email,setemail]=useState('')
  const[password,setpassword]=useState('')
  const[list,setlist]=useState([])

const changename=(e)=>{
  setname(e.target.value)
}

const changeemail=(e)=>{
  setemail(e.target.value)
}

const changepassword=(e)=>{
  setpassword(e.target.value)
}

// useEffect(()=>{
//   Axios.get(`mongodb://localhost:27017/users`)
//   .then(res=>{setlist(res.data)})
//   .catch(err=>{console.log(err)})
// },[])
 

const handleaignin=(e)=>{
  e.preventDefault()
  const formData={
      username:name,
      email:email,
      password:password
  }
  Axios.post('http://localhost:3001/users/post',formData)
  .then(res=>console.log(res))
  .catch(err=>console.log(err))
  Navigate("/login")
}

    
  return (
    <div className="log-in-parent">
      <div className="log-in-div">
      <h1>Sign In</h1>
        <label className="label" >UserName</label>
      <form onSubmit={handleaignin}>
      <input
          type="text"
          id="login-iput-name"  
          placeholder="Enter Your Username"
          onChange={changename} value={name}
        />
        <br />
        <label className="label">Email</label>
        <br />
        <input
          type="text"
          id="login-iput-email"
          placeholder="Enter Your Email"
          onChange={changeemail} value={email}
        />
        <br />
        <label className="label">Password</label>
        <br />
        <input
          type="text"
          id="login-iput-password"
          placeholder="Enter Your password"
          onChange={changepassword} value={password}
        />
        <button class="button-77" role="button" type="submit">Signin now</button>
      </form>
  
      </div>
    </div>
  );
}
