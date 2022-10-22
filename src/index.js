// imr
import React from 'react'
// imrd
import ReactDOM from 'react-dom'
import App from './components/App'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'

import { Provider } from 'react-redux'

import { createStore } from 'redux'
import reducers from './reducers'

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
