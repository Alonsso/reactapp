import { React, useState } from 'react'
import loginService from '../services/login_service'
import { setUserSlice } from '../slices/userSlice'
import { useSelector, useDispatch } from 'react-redux'

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userSlice = useSelector((state) => state.user.username)
  const dispatch = useDispatch()

  const login = async (e) => {
    e.preventDefault();
    dispatch(setUserSlice(await loginService.login(username, password)))
  }
    return (
        <div className='container d-flex flex-column justify-content-center align-items-center'>
          {userSlice ? (
            <div>
              <h1>Logged in as {userSlice}</h1>
            </div>
          ) : (
            <div>
              <h1 className='display-4'>Login</h1>
                <br></br>
                <form onSubmit={login}>
                  <label>
                    Username
                    <br></br>
                    <input
                      name="username"
                      type="text"
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
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
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </label>
                  <br></br>
                  <br></br>
                  <button type='submit'>
                  Log in
                  </button>
                  <br></br>
                </form>
            </div>
          )}
      </div>
    );
}