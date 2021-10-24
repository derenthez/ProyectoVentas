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
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  const [usuarioInteno,setUsuarioInterno] = useState([]);

  useEffect(() => {
    const fetchUsuarioInterno = async () => {
      await getUsersByUsuario(
        ({userl},response) => {
          console.log("Respuesta: ", response);
          setUsuarioInterno(response.data);
          setEjecutarConsulta=false;
        },
        (error) => {
          console.error("Error: ", error);
        }
      );
    };
    if (ejecutarConsulta) {
      fetchUsuarioInterno();
    }
  }, [ejecutarConsulta]);;

  return (
    <div className='divPadre'>
      {loginWithRedirect()}
      {JSON.stringify(user)}
    </div>
  )
};

export default Login;
