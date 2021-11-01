import { DefaultRecordType } from 'rc-table/lib/interface'
import React, { Dispatch, useState } from 'react'

const AutoComplete = (): React.ReactElement => {
  const [input, setInput] = useState('')
  // const [options, setOptions] = useState([])
  const [hotels]: [
    Array<DefaultRecordType>,
    Dispatch<Array<DefaultRecordType>>
  ] = useState(JSON.parse(localStorage.getItem('hotels') || '{}'))

  const matches = hotels
    .map((h: DefaultRecordType) => h.name)
    .filter((h) => h.match(new RegExp(input)))

  // Loop through hotels
  // if name is included in matches
  //    then .nameFilter = true
  const showHotels = hotels.map((m) => ({
    ...m,
    nameFilter: matches.includes(m.name),
  }))

  console.log(showHotels)

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
