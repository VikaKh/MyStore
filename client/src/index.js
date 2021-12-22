import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";
import { Auth0Provider } from "@auth0/auth0-react";

export const Context = createContext(null)

ReactDOM.render(

    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore(),
    }}>
        <Auth0Provider
            domain="dev-r3x70wdq.us.auth0.com"
            clientId="EkZAdjQjrtld2pMDak2cNVLlnmPJPgkJ"
            redirectUri={window.location.origin}
        >
            <App />
        </Auth0Provider>
    </Context.Provider>,
  document.getElementById('root')
);

