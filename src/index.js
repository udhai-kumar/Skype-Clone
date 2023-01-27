import React from 'react';
import ReactDOM from "react-dom/client";
import { HMSRoomProvider } from '@100mslive/react-sdk';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
        
        <HMSRoomProvider>
            <App />
        </HMSRoomProvider>

    </BrowserRouter>


     </React.StrictMode>
);
