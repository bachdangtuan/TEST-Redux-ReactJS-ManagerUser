import React, { Component } from 'react'
import FormSinhVien from '../QuanlyNhanSu/FormSinhVien'
import TableSinhVien from '../QuanlyNhanSu/TableSinhVien'

export default class Baitapform extends Component {
  render() {
    return (
      <div className='container'>
          <h3 className='text-center'>DEMO Form Input Redux </h3>
          <FormSinhVien></FormSinhVien>
          <TableSinhVien></TableSinhVien>
      </div>
    )
  }
}
