import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import {Button} from 'react-bootstrap'

export default function Registro() {

  const [email, setEmail] = useState("caasr");

  const [password, setPasswod] = useState("12345")

  const [etherPrice, setEtherPrice] = useState(0);

  useEffect(()=>{
    console.log(etherPrice, new Date())
  },[etherPrice])

  useEffect(()=>{
    return () => {
      console.log("2", new Date())
    }
  })

  useEffect(()=>{
    console.log("3" + password, new Date())
  }, [email, password])

  function handleClick(e){
      e.preventDefault();
      getEtherPrice();
  }

  async function getEtherPrice(){
    await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd").then((response) => {
        setEtherPrice(response.data.ethereum.usd * Math.random())
    });
  }

  return (
    <div>
        <br></br>
        <form>
          <label>{etherPrice}
            Username
            <br></br>
            <input
              name="username"
              type="text"
            />
            <br></br>
          </label>
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
        <Button variant="dark" type="submit" onClick={(e) => {handleClick(e)}}>Log in</Button>
      </div>
  )
}
