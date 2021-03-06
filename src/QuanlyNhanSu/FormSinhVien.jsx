import React, { Component } from 'react'
import { connect } from 'react-redux'

class FormSinhVien extends Component {

    state = {
        values: {
            maSV: '',
            hoTen: '',
            soDienThoai: '',
            email: ''
        },
        errors: {
            maSV: '',
            hoTen: '',
            soDienThoai: '',
            email: ''
        },

    }
    handleChange = (event) => {
        // Lấy giá trị mỗi lần value input thay đổi bởi người dùng
        console.log("event target", event.target);
        let tagInput = event.target;
        let { name, value, type } = tagInput
        let errorsMasage = '';

        // KIỂM TRA RỖNG CHO CÁC Ô INPUT


        // if (value.trim() === '') { 
        //     errorsMasage = name + '' + 'Không được bỏ trống !'
        // }

        (value.trim() === '') ? (errorsMasage = name + '' + 'Không được bỏ trống !') : (errorsMasage = errorsMasage) //Viết theo toán tử 3 ngôi

        // KIỂM TRA EMAIL

        if (type === 'email') {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!regex.test(value)) {
                errorsMasage = name + 'Không đúng định dạng '
            }
        }
        // Cập nhật giá trị values
        let values = { ...this.state.values, [name]: value }
        let errors = { ...this.state.errors, [name]: errorsMasage }

        this.setState({
            values: values,
            errors: errors
        })

    }
    handleSubmit = (event) => {
        event.preventDefault();
        let { values,errors } = this.state;
        for (const key in values) {
            if (values[key] === '') {
                alert('thiếu thông tin')
                return;
            }
        }
        for (const key in errors) {
            if (errors[key] !== '') {
                alert('thiếu thông tin')
                return;
            }
        }
        this.props.themSinhVien(this.state.values)
    }

    render() {
        return (
            <div className='container'>
                <div className="card text-left">
                    <div className="card-header bg-dark text-white">
                        <h3>Thông tin Sinh Viên</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="form-group col-6">
                                    <span>Mã Sinh Viên</span>
                                    <input className='form-control' name='maSV' onChange={this.handleChange} ></input>
                                    <span className='text-danger'> {this.state.errors.maSV}</span>
                                </div>
                                <div className="form-group col-6">
                                    <span>Họ Tên</span>
                                    <input className='form-control' name='hoTen' onChange={this.handleChange}></input>
                                    <span className='text-danger'> {this.state.errors.hoTen}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <span>Điện Thoại Sinh Viên</span>
                                    <input className='form-control' name='soDienThoai' onChange={this.handleChange}></input>
                                    <span className='text-danger'> {this.state.errors.soDienThoai}</span>
                                </div>
                                <div className="form-group col-6">
                                    <span>Email Sinh Viên</span>
                                    <input className='form-control' name='email' type='email' onChange={this.handleChange}></input>
                                    <span className='text-danger'> {this.state.errors.email}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <button type="submit" className='btn-success btn'>Thêm Sinh Viên</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

//Đưa dữ liệu lên store
const mapDispatchToProps = (dispatch) => {
    return {
        themSinhVien: (sinhvien) => {
            const action = {
                type: 'THEM_SINH_VIEN',
                sinhvien
            }
            dispatch(action)
        }
    }
}

// Lấy người dùng sửa từ redux về
const mapStateToProps = (state) => {
    return {
        sinhVienSua: state.QuanLySinhVienReducer.sinhVienSua
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormSinhVien)