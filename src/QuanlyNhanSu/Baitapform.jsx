import React, { Component } from 'react'
import FormSinhVien from '../QuanlyNhanSu/FormSinhVien'
import BangSinhVien from './BangSinhVien'

export default class Baitapform extends Component {
  render() {
    return (
      <div className='container'>
          <h3 className='text-center'>DEMO Form Input (Using Redux )</h3>
          <FormSinhVien></FormSinhVien>
          <BangSinhVien></BangSinhVien>
      </div>
    )
  }
}
