import { Button, DatePicker, Select, Space } from 'antd'
import React from 'react'
import TableFilterTittle from '../../Components/Common/TableFilterTitle'
import CustomInputs from '../../CustomInputs/CustomInputs'

function Verification() {
    return (
        <div className='table-design'>
            <Space style={{ display: "flex", justifyContent: "space-between", paddingRight: "35px" }}>
                <TableFilterTittle title={"Verification"} />
                <div style={{ display: "inline-flex", gap: "15px" }}>
                    <DatePicker
                        placeholder='From date'
                        className='date-picker'
                    />
                    <DatePicker
                        placeholder='To date'
                        className='date-picker'
                    />
                    <CustomInputs />
                    <Select
                        placeholder='Nationality'
                        className='select-menu'
                    />
                    <Select
                        placeholder='User Type'
                        className='select-menu'
                    />
                    <Button className='action-btn' type='primary'>Search</Button>
                    <Button className='action-btn' type="primary" danger>
                        Primary
                    </Button>

                </div>
            </Space>
        </div>
    )
}

export default Verification
