import React from 'react'
import Table from 'rc-table'
import { DefaultRecordType } from 'rc-table/lib/interface'

interface Props {
  rows: Array<DefaultRecordType>
}

const deleteRow = (
  row:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
) => {
  console.info(row)
}

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
    title: ' ',
    dataIndex: 'delete',
    key: 'delete',
    render: (row: React.ReactNode) => (
      <button onClick={() => deleteRow(row)}>x</button>
    ),
  },
]

const HotelTable = ({ rows }: Props): React.ReactElement => (
  <Table columns={columns} data={rows} />
)

export default HotelTable
