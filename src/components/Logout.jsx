import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Logout = () => {
   
    const {logout } = useAuth0();
    
    const logoutWithRedirect = () => {
        logout({ returnTo: window.location.origin });
        localStorage.setItem('token', null);
        localStorage.setItem('userAuth', null);
    }

    return (
        <button className="btn btn-outline-warning tbn-lg" onClick={() => logoutWithRedirect()}>
            Cerrar sesión
        </button>
    )
};

export default Logout;
