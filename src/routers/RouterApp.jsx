import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React from 'react'
import Login from 'pages/Login';
// import Admin from 'pages/admin/Admin';
import Home from 'pages/Home';
import { PublicLayout } from 'layouts/PublicLayout';
import AuthLayout from 'layouts/AuthLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import { Users } from 'pages/Users';
import { Products } from 'pages/Products';
import { Footer } from 'components/Footer';
import { Sales } from 'pages/Sales';
import { Sellers } from 'pages/Sellers';

const RouterApp = () => {
    return (
        <Router>
            <Switch>
                {/* RUTAS PRIVADAS ADMIN */}
                <Route path={['/admin/usuarios','/admin/ventas', '/admin/productos', '/admin/vendedores']}>
                    <PrivateLayout>
                        <Switch>
                            <Route path='/admin/usuarios'>
                                <Users/>
                            </Route>
                            <Route path='/admin/ventas'>
                                <Sales/>
                            </Route>
                            <Route path='/admin/productos'>
                                <Products/>
                            </Route>
                            <Route path='/admin/vendedores'>
                                <Sellers/>
                            </Route>
                        </Switch>
                    </PrivateLayout>
                </Route>
                {/* RUTAS DE AUTENTICACION (LOGIN-REGISTRO) */}
                <Route path={['/login']}>
                    <AuthLayout>
                        <Switch>
                            <Route path='/login'>
                                <Login/>
                            </Route>
                        </Switch>
                    </AuthLayout>
                </Route>
                {/* RUTAS PUBLICAS HOME */}
                <Route path={['/']}>
                    <PublicLayout>
                        <Switch>
                            <Route exact path='/'>
                                <Home/>
                            </Route>
                        </Switch>
                        <Footer></Footer>
                    </PublicLayout>
                </Route>
            </Switch>
        </Router>
    )
}

export default RouterApp;
