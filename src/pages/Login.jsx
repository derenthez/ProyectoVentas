import React , {useEffect, useState, useRef} from 'react';
import Google from '../assets/image/google_logo.png';
import logo from '../assets/image/logo.png'
import { Link } from 'react-router-dom';
import '../styles/login.css'
import { useAuth0 } from "@auth0/auth0-react";
import { getUsersByUsuario } from 'utils/api/users';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  return (
    <div className='divPadre'>
      {/* {loginWithRedirect()}
      {console.log(JSON.stringify(user))}
      {localStorage.setItem('userAuth', JSON.stringify(user))} */}

      {!isAuthenticated ? (
        loginWithRedirect()
      ) :
        (
          //JSON.stringify(user)
          localStorage.setItem('userAuth', JSON.stringify(user))
      )
      }
    </div>

    
  )
};

export default Login;
