import React, { Dispatch, SetStateAction } from 'react'
import Table from 'rc-table'
import { DefaultRecordType } from 'rc-table/lib/interface'

interface Props {
  hotels: Array<DefaultRecordType>
  setHotels: Dispatch<SetStateAction<Array<DefaultRecordType>>>
  selected: Array<Boolean>
  setSelected: Dispatch<SetStateAction<Array<Boolean>>>
}

const HotelTable = ({
  hotels,
  setHotels,
  selected,
  setSelected,
}: Props): React.ReactElement => (
  // TD: I was looking for an easy Table component...
  // rc-table has quite inconsistent behaviour, but is easy to use
  // Would definitely pick another Table component library for the next project.
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
        // TD: extract this into a function to generalize for all columns
        onCell: (record) => ({
          onClick() {
            // TD: very hacky way to check that we've filtered down to one hotel,
            // in hindsight would've used Redux.
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
        render: (value: any, record: DefaultRecordType, index: number) => (
          <input
            type='checkbox'
            onClick={(e) => {
              setSelected(
                Object.assign(selected, {
                  [index]: (e.target as HTMLInputElement).checked,
                })
              )
            }}
          />
        ),
      },
    ]}
    data={hotels.filter((hotel) => hotel.nameFilter)}
  />
)

export default HotelTable
