import React, { useEffect, useState } from "react";
import "../css section/Login.css";
import Axios from "axios"
import { useNavigate } from "react-router-dom";
export default function SignIn() {
  const[name,setname]=useState('')
  const[email,setemail]=useState('')
  const[password,setpassword]=useState('')
  const[list,setlist]=useState([])

  const Navigate=useNavigate()

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
  alert("Signin Sucsesfully !")
  Navigate("/log-in")
  .catch(err=>console.log(err))
   
}

    
  return (
    <div className="log-in-parent">
      <div className="log-in-div">
      <h1>Sign In</h1>
        <label className="label" >UserName</label>
        
      <form onSubmit={handleaignin}>
      <input
          type="text"
          id="login-input-name"  
          placeholder="Enter Your Username"
          onChange={changename} value={name} required
        />
        <br />
        <label className="label">Email</label>
        <br />
        <input
          type="text"
          id="login-input-email"
          placeholder="Enter Your Email"
          onChange={changeemail} value={email} required
        />
        <br />
        <label className="label">Password</label>
        <br />
        <input
          type="text"
          id="login-input-password"
          placeholder="Enter Your password"
          onChange={changepassword} value={password} required
        />
        <button class="button-77" role="button" type="submit">Signin now</button>
      </form>
  
      </div>
    </div>
  );
}
