import React, { Component } from 'react';
import { connect } from 'react-redux'

class TableSinhvien extends Component {
    renderSV = () =>{
        const mangSinhVien = this.props.mangSinhVien
        return mangSinhVien.map((sv,index)=> {
            return (
                <tr key={index}>
                    <td>{sv.maSV}</td>
                    <td>{sv.hoTen}</td>
                    <td>{sv.soDT}</td>
                    <td>{sv.email}</td>
                </tr>
            )
        })
    }
    render() {
        console.log(this.props.mangSinhVien);
        return (
            <div className='container'>
                <table class="table">
                    <thead>
                        <tr className='bg-dark text-white'>
                            <th>Mã Sinh Viên</th>
                            <th>Họ Tên</th>
                            <th>Số Điện Thoại</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.renderSV()}
                    </tbody>
                </table>
            </div>
        );
    }
}

const MapStateToProps = (state) =>{
    return {
        mangSinhVien:state.QuanlynhansuReducer.mangSinhVien
    }
}

export default connect(MapStateToProps,null) (TableSinhvien);




