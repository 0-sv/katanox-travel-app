import { DefaultRecordType } from 'rc-table/lib/interface'
import React, { Dispatch, SetStateAction, useState } from 'react'
import './App.css'
import AutoComplete from './components/AutoComplete'
import HotelTable from './components/HotelTable'
import Statistics from './components/Statistics'

const App = (): React.ReactElement => {
  const [hotels, setHotels]: [
    Array<DefaultRecordType>,
    Dispatch<SetStateAction<Array<DefaultRecordType>>>
  ] = useState(JSON.parse(localStorage.getItem('hotels') || '[]'))
  const [selected, setSelected]: [
    Array<Boolean>,
    Dispatch<SetStateAction<Array<Boolean>>>
  ] = useState<Boolean[]>([])
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
