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

//TRAER TODAS LAS VENTAS
export const getSales = async (successCallback, errorCallback) => {
    const options = { 
      method: 'GET', 
      url: `${backend}/ventas`,
      // headers: {cabecera},
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

//CREAR NUEVA VENTA
export const createSale = async (data, successCallback, errorCallback) => {
    const options = { 
      method: 'POST',
      url: `${backend}/ventas/`,
      headers: {cabecera},
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

//EDITAR VENTA
export const updateSale = async (id, data, successCallback, errorCallback) => {
    const options = {
      method: 'PATCH',
      url: `${backend}/ventas/${id}/`,
      headers: {cabecera},
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

//ELIMINAR VENTA
export const deleteSale = async (id, successCallback, errorCallback) => {
    const options = {
      method: 'DELETE',
      url: `${backend}/ventas/${id}`,
      headers: {cabecera},
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };