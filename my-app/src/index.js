import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import { Provider } from 'react-redux';
import {store} from "./Redux/Store"
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate  } from 'redux-persist/integration/react'
// import { persistor } from './FakePracticePro/Redux/Store'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <Provider store={store}>
        <BrowserRouter> 
                <App />
            </BrowserRouter>
    </Provider>


);

