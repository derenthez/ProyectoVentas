import 'bootstrap/dist/css/bootstrap.min.css';
import { FormSales } from 'components/FormSales';
import React, { useState, useEffect } from 'react';
import 'styles/modulo.css';

export const Sales = () => {

    const ventas = [{id:1,Cliente:'Tomas Contreras', ClienteId: 1090452106,Valor:10500,VentaId: 2001, Cantidad: 2, PrecioUnitario:5250, Date: '25/10/2015', Vendedor: 'Andres'},
    {id: 2,Cliente:'Tomas Contreras', ClienteId: 1090452106,Valor:10500,VentaId: 2001, Cantidad: 2, PrecioUnitario:5250, Date: 25/10/2015, Vendedor: 'Andres'},
    {id: 3,Cliente:'Julian Contreras', ClienteId: 1090452106,Valor:10500,VentaId: 2001, Cantidad: 2, PrecioUnitario:5250, Date: 25/10/2015, Vendedor: 'Andres'},
    {id: 4,Cliente:'Carlos Arias', ClienteId: 1090452106,Valor:10500,VentaId: 2001, Cantidad: 2, PrecioUnitario:5250, Date: 25/10/2015, Vendedor: 'Andres'},
    {id: 5,Cliente:'Nipone Nikita', ClienteId: 1090452106,Valor:10500,VentaId: 2001, Cantidad: 2, PrecioUnitario:5250, Date: 25/10/2015, Vendedor: 'Andres'},
    {id: 6,Cliente:'Tomas Contreras', ClienteId: 1090452106,Valor:10500,VentaId: 2001, Cantidad: 2, PrecioUnitario:5250, Date: 25/10/2015, Vendedor: 'Andres'},
    ];


    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textButton, setTextButton] = useState("Crear Venta");
    const [iconButton, setIconButton] = useState("fa fa-user-plus")
    const [tituloModulo, setTituloModulo] = useState("MODULO GESTION DE VENTAS")
    const [iconModulo, setIconModulo] = useState("fa fa-table")
    const [users, setSales] = useState([])

    //LISTADO VENTAS REGISTRADOS
    useEffect(() => {
        setSales(ventas)
    }, [])

    useEffect(() => {
        if (mostrarTabla) {
            setTextButton("Crear Venta");
            setIconButton("fa fa-user-plus px-1")
            setTituloModulo("MODULO GESTION DE VENTAS")
            setIconModulo("fa fa-table")
        } else {
            setTextButton("Listar Sales");
            setIconButton("fa fa-list px-2")
            setTituloModulo("NUEVA VENTA")
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
                        {mostrarTabla ? <TableSales listaSales={users} /> : <FormSales />}
                    </div>
                </div>
            </div>
        </div>
    )
}

const TableSales = ({ listaSales }) => {
    // useEffect(() => {
    //     console.log(listaSales)
    // }, [listaSales])

    // FILTRO BUSQUEDA EN TABLA
    const [searchValue, setSearchValue] = React.useState("");

    const handleChange = event => {
        setSearchValue(event.target.value);
    };

    //  FILTRAR POR Venta
    const filterNames = ({ Cliente }) => {
        return Cliente.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    };

    // MAPEO PARA AGREGAR NUMERO A CADA VENTA
    listaSales.map((users, index) => {
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
                                <th className="thTableId">id</th>
                                <th className="thTable">Cliente</th>
                                <th className="thTable">ClienteId</th>
                                <th className="thTable">ProductoId</th>
                                <th className="thTable">Cantidad</th>
                                <th className="thTable">PrecioUnitario</th>
                                <th className="thTable">Valor</th>
                                <th className="thTable">Date</th>
                                <th className="thTable">Vendedor</th>
                                <th className="thTableAcciones" colSpan="3">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaSales.filter(filterNames).map(item => (
                                <tr key={item.id}>
                                    <th scope="row">{item.inc}</th>
                                    <td>{item.Cliente}</td>
                                    <td>{item.ClienteId}</td>
                                    <td>{item.ProductId}</td>
                                    <td>{item.Cantidad}</td>
                                    <td>{item.PrecioUnitario}</td>
                                    <td >{item.Valor}</td>
                                    <td>{item.Date}</td>
                                    <td>{item.Vendedor}</td>
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