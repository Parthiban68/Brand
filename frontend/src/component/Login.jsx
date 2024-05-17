import React, { useEffect, useState } from "react";
import "../css section/Login.css";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";
import  Axios  from "axios";
import { NavLink } from "react-router-dom";

export default function Login() {
  const[email,setemail]=useState('')
  const[password,setpassword]=useState('')
  const[errmessage,seterrmessage]=useState('')
  const[userlist,setuserlist]=useState([])
  
  const auth=useAuth()
  const Navigate=useNavigate()

  // useEffect(()=>{
  //   Axios.get(`http://localhost:3001/user/get/${email}`)
   
  //   .then(res=>{setuserlist(res.data)})
  //   .catch(err=>{console.log(err)})
  //   console.log(userlist)
  // },[])

  const handlelogin=(e)=>{
      e.preventDefault()
      Axios.get(`http://localhost:3001/users/get/${email}`)
      .then(res=>{
          console.log(res)
          if(res.data[0]?.email){
           if(res.data[0]?.password === password){
              seterrmessage('')
                
                auth.login(res.data[0]?.username)
                alert("Login sucsesfully")
                Navigate('/profile')
           }
           else{
              seterrmessage("Incorrect password")
           }
          }
          else{
              seterrmessage('Email not found')
          }

      })
      .catch(err=>console.log(err))
  }
 
  return (

    <div className="log-in-parent">
      <div className="log-in-div">
        <h1>Login</h1>
        <form onSubmit={handlelogin}>
        <label className="labele">Email</label>
        <br />
        <input type="email" id="login-input-email" placeholder="Enter Your Email" value={email} onChange={(e)=>{setemail(e.target.value)}} required/>
        <br />
        <label className="labele">Password</label>
        <br />
        <input type="password" id="loin-input-password" placeholder="Enter Your Password" value={password} onChange={(e)=>{setpassword(e.target.value)}} required/>
        <br />
        <button class="button-77" role="button" type="submit" >Login now</button>
        </form>
       
        {errmessage}
        <h5>creat a new account ? <NavLink to={"/sign-in"}>sign in</NavLink></h5>
      </div>
    </div>
  );
}
