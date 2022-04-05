import React, { Component } from 'react'
import { connect } from 'react-redux'

class BangSinhVien extends Component {

  
   renderSP = () =>{
       const {mangSinhVien} = this.props;
       return mangSinhVien.map((sp,index)=>{
            return (
                <tr key={index}>
                    <td>{sp.maSV}</td>
                    <td>{sp.hoTen}</td>
                    <td>{sp.soDienThoai}</td>
                    <td>{sp.email}</td>
                </tr>
            )
       })
   } 

  render() {
      console.log(this.props.mangSinhVien);
    return (
      <div className='container'>
          <table className="table">
              <thead>
                  <tr className='bg-dark text-white'>
                      <th>Mã Sinh Viên</th>
                      <th>Họ Tên</th>
                      <th>Số Điện Thoại</th>
                      <th>Email</th>
                  </tr>
              </thead>
              <tbody>
                 {this.renderSP()}
              </tbody>
          </table>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
    return {
        mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien
    }
}
export default connect(mapStateToProps,null)(BangSinhVien)