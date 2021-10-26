import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config({ path: '../../../.env' });

const backend = process.env.BACK_URL || "http://localhost:5000";

const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`;
};

const cabecera= {'Content-Type': 'application/json'};

//const cabecera = () => {
  //   if(localStorage.getItem('token'))
  //   {
  //       return {'Content-Type': 'application/json', Authorization: `${getToken()}`};
  //   }
  //   else
  //   {
  //     return {'Content-Type': 'application/json'};
  //   }
  // };

//TRAER TODOS LOS PRODUCTOS
export const getProducts = async (successCallback, errorCallback) => {
    const options = { 
      method: 'GET', 
      url: `${backend}/productos/`,
      // headers: {cabecera},
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };
 
//EXTRAER DATO POR ID
export const getProductByID = async (id, successCallback, errorCallback) => {
  const options = { 
    method: 'GET', 
    url: `${backend}/productos/${id}`,
    // headers: {cabecera},
   };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//CREAR UN NUEVO PRODUCTO
export const createProduct = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: `${backend}/productos/`,
    headers: {cabecera},
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
  };

//EDITAR PRODUCTO
export const updateProduct = async (id, data, successCallback, errorCallback) => {
    const options = {
      method: 'PATCH',
      url: `${backend}/productos/${id}/`,
      headers: {cabecera},
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

//ELIMINAR PRODUCTO
export const deleteProduct = async (id, successCallback, errorCallback) => {
    const options = {
      method: 'DELETE',
      url: `${backend}/productos/${id}/`,
      headers: {cabecera},
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };