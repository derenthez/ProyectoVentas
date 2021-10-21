import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config({ path: '../../../.env' });

const backend = process.env.BACK_URL || "http://localhost:5000";

console.log(backend);

//TRAER TODOS LOS PRODUCTOS
export const getProducts = async (successCallback, errorCallback) => {
    const options = { method: 'GET', url: `${backend}/productos/` };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };
 
//EXTRAER DATO POR ID
export const getProductByID = async (id, successCallback, errorCallback) => {
  const options = { method: 'GET', url: `${backend}/productos/${id}` };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//CREAR UN NUEVO PRODUCTO
export const createProduct = async (data, successCallback, errorCallback) => {
    const options = {
      method: 'POST',
      url: `${backend}/productos/`,
      headers: { 'Content-Type': 'application/json' },
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

//EDITAR PRODUCTO
export const updateProduct = async (id, data, successCallback, errorCallback) => {
    const options = {
      method: 'PATCH',
      url: `${backend}/productos/${id}/`,
      headers: { 'Content-Type': 'application/json' },
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

//ELIMINAR PRODUCTO
export const deleteProduct = async (id, successCallback, errorCallback) => {
    const options = {
      method: 'DELETE',
      url: `${backend}/productos/${id}/`,
      headers: { 'Content-Type': 'application/json' },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };