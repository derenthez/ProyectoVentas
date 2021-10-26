//  import AppRouter from 'routers/AppRouter';
import RouterApp from 'routers/RouterApp';
import './App.css';
import { Auth0Provider } from "@auth0/auth0-react";

import history from "./utils/history";//no hace parte del viejo

function App() {
  return (
    // <AppRouter></AppRouter>
    <Auth0Provider
    domain="ciclo3-misiontic2022.us.auth0.com"
    clientId="H9EPzWHGPHx17ep2HtG3UseuIGDO9P4o"
    redirectUri={window.location.origin}
    //redirectUri={'http://localhost:3000/admin/ventas'}
    audience='https://ciclo3-misiontic2022.us.auth0.com/api/v2/'
    //audience="https://back-autho-proyecto-ventas.com"
    >
    <RouterApp></RouterApp>
    </Auth0Provider>
  );
}

export default App;

// import React from "react";
// import { Router, Route, Switch } from "react-router-dom";
// import { Container } from "reactstrap";
// import RouterApp from 'routers/RouterApp';
// import Loading from "./components/Loading";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer2";
// import Home from "./pages/Home";
// import Profile from "./pages/Perfil";
// // import ExternalApi from "./pages/ExternalApi";
// import { useAuth0 } from "@auth0/auth0-react";
// import history from "./utils/history";

// // styles
// import "./App.css";

// const App = () => {
//   const { isLoading, error } = useAuth0();

//   if (error) {
//     return <div>Oops... {error.message}</div>;
//   }

//   if (isLoading) {
//     return <Loading />;
//   }

//   return (
//     <Router history={history}>
//       <div id="app" className="d-flex flex-column h-100">
//         <NavBar />
//         <Container className="flex-grow-1 mt-5">
//           <Switch>
//             <Route path="/" exact component={Home} />
//             <Route path="/profile" component={Profile} />
//             {/* <Route path="/external-api" component={ExternalApi} /> */}
//           </Switch>
//         </Container>
//         {/* <Footer /> */}
//       </div>
//       <RouterApp></RouterApp>
//     </Router>
//   );
// };

// export default App;
