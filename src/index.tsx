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
    nameFilter: true,
  },
  {
    name: 'Hilton Garden Inn Leiden',
    address: 'Willem Einthovenstraat 3 Oegstgeest',
    id: nanoid(5),
    nameFilter: true,
  },
  {
    name: 'Four Seasons Resort Dubai',
    address: '2 Jumeirah St',
    id: nanoid(5),
    nameFilter: true,
  },
  {
    name: 'Four Seasons Hotel Prague',
    address: 'Veleslavinova 1098 2a Prague',
    id: nanoid(5),
    nameFilter: true,
  },
  {
    name: 'Best Western Greenfield Inn',
    address: '3000 Enterprise Drive, Allen Park',
    id: nanoid(5),
    nameFilter: true,
  },
  {
    name: 'Best Western Athens Inn',
    address: '1329 Us Highway 72 E, Athens',
    id: nanoid(5),
    nameFilter: true,
  },
  {
    name: 'Best Western Gold Canyon Inn & Suites',
    address: '8333 E Sunrise Sky Drive, Gold Canyon',
    id: nanoid(5),
    nameFilter: true,
  },
  {
    name: 'Best Western Heritage Inn',
    address: '	4600 Clayton Road, Concord',
    id: nanoid(5),
    nameFilter: true,
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
