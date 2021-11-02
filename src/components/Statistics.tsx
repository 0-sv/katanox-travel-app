import React, { useState } from 'react'
import { DefaultRecordType } from 'rc-table/lib/interface'

interface Props {
  hotels: Array<DefaultRecordType>
  selected: Array<DefaultRecordType>
}

const Statistics = ({ hotels, selected }: Props): React.ReactElement => {
  console.log(hotels)
  console.log(selected)
  const [labelText, setLabelText] = useState('')
  return (
    <div className='statistics'>
      <button onClick={() => setLabelText(JSON.stringify(selected))}>
        Show statistics!
      </button>
      <p>{labelText} </p>
    </div>
  )
}

export default Statistics
