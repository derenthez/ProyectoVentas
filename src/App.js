//  import AppRouter from 'routers/AppRouter';
import RouterApp from 'routers/RouterApp';
import './App.css';
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    // <AppRouter></AppRouter>
    <Auth0Provider>
    <RouterApp></RouterApp>
    </Auth0Provider>
  );
}

export default App;
