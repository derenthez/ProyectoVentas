//  import AppRouter from 'routers/AppRouter';
import RouterApp from 'routers/RouterApp';
import './App.css';
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    // <AppRouter></AppRouter>
    <Auth0Provider
    domain="ciclo3-misiontic2022.us.auth0.com"
    clientId="H9EPzWHGPHx17ep2HtG3UseuIGDO9P4o"
    // redirectUri={window.location.origin}
    redirectUri={'http://localhost:3000/admin/ventas'}
    >
    <RouterApp></RouterApp>
    </Auth0Provider>
  );
}

export default App;
