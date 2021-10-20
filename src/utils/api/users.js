import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config({ path: '../../../.env' });

const backend = process.env.BACK_URL || "http://localhost:5000";

//TRAER TODOS LOS USUARIOS
export const getUsers = async (successCallback, errorCallback) => {
    const options = { method: 'GET', url: `${backend}/usuarios` };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

//CREAR UN NUEVO USUARIO
export const createUser = async (data, successCallback, errorCallback) => {
    const options = {
      method: 'POST',
      url: `${backend}/usuarios/`,
      headers: { 'Content-Type': 'application/json' },
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

//EDITAR USUARIO
export const updateUser = async (id, data, successCallback, errorCallback) => {
    const options = {
      method: 'PATCH',
      url: `${backend}/usuarios/${id}/`,
      headers: { 'Content-Type': 'application/json' },
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

//ELIMINAR USUARIO
export const deleteUser = async (id, successCallback, errorCallback) => {
    const options = {
      method: 'DELETE',
      url: `${backend}/usuarios/${id}/`,
      headers: { 'Content-Type': 'application/json' },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };