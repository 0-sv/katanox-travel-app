import React from 'react'
import './App.css'
import AutoComplete from './components/AutoComplete'
import HotelTable from './components/HotelTable'

// TD: we didn't include any other components for a usual web app,
// like a nice <Nav/> or </Footer>.
const App = (): React.ReactElement => (
  <div className='App'>
    <AutoComplete />
    <HotelTable />
  </div>
)

export default App
