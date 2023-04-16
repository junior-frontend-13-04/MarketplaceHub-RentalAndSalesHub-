import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "src/bll/Redux/store";
import App from "src/app/App";


// index.tsx
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.ts').then(function(registration) {
            console.log('Service worker registered with scope: ', registration.scope);
        }, function(err) {
            console.log('Service worker registration failed: ', err);
        });
    });
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);


