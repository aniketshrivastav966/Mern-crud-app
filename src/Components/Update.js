import axios from 'axios';
import React, { useState } from 'react'
import { Layout } from './Layout'

export const Update = () => {
  const [name, setName]=useState("");
  const [email, setEmail]=useState("")
  const urlPath= window.location.pathname;
  const submit=(e)=>{
    e.preventDefault();
    updateData(name, email);
  }
  const updateData =(name, email)=>{
    axios.put("http://localhost:5000"+urlPath, {name:name, email:email})
    .then(user=>{
      console.log(user)
      alert("User successfully updated")
      setName("")
      setEmail("")
    }).catch(err=>{
      console.log(err)
    })
  }
 
  return (
    <>
      <div>{<Layout />}</div>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label for="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} aria-describedby="emailHelp" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}
