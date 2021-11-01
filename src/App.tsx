import { DefaultRecordType } from 'rc-table/lib/interface'
import React, { Dispatch, useState } from 'react'
import './App.css'
import AutoComplete from './components/AutoComplete'
import HotelTable from './components/HotelTable'

// TD: we didn't include any other components for a usual web app,
// like a nice <Nav/> or </Footer>.
const App = (): React.ReactElement => {
  const [hotels, setHotels]: [
    Array<DefaultRecordType>,
    Dispatch<Array<DefaultRecordType>>
  ] = useState(JSON.parse(localStorage.getItem('hotels') || '{}'))
  console.log(hotels)
  return (
    <div className='App'>
      <h1>Available Hotels</h1>
      <AutoComplete hotels={hotels} setHotels={setHotels} />
      <HotelTable hotels={hotels} setHotels={setHotels} />
    </div>
  )
}

export default App
