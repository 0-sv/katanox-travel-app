import React from 'react'
import './App.css'
import { nanoid } from 'nanoid'
import HotelTable from './components/HotelTable'

const App = (): React.ReactElement => {
  localStorage.setItem(
    'hotels',
    JSON.stringify([
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
    ])
  )
  return (
    <div className='App'>
      <HotelTable rows={JSON.parse(localStorage.getItem('hotels') || '{}')} />
    </div>
  )
}

export default App
