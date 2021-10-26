import NavbarNav from 'components/NavbarNav'
import { Sidebar } from 'components/Sidebar'
import React, { useEffect, useState } from 'react';
import 'styles/sidebar.css'
import { useAuth0 } from '@auth0/auth0-react';
import ReactLoading from 'react-loading';
import { getUsersByEmail, createUser, getUserDataAuth2 } from 'utils/api/users';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { useUser } from 'context/userContext';

const PrivateLayout = ({ children }) => {

    const { user, isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently, logout } =  useAuth0();
    const [loadingUserInformation, setLoadingUserInformation] = useState(false);
    //const { setUserData } = useUser();

    useEffect(() => {
        const fetchAuth0Token = async () => {
            // si se quieren hacer validaciones con el token:
            // if (localStorage.getItem('token')) {
            //   // validar fecha de expiracion del token
            // } else {
            //   // pedir token
            // } 

            // 1. pedir token a auth0
            setLoadingUserInformation(true);
            const accessToken = await getAccessTokenSilently({
                audience: `https://ciclo3-misiontic2022.us.auth0.com/api/v2/`,
                //audience:"https://back-autho-proyecto-ventas.com",
            });
            // 2. recibir token de auth0
            localStorage.setItem('token', accessToken);
            localStorage.setItem('userAuth', JSON.stringify(user));
            ///console.log("TOKEN DE ACCESO \n" + accessToken);
            // 3. enviarle el token a el backend
            var responseEmail=null;
            await getUsersByEmail(
                user.email,
                (response) => {
                    responseEmail=response.data;
                    //setUserData(response.data);
                    //setLoadingUserInformation(false);
                },
                (err) => {
                    console.log('err', err);
                    setLoadingUserInformation(false);
                    responseEmail="Error";
                    //logout({ returnTo: 'http://localhost:3000' });
                }
            );
            
            var responseCreate = null;
            if (responseEmail === null) {
                var splitMail = user.email.split('@');//opcion1
                var nombreU = user.given_name || "Ventas";
                var apellidoU = user.family_name || splitMail[0];
                await createUser(
                    {
                        nombre: nombreU.toUpperCase(),
                        apellido: apellidoU.toUpperCase(),
                        email: user.email.toLowerCase(),
                        rol: "Sin rol",
                        estado: "Pendiente",
                    },
                    (res) => {
                        responseCreate=res.data;
                    },
                    (error) => {
                        responseCreate="Error";
                        //toast.error('Error creando integración de usuario en el sistema');
                    }
                );

                if (responseCreate != null && responseCreate != "Error") {
                    toast.success('Usuario integrado con éxito al sistema');
                }
            }
            setLoadingUserInformation(false);
        };
        if (isAuthenticated) {
            //console.log("Datos usuario autenticado "+JSON.stringify(user));
            fetchAuth0Token();
            setLoadingUserInformation(false);
        }
    }, [isAuthenticated, getAccessTokenSilently, logout]);

    //[isAuthenticated, getAccessTokenSilently, logout, setUserData]);

    if (isLoading || loadingUserInformation)
    //if (isLoading)
        {return <ReactLoading type="bars" color="#0D6EFD" height={667} width={375} />;}

    if (!isAuthenticated) {
        return loginWithRedirect();
    }


    return (
        <div>
            <div className="flex">
                <Sidebar />
                <div className="content w-100">
                    <NavbarNav />
                    <main>{children}</main>
                </div>
                <ToastContainer position='center-center' autoClose={5000} />
            </div>
        </div>
    )
}

export default PrivateLayout;