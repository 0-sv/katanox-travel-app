import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Helmet } from 'react-helmet'
import { DefaultRecordType } from 'rc-table/lib/interface'
import { nanoid } from 'nanoid'
import App from './App'
import reportWebVitals from './reportWebVitals'

// TD: we should move our data into a 3-tier app (db->api->app)
// instead of initializing it inside this app.
const hotels: Array<DefaultRecordType> = [
  {
    name: 'Hilton Rotterdam',
    address: 'Weena 10 3012 CM Rotterdam',
    id: nanoid(5),
  },
  {
    name: 'Hilton Garden Inn Leiden',
    address: 'Willem Einthovenstraat 3 Oegstgeest',
    id: nanoid(5),
  },
  {
    name: 'Four Seasons Resort Dubai',
    address: '2 Jumeirah St',
    id: nanoid(5),
  },
  {
    name: 'Four Seasons Hotel Prague',
    address: 'Veleslavinova 1098 2a Prague',
    id: nanoid(5),
  },
]

localStorage.setItem('hotels', JSON.stringify(hotels))

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
