import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config({ path: '../../../.env' });

const backend = process.env.BACK_URL || "http://localhost:5000";

const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`;
};

const cabecera = {'Content-Type': 'application/json'};

// const cabecera = () => {
//   if(localStorage.getItem('token'))
//   {
//       return {'Content-Type': 'application/json', Authorization: `${getToken()}`};
//   }
//   else
//   {
//     return {'Content-Type': 'application/json'};
//   }
// };


//TRAER TODOS LOS USUARIOS
export const getUsers = async (successCallback, errorCallback) => {
    const options = { 
      method: 'GET',
      url: `${backend}/usuarios/`,
      // headers: {cabecera},
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

//CONSULTAR USUARIO POR NOMBRE
export const getUsersByEmail = async (usuario, successCallback, errorCallback) => {
  const options = { 
   method: 'GET', 
   url: `${backend}/usuarios/email/${usuario}`,
   //headers: {cabecera},
};
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const getUserDataAuth1 = async (DataUserAuth, successCallback, errorCallback) => {
  const options = { 
    method: 'GET', 
    url: `${backend}/usuarios/verificacion/${DataUserAuth}/`,
    headers: {cabecera},
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const getUserDataAuth2 = async (data, successCallback, errorCallback) => {
  // const options = {
  //   method: 'GET',
  //   url: `${backend}/usuarios/verificacion/${data}/`,
  //   headers: {
  //     Authorization: getToken(), // 3. enviarle el token a backend
  //   },
  // };

  const options = {
    method: 'POST',
    url: `${backend}/usuarios/verificacion/`,
    headers: {cabecera},
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const getUserDataAuth3 = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: `${backend}/usuarios/verificacion/self/`,
    // headers: {cabecera}, // 3. enviarle el token a backend
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};


//CREAR UN NUEVO USUARIO
export const createUser = async (data, successCallback, errorCallback) => {
    const options = {
      method: 'POST',
      url: `${backend}/usuarios/`,
      headers: {cabecera},
      data
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

//EDITAR USUARIO
export const updateUser = async (id, data, successCallback, errorCallback) => {
    const options = {
      method: 'PATCH',
      url: `${backend}/usuarios/${id}/`,
      headers: {cabecera},
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

//ELIMINAR USUARIO
export const deleteUser = async (id, successCallback, errorCallback) => {
    const options = {
      method: 'DELETE',
      url: `${backend}/usuarios/${id}/`,
      headers: {cabecera},
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

  //TRAER TODOS LOS VENDEDORES ACTIVOS
export const getActiveSellers = async (successCallback, errorCallback) => {
  const options = { 
    method: 'GET', 
    url: `${backend}/usuarios/vendedores/activos`,
    headers: {cabecera},
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

  //TRAER TODOS LOS VENDEDORES NO ACTIVOS
  export const getInactiveSellers = async (successCallback, errorCallback) => {
    const options = { 
      method: 'GET', 
      url: `${backend}/usuarios/vendedores/bloqueados`,
      headers: {cabecera}, 
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };