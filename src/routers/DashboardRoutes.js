import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Users } from 'pages/Users';
import { Sales } from 'pages/Sales';
import {Products} from 'pages/Productos'
import { Footer } from 'components/Footer'
import {Layout} from 'layouts/Layout';

export const DashboardRoutes = () => {
    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route exact path="/inicio" component={ Home }/>
                    <Route exact path="/usuarios" component={ Users }/>
                    <Route exact path="/ventas" component={ Sales }/>
                    <Route exact path="/productos" component={ Products }/>


                    <Redirect to="/inicio"/>
                </Switch>
                <Footer/>
            </Layout>
        </div>     
    )
}