import { Layout } from './Layout'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const Home = () => {
  const [users, getUser] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/")
      .then(user => {

        getUser(user.data)
      }).catch(err => {
        console.log(err)
      })
  }, [])
  console.log(users)
  function deleteUser(id) {
    axios.delete("http://localhost:5000/delete/" + id)
      .then(user => {
        console.log(user)
        alert('user successfully deleted')
        window.location.reload(true)
      }).catch(err => {
        console.log(err)
      })
  }
  console.log("users"+users.data)
  if (!users.data) {
    return (
      <>
        <div>{<Layout />}</div>
        <h1>Users not exists</h1>
      </>
    )
  }
  else {
    return (
      <>
        <div>{<Layout />}</div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.data.map(user => (
              <tr key={user._id}>
                <th scope="row">{user._id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td><Link to={"/update/" + user._id}><button type="button" className="btn btn-primary">Update</button></Link> <button type="button" onClick={() => deleteUser(user._id)} className="btn btn-danger">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
  }
}
