import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Helmet } from 'react-helmet'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <link
        rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/water.css@2/out/water.css'
      />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
