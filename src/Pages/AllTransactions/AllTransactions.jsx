import React from 'react'
import { Button, DatePicker, Select, Space } from 'antd'
import TableFilterTittle from '../../Components/Common/TableFilterTitle'
import CustomInputs from '../../CustomInputs/CustomInputs'

function AllTransactions() {
    return (
        <div className='table-design' style={{ padding: "30px 30px 30px 60px" }}>
            <TableFilterTittle title={"All Transactions"} />
            <Space style={{ display: "flex", justifyContent: "space-between", paddingRight: "35px" }}>
                <div style={{ display: "inline-flex", gap: "15px", marginTop: "10px" }}>
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
                        placeholder='Type'
                        className='select-menu'
                    />
                    <Select
                        placeholder='Sub Types'
                        className='select-menu'
                    />
                    <Select
                        placeholder='Currencies'
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
                </div>
            </Space>
        </div>
    )
}

export default AllTransactions
