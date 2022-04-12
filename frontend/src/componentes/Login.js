import React from 'react'

export default function Login() {
    return (
        <div>
        <br></br>
        <form>
          <label>
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
            Password
            <br></br>
            <input
              name="password"
              type="password"
            />
          </label>
          <br></br>
          <br></br>
          <button type="submit">Log in</button>
          <br></br>
        </form>
      </div>
    );
}