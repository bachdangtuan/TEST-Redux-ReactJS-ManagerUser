import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import TableSinhVien from './TableSinhVien'

export default class Baitapform extends Component {
  render() {
    return (
      <div className='container'>
          <h3 className='text-center'>DEMO Form</h3>
          <FormSinhVien></FormSinhVien>
          <TableSinhVien></TableSinhVien>
      </div>
    )
  }
}
