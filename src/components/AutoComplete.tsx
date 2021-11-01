import { DefaultRecordType } from 'rc-table/lib/interface'
import React, { Dispatch, useState } from 'react'

interface Props {
  hotels: Array<DefaultRecordType>
  setHotels: Dispatch<Array<DefaultRecordType>>
}

const AutoComplete = ({ hotels, setHotels }: Props): React.ReactElement => {
  const [input, setInput] = useState('')

  const handleChange = () => {
    setHotels(hotels.filter((hotel) => hotel.name.match(new RegExp(input))))
  }

  return (
    <div className='Filters'>
      <input
        type='search'
        list='autocomplete'
        pattern='[a-zA-Z ]*'
        placeholder='Hilton...'
        value={input}
        onInput={(e) => setInput((e.target as HTMLTextAreaElement).value)}
        onChange={handleChange}
      />
      <datalist id='autocomplete'>
        {hotels.map((m, i) => (
          <option key={i} value={m.name} />
        ))}
      </datalist>
    </div>
  )
}

export default AutoComplete
