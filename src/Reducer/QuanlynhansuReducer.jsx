

const stateDefault = {
    mangSinhVien:[
            {
                maSV:1,
                hoTen:'Nguyen Van A',
                soDienThoai: '091321233',
                email:'abcd@gmail.com'
            }
    ]
}

export const QuanLySinhVienReducer = (state = stateDefault, action) =>{
    switch (action.type) {
        case 'THEM_SINH_VIEN': {
            let mangSinhVienUpdate = [...state.mangSinhVien]
            //Thêm dữ liệu từ ô input vào mangSinhVien
            mangSinhVienUpdate = [...state.mangSinhVien, action.sinhvien]
            state.mangSinhVien = mangSinhVienUpdate
            return {...state}
        }   break;
        default:
            return {...state}
            break;
        }
}