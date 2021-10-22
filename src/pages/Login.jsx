import React from 'react';
import Google from '../assets/image/google_logo.png';
import logo from '../assets/image/logo.png'
import { Link } from 'react-router-dom';
import '../styles/login.css'
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  return (
    <div className='divPadre'>
      {/* <div className='divForm'>
        <div className='divLogo'>
          <img width="80" src={logo} alt="logo" className='logo'></img>
        </div>
        <form className='formulario'>
          <input type='hidden' name='remember' defaultValue='true' />
          <div className='divSec'>
            <div>
              <input
                name='email'
                type='email'
                autoComplete='email'
                required
                className='campo correo'
                placeholder='Correo Electrónico'
              />
            </div>
            <div>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                className='campo contra'
                placeholder='Contraseña'
              />
            </div>
          </div>
          <div>
            <button onClick={() => loginWithRedirect()} className= 'boton' >
              Iniciar sesión
            </button>
          </div>
          <div className='divGoogle'>
        <div>
          <button
            type='submit'
            className='googlebtn'
          >
            <div className='gglindiv'>
              <img src={Google} alt='Logo Google' className='googleimg' />
              <span className='gglspan'>Iniciar con Google</span>
            </div>
          </button>
        </div>
      </div>
          <div className='regdiv'>
            <span className= 'regtext'>Si no tienes cuenta</span>
            <Link className= 'reglink' to='/'>
              <span>REGISTRATE</span>
            </Link>
          </div>
        </form>
      </div>      */}
      {loginWithRedirect()}

    </div>
  );
};

export default Login;
