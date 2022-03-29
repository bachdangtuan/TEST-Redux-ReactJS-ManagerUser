import React, { Component } from 'react'

export default class componentName extends Component {
    state = {
        maSV:'',
        hoTen:'',
        soDT:'',
        email:''
    }

    handleChange = (e) =>{
        //Lấy giá trị mỗi lần input thay đổi bởi người dùng
        let tagInput = e.target;
        let {name,value} = tagInput;
        

        this.setState({
            [name]:value
        }, () =>{
            console.log(this.state);
        })
        console.log(name,value);
    }

    render() {
        return (
            <div className="container">
                <div className="card text-dark">
                    <div className="card-header bg-dark">
                        Information Member
                    </div>
                    <div className="card-body">
                        <from>
                            <div className="row">
                                <div className="form-group col-6">
                                    <span>Mã Sinh viên</span>
                                    <input className='form-control' name='maSV' value={this.state.maSV} onChange={this.handleChange} />
                                </div>
                                <div className="form-group col-6">
                                    <span>Tên Sinh viên</span>
                                    <input className='form-control' name='hoTen'value={this.state.hoTen} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-6">
                                    <span>Số Điện Thoại</span>
                                    <input className='form-control' name='soDT'value={this.state.soDT} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-6">
                                    <span>Email</span>
                                    <input className='form-control' name='email'value={this.state.email} onChange={this.handleChange}/>
                                </div>
                                <button className='btn btn-success'>Thêm Sinh viên</button>
                            </div>
                        </from>
                    </div>
                </div>

            </div>
        )
    }
}
