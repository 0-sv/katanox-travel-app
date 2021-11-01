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

  console.log(matches)
  console.log(input)
  console.log(hotels.map((h: DefaultRecordType) => h.name))

  return (
    <div className='Filters'>
      <input
        type='search'
        list='autocomplete'
        pattern='[a-zA-Z ]*'
        placeholder='hilton...'
        autoComplete='organization'
        value={input}
        onInput={(e) => setInput((e.target as HTMLTextAreaElement).value)}
      />
      <datalist id='autocomplete' />
    </div>
  )
}

export default AutoComplete
