import { DefaultRecordType } from 'rc-table/lib/interface'
import React, { Dispatch } from 'react'

interface Props {
  hotels: Array<DefaultRecordType>
  setHotels: Dispatch<Array<DefaultRecordType>>
}

const AutoComplete = ({ hotels, setHotels }: Props): React.ReactElement => (
  <div className='Filters'>
    <input
      type='search'
      list='autocomplete'
      pattern='[a-zA-Z ]*'
      placeholder='Hilton...'
      onInput={(e) =>
        setHotels(
          hotels.map((hotel) => ({
            ...hotel,
            nameFilter: new RegExp(
              (e.target as HTMLTextAreaElement).value
            ).test(hotel.name),
          }))
        )
      }
    />
    <datalist id='autocomplete'>
      {hotels.map((m, i) => (
        <option key={i} value={m.name} />
      ))}
    </datalist>
  </div>
)

export default AutoComplete
