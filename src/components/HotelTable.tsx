import React from 'react'
import Table from 'rc-table'
import { DefaultRecordType } from 'rc-table/lib/interface'

interface Props {
  rows: Array<DefaultRecordType>
}

const columns = [
  {
    title: 'Hotel ID',
    dataIndex: 'hotelId',
    key: 'hotelId',
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
  // {
  //   title: 'Operations',
  //   dataIndex: 'operations',
  //   key: 'operations',
  // render: () => <button onClick={foo}>x</button>,
  // },
]

const HotelTable = ({ rows }: Props): React.ReactElement => (
  <Table columns={columns} data={rows} />
)

export default HotelTable
