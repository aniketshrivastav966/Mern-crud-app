import React from 'react'
import { Layout } from './Layout'
import { useState } from 'react'
import axios from 'axios'
export const Create = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [posts, setPost] = useState([])
  const submit = (e) => {
    e.preventDefault();
    addpost(name, email, password);
    alert("User is created successfully")
    setName("")
    setEmail("")
    setPassword("")


  }
  const addpost = (name, email, password) => {
    axios.post("http://localhost:5000/create", {
      name: name,
      email: email,
      password: password
    }).then((response) => {
      setPost([response.data, ...posts])
      
    }).catch(err=>{
      console.log(err)
    })
    
  }
  return (
    <>
      <div><Layout /></div>
      <form onSubmit={submit} method="POST">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}
