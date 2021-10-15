import 'bootstrap/dist/css/bootstrap.min.css';
import { FormUsers } from 'components/FormUsers';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { Dialog, Tooltip } from '@material-ui/core';
import { getUsers, createUser, updateUser, deleteUser } from 'utils/api/users';
import ReactLoading from 'react-loading';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/modulo.css';

export const Users = () => {

    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [users, setUsers] = useState([])
    const [textButton, setTextButton] = useState("Crear Usuario");
    const [iconButton, setIconButton] = useState("fa fa-user-plus")
    const [tituloModulo, setTituloModulo] = useState("MODULO DE USUARIOS")
    const [iconModulo, setIconModulo] = useState("fa fa-table")
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    const [loading, setLoading] = useState(false);

    //LISTADO USUARIOS
    useEffect(() => {
      const fetchUsers = async () => {
        setLoading(true);
        await getUsers(
          (response) => {
            console.log("la respuesta que se recibio fue", response);
            setUsers(response.data);
            setEjecutarConsulta(false);
            setLoading(false);
          },
          (error) => {
            console.error("Salio un error:", error);
            setLoading(false);
          }
        );
      };
      console.log("consulta", ejecutarConsulta);
      if (ejecutarConsulta) {
        fetchUsers();
      }
    }, [ejecutarConsulta]);

    useEffect(() => {
        if (mostrarTabla) {
            setEjecutarConsulta(true);
            setTextButton("Crear Usuario");
            setIconButton("fa fa-user-plus px-1")
            setTituloModulo("MODULO DE USUARIOS")
            setIconModulo("fa fa-table")
        } else {
            setEjecutarConsulta(false);
            setTextButton("Listar Usuarios");
            setIconButton("fa fa-list px-2")
            setTituloModulo("NUEVO USUARIO")
            setIconModulo("fab fa-wpforms")
        }
    }, [mostrarTabla])

    return (
        <div className="containerModulo">
            <div class="card shadow">
                <div class="card-header">
                    <h3 class="m-0 font-weight-bold">
                        <i className={iconModulo}></i> <span className="title py-3">{tituloModulo}</span>
                    </h3>
                    <div>
                        <button type="button" className="btn btn-primary btn-block"
                            onClick={() => {
                                setMostrarTabla(!mostrarTabla);
                            }} >
                            <i className={iconButton}></i>{textButton}
                        </button>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        {
                            mostrarTabla ? (
                                <TableUsers  loading={loading} listaUsuarios={users}setEjecutarConsulta={setEjecutarConsulta}
        />
                            ) : (<FormUsers />)
                            
                        }
                        <ToastContainer position='bottom-center' autoClose={5000} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const TableUsers = ({ loading, listaUsuarios, setEjecutarConsulta }) => {
    const [busqueda, setBusqueda] = useState('');
    const [usuariosFiltrados, setUsuariosFiltrados] = useState(listaUsuarios);

    useEffect(() => {
        setUsuariosFiltrados(
          listaUsuarios.filter((elemento) => {
            return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
          })
        );
      }, [busqueda, listaUsuarios]);

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-8">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                />
                <span className="span input-group-prepend input-group-text">
                  {" "}
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="table-responsive d-none d-sm-none d-md-block">
            {
              loading ? 
              (
                <ReactLoading
                  type="bars"
                  color="#0D6EFD"
                  height={667}
                  width={375}
                />
              ) 
              : 
              (
                <table data-toggle="table" className="table table-striped table-hover "
                  data-toolbar="#toolbar"
                  data-filter-control="true"
                  data-filter-control-container="#filter"
                >
                  <thead className="tableStyle">
                    <tr>
                      <th className="thTableId">#</th>
                      <th className="thTable" style={{"width":"50%"}}>Usuario</th>
                      <th className="thTable">Rol</th>
                      <th className="thTable">Estado</th>
                      <th className="thTableAcciones">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usuariosFiltrados.map((usuario) => {
                      return (
                        <FilaUsuario
                          key={nanoid()}
                          usuario={usuario}
                          setEjecutarConsulta={setEjecutarConsulta}
                        />
                      );
                    })}
                  </tbody>
                </table>
              )
            }
          </div>
            {usuariosFiltrados.map((el) => {
              return (
                <div className="card d-block d-sm-block d-md-none">
                  <img
                    className="card-img-top"
                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17c80916396%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17c80916396%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    alt={el.usuario} style={{"height" : "100px"}}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{el.usuario} </h5>
                    <p className="card-text">
                      <span>{el.rol} </span>
                      <br />
                      <span>{el.estado} </span>
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </>
    );
}

const FilaUsuario = ({ usuario, setEjecutarConsulta }) => {
    const [edit, setEdit] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [infoNuevoUsuario, setInfoNuevoUsuario] = useState({
      _id: usuario._id,
      usuario: usuario.usuario,
      rol: usuario.rol,
      estado: usuario.estado,
    });
  
    const actualizarUsuario = async () => {
      //enviar la info al backend
  
      await updateUser(
        usuario._id,
        {
          usuario: infoNuevoUsuario.usuario,
          rol: infoNuevoUsuario.rol,
          estado: infoNuevoUsuario.estado,
        },
        (response) => {
          console.log(response.data);
          toast.success('Usuario modificado con éxito');
          setEdit(false);
          setEjecutarConsulta(true);
        },
        (error) => {
          toast.error('Error modificando el usuario');
          console.error(error);
        }
      );
    };
  
    const eliminarUsuario = async () => {
      await deleteUser(
        usuario._id,
        (response) => {
          console.log(response.data);
          toast.success('usuario eliminado con éxito');
          setEjecutarConsulta(true);
        },
        (error) => {
          console.error(error);
          toast.error('Error eliminando el usuario');
        }
      );
  
      setOpenDialog(false);
    };
  
    return (
      <tr>
        {edit ? (
          <>
            <td>{infoNuevoUsuario._id}</td>
            <td>
              <input
                className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                type='text'
                value={infoNuevoUsuario.usuario}
                onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, usuario: e.target.value })}
              />
            </td>
            <td>
              <input
                className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                type='text'
                value={infoNuevoUsuario.rol}
                onChange={(e) =>
                  setInfoNuevoUsuario({ ...infoNuevoUsuario, rol: e.target.value })
                }
               required/>
               <select hidden>
                  <option value="">Seleccione opción</option>
                  <option value="Disponible">Disponible</option>
                  <option value="No disponible">No disponible</option>
                </select>
            </td>
            <td>
              <input
                className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                type='text'
                value={infoNuevoUsuario.estado}
                onChange={(e) =>
                  setInfoNuevoUsuario({ ...infoNuevoUsuario, estado: e.target.value })
                }
              />
            </td>
          </>
        ) : (
          <>
            <td>{usuario._id.slice(20)}</td>
            <td>{usuario.usuario}</td>
            <td>{usuario.rol}</td>
            <td>{usuario.estado}</td>
          </>
        )}
        <td>
          <div className='justify-around'>
            {edit ? (
              <>
                <Tooltip title='Confirmar Edición' arrow>
                  <i
                    onClick={() => actualizarUsuario()}
                    className='fas fa-check bg-success'
                  />
                </Tooltip>
                <Tooltip title='Cancelar edición' arrow>
                  <i
                    onClick={() => setEdit(!edit)}
                    className='fas fa-ban bg-warning'
                  />
                </Tooltip>
              </>
            ) : (
              <>
                <Tooltip title='Editar Usuario' arrow>
                  <i
                    onClick={() => setEdit(!edit)}
                    className='fas fa-pencil-alt bg-warning'
                  />
                </Tooltip>
                <Tooltip title='Eliminar Usuario' arrow>
                  <i
                    onClick={() => setOpenDialog(true)}
                    className='fas fa-trash bg-danger'
                  />
                </Tooltip>
              </>
            )}
          </div>
          <Dialog open={openDialog}>
            <div>
              <h1 className='text-gray font-bold'>
                ¿Está seguro de querer eliminar el usuario?
              </h1>
              <div className='justify-center my-4'>
                <button
                  onClick={() => eliminarUsuario()}
                  className='mx-2 px-4 py-2 btn btn-success text-white rounded-md shadow-md'
                >
                  Sí
                </button>
                <button
                  onClick={() => setOpenDialog(false)}
                  className='mx-2 px-4 py-2 btn btn-danger text-white rounded-md shadow-md'
                >
                  No
                </button>
              </div>
            </div>
          </Dialog>
        </td>
      </tr>
    );
  };
  