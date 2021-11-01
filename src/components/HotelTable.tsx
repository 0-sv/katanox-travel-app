import React, { Dispatch } from 'react'
import Table from 'rc-table'
import { DefaultRecordType } from 'rc-table/lib/interface'

interface Props {
  hotels: Array<DefaultRecordType>
  setHotels: Dispatch<Array<DefaultRecordType>>
}

const HotelTable = ({ hotels, setHotels }: Props): React.ReactElement => (
  <Table
    // TD: column metadata can also come from a decent ORM,
    // so we shouldn't have to initialize it manually here.
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
        onCell: (record) => ({
          onClick() {
            if (
              hotels.map((hotel) => hotel.nameFilter).filter(Boolean).length ===
              1
            )
              console.log(`${record.name}`)
          },
        }),
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
        key: 'delete',
        render: (record: DefaultRecordType) => (
          <button
            onClick={() =>
              setHotels(hotels.filter((hotel) => hotel.id !== record.id))
            }
          />
        ),
      },
      {
        title: 'Select',
        dataIndex: '',
        key: 'select',
        render: (index: any) => (
          <input
            type='checkbox'
            // checked={record.isSelected}
            // onClick={() => setHotels({ ...hotels, ...selected })}
            onClick={() => console.log(index)}
          />
        ),
      },
    ]}
    data={hotels.filter((hotel) => hotel.nameFilter)}
  />
)

export default HotelTable
