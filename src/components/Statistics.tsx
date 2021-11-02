import React, { useState } from 'react'
import { DefaultRecordType } from 'rc-table/lib/interface'

interface Props {
  hotels: Array<DefaultRecordType>
  selected: Array<DefaultRecordType>
}

const Statistics = ({ hotels, selected }: Props): React.ReactElement => {
  const [labelText, setLabelText] = useState('')
  return (
    <div className='statistics'>
      <button
        onClick={() =>
          setLabelText(
            JSON.stringify(hotels.filter((hotel, idx) => selected[idx]))
          )
        }>
        Show statistics!
      </button>
      <p>{labelText}</p>
    </div>
  )
}

export default Statistics
