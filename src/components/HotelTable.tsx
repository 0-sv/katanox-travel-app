import React, { useState } from 'react'
import Table from 'rc-table'

const deleteRow = (row: React.ReactNode) => {
  console.info(row)
}

// TD: column metadata can also come from a decent ORM,
// so we shouldn't have to initialize it manually here.
const columns = [
  {
    title: 'Hotel ID',
    dataIndex: 'id',
    key: 'id',
    width: 150,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: 250,
  },
  {
    title: 'Delete',
    dataIndex: 'delete',
    key: 'delete',
    render: (row: React.ReactNode) => (
      <button onClick={() => deleteRow(row)}></button>
    ),
  },
]

const HotelTable = (): React.ReactElement => {
  const [data] = useState(JSON.parse(localStorage.getItem('hotels') || '{}'))
  return <Table columns={columns} data={data} />
}

export default HotelTable
