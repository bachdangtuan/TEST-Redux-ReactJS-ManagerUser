import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import TableSinhvien from './TableSinhvien'
export default class componentName extends Component {
    render() {
        return (
            <div className='container'>
                <h3>Bai Tap Form</h3>
                <FormSinhVien></FormSinhVien>
                <TableSinhvien></TableSinhvien>
            </div>
        )
    }
}
