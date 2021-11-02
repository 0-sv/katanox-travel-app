import { DefaultRecordType } from 'rc-table/lib/interface'
import React, { Dispatch, useState } from 'react'
import './App.css'
import AutoComplete from './components/AutoComplete'
import HotelTable from './components/HotelTable'
import Statistics from './components/Statistics'

// TD: we didn't include any other components for a usual web app,
// like a nice <Nav/> or </Footer>.
const App = (): React.ReactElement => {
  const [hotels, setHotels]: [
    Array<DefaultRecordType>,
    Dispatch<Array<DefaultRecordType>>
  ] = useState(JSON.parse(localStorage.getItem('hotels') || '[]'))
  // console.log(hotels)
  const [selected, setSelected]: [any, any] = useState([
    false,
    false,
    false,
    false,
  ])
  return (
    <div className='App'>
      <h1>Available Hotels</h1>
      <AutoComplete hotels={hotels} setHotels={setHotels} />
      <HotelTable
        hotels={hotels}
        setHotels={setHotels}
        selected={selected}
        setSelected={setSelected}
      />
      <Statistics hotels={hotels} selected={selected} />
    </div>
  )
}

export default App
