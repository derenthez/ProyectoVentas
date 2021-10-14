import 'bootstrap/dist/css/bootstrap.min.css';
import { FormProducts } from 'components/FormProducts';
import React, { useState, useEffect } from 'react';
import 'styles/modulo.css';

export const Products = () => {

    const Productos = [
        { id: 1, Producto: 'Joger AlxKing', Categoria: 'Prendas inferiores', Medida: 'Unidad', Precio: 35000, Impuesto: 19, Estado: "Activo" },
        { id: 2, Producto: 'Pat Boxer AlxKing x 3', Categoria: 'Prendas intimas', Medida: 'Paquete', Precio: 32800, Impuesto: 19, Estado: "Activo" },
        { id: 3, Producto: 'Falda Matilda Quart', Categoria: 'Prendas inferiores', Medida: 'Unidad', Precio: 32800, Impuesto: 19, Estado: "Activo" },
        { id: 4, Producto: 'Jean Albert', Categoria: 'Prendas inferiores', Medida: 'Unidad', Precio: 56000, Impuesto: 19, Estado: "Activo" },
        { id: 5, Producto: 'Brasier Invi', Categoria: 'Prendas intimas', Medida: 'Unidad', Precio: 14000, Impuesto: 19, Estado: "Activo" },
        { id: 6, Producto: 'Panty tentación', Categoria: 'Prendas inferiores', Medida: 'Unidad', Precio: 14500, Impuesto: 19, Estado: "Activo" },
    ];

    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textButton, setTextButton] = useState("Crear Producto");
    const [iconButton, setIconButton] = useState("fa fa-user-plus")
    const [tituloModulo, setTituloModulo] = useState("MODULO GESTION DE PRODUCTOS")
    const [iconModulo, setIconModulo] = useState("fa fa-table")
    const [users, setProducts] = useState([])

    //LISTADO PRODUCTOS REGISTRADOS
    useEffect(() => {
        setProducts(Productos)
    }, [])

    useEffect(() => {
        if (mostrarTabla) {
            setTextButton("Crear Producto");
            setIconButton("fa fa-user-plus px-1")
            setTituloModulo("MODULO GESTION DE PRODUCTOS")
            setIconModulo("fa fa-table")
        } else {
            setTextButton("Listar Productos");
            setIconButton("fa fa-list px-2")
            setTituloModulo("NUEVO PRODUCTO")
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
                        {mostrarTabla ? <TableUsers listaProductos={users} /> : <FormProducts />}
                    </div>
                </div>
            </div>
        </div>
    )
}

const TableUsers = ({ listaProductos }) => {
    // useEffect(() => {
    //     console.log(listaProductos)
    // }, [listaProductos])

    // FILTRO BUSQUEDA EN TABLA
    const [searchValue, setSearchValue] = React.useState("");

    const handleChange = event => {
        setSearchValue(event.target.value);
    };

    //  FILTRAR POR Producto
    const filterNames = ({ Producto }) => {
        return Producto.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    };

    // MAPEO PARA AGREGAR NUMERO A CADA Producto
    listaProductos.map((users, index) => {
        return users.inc = index + 1;
    });
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                    </div>
                    <div className="col-8">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Buscar" value={searchValue} onChange={handleChange} />
                            <span className="span input-group-prepend input-group-text"> <i className="fa fa-search"></i></span>
                        </div>
                    </div>
                </div>
                <div className="table-responsive">
                    <table data-toggle="table" className="table table-striped table-hover "
                        data-toolbar="#toolbar"
                        data-filter-control="true"
                        data-filter-control-container="#filter">
                        <thead className="tableStyle">
                            <tr>
                                <th className="thTableId">#</th>
                                <th className="thTable">Producto</th>
                                <th className="thTable">Categoría</th>
                                <th className="thTable">Medida</th>
                                <th className="thTable">Precio</th>
                                <th className="thTable">Impuesto</th>
                                <th className="thTable">Estado</th>
                                <th className="thTableAcciones" colSpan="3">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaProductos.filter(filterNames).map(item => (
                                <tr key={item.id}>
                                    <th scope="row">{item.inc}</th>
                                    <td >{item.Producto}</td>
                                    <td>{item.Categoria}</td>
                                    <td>{item.Medida}</td>
                                    <td>{item.Precio}</td>
                                    <td>{item.Impuesto}%</td>
                                    <td>{item.Estado}</td>
                                    <td>
                                        <button type="button" className="btn buttonTable">
                                            <i className="fa fa-eye"></i>
                                        </button>
                                    </td>
                                    <td>
                                        <button type="button" className="btn buttonTable">
                                            <i className="fas fa-pencil-alt"></i>
                                        </button>
                                    </td>
                                    <td>
                                        <button type="button" className="btn buttonTableTrash">
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div class="row">
                    <div class="col-sm-12 col-md-5">
                        <div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">
                            Mostrando 1 a 10 de 57 registros
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-7">
                        <div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
                            <ul class="pagination">
                                <li class="paginate_button page-item previous disabled" id="dataTable_previous">
                                    <a href="#" aria-controls="dataTable" data-dt-idx="0" tabindex="0" class="page-link"> Anterior</a>
                                </li>
                                <li class="paginate_button page-item active">
                                    <a href="#" aria-controls="dataTable" data-dt-idx="1" tabindex="0" class="page-link">1</a>
                                </li>
                                <li class="paginate_button page-item">
                                    <a href="#" aria-controls="dataTable" data-dt-idx="2" tabindex="0" class="page-link">2</a>
                                </li>
                                <li class="paginate_button page-item">
                                    <a href="#" aria-controls="dataTable" data-dt-idx="3" tabindex="0" class="page-link">3</a>
                                </li>
                                <li class="paginate_button page-item">
                                    <a href="#" aria-controls="dataTable" data-dt-idx="4" tabindex="0" class="page-link">4</a>
                                </li>
                                <li class="paginate_button page-item">
                                    <a href="#" aria-controls="dataTable" data-dt-idx="5" tabindex="0" class="page-link">5</a>
                                </li>
                                <li class="paginate_button page-item">
                                    <a href="#" aria-controls="dataTable" data-dt-idx="6" tabindex="0" class="page-link">6</a>
                                </li>
                                <li class="paginate_button page-item next" id="dataTable_next">
                                    <a href="#" aria-controls="dataTable" data-dt-idx="7" tabindex="0" class="page-link">Siguiente</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}