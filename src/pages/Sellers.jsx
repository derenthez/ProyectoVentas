import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { Dialog, Tooltip } from '@material-ui/core';
import { getSellers, createSeller, updateSeller, deleteSeller } from 'utils/api/sellers';
import ReactLoading from 'react-loading';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/modulo.css';

//VISTA
export const Sellers = () => {

  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [usuarios, setUsuarios] = useState([])
  const [textButton, setTextButton] = useState("Crear Vendedor");
  const [iconButton, setIconButton] = useState("fa fa-user-plus")
  const [tituloModulo, setTituloModulo] = useState("MODULO DE USUARIOS")
  const [iconModulo, setIconModulo] = useState("fa fa-table")
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  const [loading, setLoading] = useState(false);

  //LISTADO USUARIOS
  useEffect(() => {
    const fetchUsuarios = async () => {
      setLoading(true);
      await getSellers(
        (response) => {
          console.log("Respuesta: ", response);
          setUsuarios(response.data);
          setEjecutarConsulta(false);
          setLoading(false);
        },
        (error) => {
          console.error("Error: ", error);
          setLoading(false);
        }
      );
    };
    console.log("consulta", ejecutarConsulta);
    if (ejecutarConsulta) {
      fetchUsuarios();
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
      setTextButton("Listar Vendedores");
      setIconButton("fa fa-list px-2")
      setTituloModulo("NUEVO VENDEDOR")
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
                <TablaUsuarios loading={loading} listaUsuarios={usuarios} setEjecutarConsulta={setEjecutarConsulta}
                />
              ) : (<FormularioCreacionUsuarios
                setMostrarTabla={setMostrarTabla}
                listaUsuarios={usuarios}
                setUsuarios={setUsuarios}
              />)

            }
            <ToastContainer position='bottom-center' autoClose={5000} />
          </div>
        </div>
      </div>
    </div>
  )
}

//TABLA USUARIOS
const TablaUsuarios = ({ loading, listaUsuarios, setEjecutarConsulta }) => {
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
    <div className='container'>
      {/* Zona de Titulos y busqueda */}
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
      {/* Zona lista pantallas grandes */}
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
                    <th className="thTable" style={{ "width": "50%" }}>Nombre</th>
                    <th className="thTable">Especialidad</th>
                    <th className="thTable">Celular</th>
                    <th hidden className="thTable">Ingreso</th>
                    <th colspan="3" className="">Acciones</th>
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
      {/* Zona lista movil */}
      {usuariosFiltrados.map((el) => {
        return (
          <div className="card d-block d-sm-block d-md-none">
            <img
              className="card-img-top"
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17c80916396%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17c80916396%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              alt={el.nombre} style={{ "height": "100px" }}
            />
            <div className="card-body">
              <h5 className="card-title">{el.nombre} </h5>
              <p className="card-text">
                <span>{el.especialidad} </span>
                <br />
                <span>{el.celular} </span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

//FILA USUARIOS
const FilaUsuario = ({ usuario, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [infoNuevoUsuario, setInfoNuevoUsuario] = useState({
    _id: usuario._id,
    nombre: usuario.nombre,
    especialidad: usuario.especialidad,
    celular: usuario.celular,
    fecha_ingreso: usuario.fecha_ingreso,
  });

  const actualizarUsuario = async () => {
    //enviar la info al backend

    await updateSeller(
      usuario._id,
      {
        nombre: infoNuevoUsuario.nombre,
        especialidad: infoNuevoUsuario.especialidad,
        celular: infoNuevoUsuario.celular,
        fecha_ingreso:infoNuevoUsuario.fecha_ingreso,
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
    await deleteSeller(
      usuario._id,
      (response) => {
        console.log(response.data);
        toast.success('Usuario eliminado con éxito');
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
              value={infoNuevoUsuario.nombre}
              onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, nombre: e.target.value })}
            />
          </td>
          <td>
            <select class="form-control rounded-lg m-2" name="especialidad" value={infoNuevoUsuario.especialidad}
              onChange={(e) =>
                setInfoNuevoUsuario({ ...infoNuevoUsuario, especialidad: e.target.value })
              }>
              <option value="">-- Seleccione una opción --</option>
              <option>Sin categoría</option>
              <option>Categoría 1</option>
              <option>Categoría 2</option>
              <option>Categoría 3</option>
              <option>Categoría n</option>
            </select>
          </td>
          <td>
            <input
              className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
              type='text'
              value={infoNuevoUsuario.celular}
              onChange={(e) =>
                setInfoNuevoUsuario({ ...infoNuevoUsuario, celular: e.target.value })
              }
            />
            <select hidden>
              <option value="">Seleccione opción</option>
              <option value="Disponible">Disponible</option>
              <option value="No disponible">No disponible</option>
            </select>
          </td>
        </>
      ) : (
        <>
          <td>{usuario._id.slice(20)}</td>
          <td>{usuario.nombre}</td>
          <td>{usuario.especialidad}</td>
          <td>{usuario.celular}</td>
          <td hidden>{usuario.fecha_ingreso}</td>
        </>
      )}
      <td>
        <div className='justify-around'>
          {edit ? (
            <>
              <button type="button" className="btn btn-success buttonTable" title="Confirmar Edición"  onClick={() => actualizarUsuario()}>
                <i className="fas fa-check "></i>
              </button>
              <button type="button" className="btn btn-danger buttonTable" title='Cancelar edición' onClick={() => setEdit(!edit)}>
                <i className="fas fa-ban"></i>
              </button>
            </>
          ) : (
            <>
                <button type="button" onClick={() => setOpenDialog(true)} className="btn btn-danger buttonTableTrash">
                  <i className="fas fa-trash-alt"></i>
                </button>
                <button type="button" className="btn btn-primary buttonTable" title='Editar Usuario' onClick={() => setEdit(!edit)}>
                  <i className="fas fa-pencil-alt"></i>
                </button>
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

//FORMULARIO
const FormularioCreacionUsuarios = ({ setMostrarTabla, listaUsuarios, setUsuarios }) => {
  const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoUsuario = {};
    fd.forEach((value, key) => {
      nuevoUsuario[key] = value;
    });

    await createSeller(
      {
        nombre: nuevoUsuario.nombre,
        especialidad: nuevoUsuario.especialidad,
        celular: nuevoUsuario.celular,
        fecha_ingreso:nuevoUsuario.fecha_ingreso,
      },
      (response) => {
        console.log(response.data);
        toast.success('Usuario agregado con éxito');
      },
      (error) => {
        console.error(error);
        toast.error('Error creando usuario');
      }
    );

    setMostrarTabla(true);
  };

  return (
      <form ref={form} onSubmit={submitForm} className='row g-3'>
        <div className="col-md-7">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input name='nombre' type="text" className="form-control" placeholder="Nombre" required />
        </div>
        <div className="col-md-5">
          <label htmlFor="especialidad" className="form-label">Especialidad</label>
          <select class="form-control" name="especialidad" required>
            <option value="">-- Seleccione una opción --</option>
            <option>Sin categoría</option>
            <option>Categoría 1</option>
            <option>Categoría 2</option>
            <option>Categoría 3</option>
            <option>Categoría n</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="celular" className="form-label">Teléfono celular</label>
          <input name="celular" id="celular" type="text" className="form-control" required />
        </div>
        <div className="col-md-6">
          <label htmlFor="fecha_ingreso" className="form-label">Teléfono celular</label>
          <input name="fecha_ingreso" type="date" className="form-control" required />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Guardar</button>
        </div>
      </form>
  );
};