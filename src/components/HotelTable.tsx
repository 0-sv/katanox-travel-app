import React, { useState } from 'react'
import Table from 'rc-table'
import { DefaultRecordType } from 'rc-table/lib/interface'

const HotelTable = (): React.ReactElement => {
  const [hotels, setHotels] = useState(
    JSON.parse(localStorage.getItem('hotels') || '{}')
  )
  return (
    // TD: column metadata can also come from a decent ORM,
    // so we shouldn't have to initialize it manually here.
    <Table
      columns={[
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
          dataIndex: '',
          key: 'd',
          render: (record: DefaultRecordType) => (
            <button
              onClick={() =>
                setHotels(
                  hotels.filter((h: DefaultRecordType) => h.id !== record.id)
                )
              }
            />
          ),
        },
      ]}
      data={hotels}
    />
  )
}

export default HotelTable
