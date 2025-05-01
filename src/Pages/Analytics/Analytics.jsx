import React from 'react'
import CustomInputs from '../../CustomInputs/CustomInputs'
import TableFilterTittle from '../../Components/Common/TableFilterTitle'
import "../../src/../CustomInputs/Inputs.css"
import { Button, Col, DatePicker, Row, Select, Space, Table } from 'antd'

function Analytics() {
  return (
    <div>
      <div className='table-design'>
       <div className='filter-field'>
       <Space size={[10, 10]} wrap>
          <TableFilterTittle title={"Users"} />
          <DatePicker
            placeholder='From date'
            className='date-picker'
          />
          <DatePicker
            placeholder='To date'
            className='date-picker'
          />
          <CustomInputs />
          {/* <CustomInputs /> */}
          <Select
            placeholder='Nationality'
            className='select-menu'
          />
          <Select
            placeholder='User Type'
            className='select-menu'
          />
          <Select
            placeholder='Verification'
            className='select-menu'
          />
          <Select
            placeholder='Status'
            className='select-menu'
          />
          <Button className='action-btn' type='primary'>Search</Button>
          <Button className='action-btn' type="primary" danger>
            Primary
          </Button>
        </Space>
       </div>
        {/* <Table /> */}
      </div>
    </div>
  )
}

export default Analytics
