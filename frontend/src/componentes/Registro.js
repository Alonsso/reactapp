import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import usersService from '../services/users_service'

export default function Registro() {

  const [email, setEmail] = useState("caasr");

  const [password, setPasswod] = useState("12345")

  const [users, setUsers] = useState([])

  useEffect(()=>{
    usersService.getAllUsers().then(initialUsers => setUsers(initialUsers));
  }, [])

  function handleClick(e){
      e.preventDefault();
      getEtherPrice();
  }

  async function getEtherPrice(){
    await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd").then((response) => {
        
    });
  }

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h1 className='display-4'>Registro</h1>
        <br></br>
        <form>
            Username
            <br></br>
            <input
              name="username"
              type="text"
            />
            <br></br>
          <br></br>
          <label>
            Email
            <br></br>
            <input
              name="email"
              type="text"
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Password
            <br></br>
            <input
              name="password"
              type="password"
            />
          </label>
          <br></br>
          <br></br>
          
          <button type="submit" onClick={(e) => {handleClick(e)}}>Log in</button>
          <br></br>
        </form>
        <div>
          {users.map((item)=>{
            return <div key={item.user_id}>
              <h1>{item.user_name}</h1>
              <h2>{item.user_email}</h2>
            </div>
          })}
        </div>
      </div>
  )
}
