import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './componentes/Login';
import Registro from './componentes/Registro';
import Estadisticas from './componentes/Estadisticas';
import Explorar from './componentes/Explorar';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setUserSlice } from './slices/userSlice';

function App() {
  
  const userSlice = useSelector((state) => state.user.username)

  const dispatch = useDispatch()

  const logout = () => {
    dispatch(setUserSlice({
      username: null,
      jwt: null,
    }))
  }

  return (
    <>
      <BrowserRouter>
        {userSlice ? (
          <>
            <header>
              <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
                <nav className="my-2 my-md-0 mr-md-3">
                  <Link className="p-2 text-dark" to='/app/explorar'>Explorar</Link>
                  <Link className="p-2 text-dark" to='/app/estadisticas'>Estadísticas</Link>
                </nav>
                <h5 className="my-0 mr-4 font-weight-normal">Logged in as {userSlice}</h5>
                <Link className="btn btn-outline-danger mr-3" to='/app/explorar' onClick={logout}>Log out</Link>
              </div>
            </header>
          </>
        ) : (
          <header>
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
            <nav className="my-2 my-md-0 mr-md-3">
              <Link className="p-2 text-dark" to='/app/explorar'>Explorar</Link>
              <Link className="p-2 text-dark" to='/app/estadisticas'>Estadísticas</Link>
            </nav>
              <Link className="btn btn-outline-primary mr-3" to='/app/login'>Iniciar sesión</Link>
              <Link className="btn btn-outline-success" to='/app/registro'>Registro</Link>
            </div>
          </header>
        )}
        <Routes>
          <Route path="/" element={<Explorar/>}></Route>
          <Route path="/app/explorar" element={<Explorar/>}></Route>
          <Route path="/app/registro" element={<Registro/>}></Route>
          <Route path="/app/login" element={<Login/>}></Route>
          <Route path="/app/estadisticas"  element={<Estadisticas/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
        
  );
}

export default App;
