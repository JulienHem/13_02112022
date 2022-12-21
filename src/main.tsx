import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {Provider, useStore} from "react-redux";
import {store} from "./redux";
import {saveState} from "./helpers/localStorageHelpers";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
let persistor = persistStore(store);

root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </PersistGate>

    </Provider>
)