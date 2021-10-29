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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
