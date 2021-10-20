import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config({ path: '../../../.env' });

const backend = process.env.BACK_URL || "http://localhost:5000";

//console.log(backend);

//TRAER TODAS LAS VENTAS
export const getSales = async (successCallback, errorCallback) => {
    const options = { method: 'GET', url: `${backend}/ventas` };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

//CREAR NUEVA VENTA
export const createSale = async (data, successCallback, errorCallback) => {
    const options = { 
      method: 'POST',
      url: `${backend}/ventas/`,
      headers: { 'Content-Type': 'application/json' },
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

//EDITAR VENTA
export const updateSale = async (id, data, successCallback, errorCallback) => {
    const options = {
      method: 'PATCH',
      url: `${backend}/ventas/${id}/`,
      headers: { 'Content-Type': 'application/json' },
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

//ELIMINAR VENTA
export const deleteSale = async (id, successCallback, errorCallback) => {
    const options = {
      method: 'DELETE',
      url: `${backend}/ventas/${id}`,
      headers: { 'Content-Type': 'application/json' },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };