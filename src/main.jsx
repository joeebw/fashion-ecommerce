import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Elements } from '@stripe/react-stripe-js'
import {persistor} from './store/store'
import { store } from './store/store'
import { stripePromise } from './utils/stripe/stripe'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
