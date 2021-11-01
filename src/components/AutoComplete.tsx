import { DefaultRecordType } from 'rc-table/lib/interface'
import React, { Dispatch, useState } from 'react'

interface Props {
  hotels: Array<DefaultRecordType>
  setHotels: Dispatch<Array<DefaultRecordType>>
}

const AutoComplete = ({ hotels }: Props): React.ReactElement => {
  const [input, setInput] = useState('')
  const matches = hotels
    .map((h: DefaultRecordType) => h.name)
    .filter((h) => h.match(new RegExp(input)))

  // const showHotels = hotels.map((m) => ({
  //   ...m,
  //   nameFilter: matches.includes(m.name),
  // }))

  // setHotels(showHotels)

  // localStorage.setItem('hotels', JSON.stringify(showHotels))

  return (
    <div className='Filters'>
      <input
        type='search'
        list='autocomplete'
        pattern='[a-zA-Z ]*'
        placeholder='Hilton...'
        value={input}
        onInput={(e) => setInput((e.target as HTMLTextAreaElement).value)}
      />
      <datalist id='autocomplete'>
        {matches.map((m, i) => (
          <option key={i} value={m} />
        ))}
      </datalist>
    </div>
  )
}

export default AutoComplete
