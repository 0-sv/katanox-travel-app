import React from 'react'
import './App.css'
import HotelTable from './components/HotelTable'

const App = (): React.ReactElement => (
  <div className='App'>
    <HotelTable rows={JSON.parse(localStorage.getItem('hotels') || '{}')} />
  </div>
)

export default App
