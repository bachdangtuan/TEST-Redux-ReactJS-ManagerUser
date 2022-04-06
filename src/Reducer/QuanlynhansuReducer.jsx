

const stateDefault = {
    mangSinhVien: [
    ],
    sinhVienSua:{

            maSV: '123',
            hoTen: 'Nguyen Van C',
            soDienThoai: '02834855',
            email: 'jdhfjhsd@gmail.com'
       
    }
}

export const QuanLySinhVienReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'THEM_SINH_VIEN': {
            let mangSinhVienUpdate = [...state.mangSinhVien]
            //Thêm dữ liệu từ ô input vào mangSinhVien
            mangSinhVienUpdate = [...state.mangSinhVien, action.sinhvien]
            state.mangSinhVien = mangSinhVienUpdate
            return { ...state }
        } break;

        case 'XOA_SINH_VIEN': {
            //Sao chép lại mảng sinh viên
            let mangSinhVienUpdate = [...state.mangSinhVien]
            // Xóa theo Index phần tử trong mảng
            mangSinhVienUpdate.splice(action.index, 1)
            state.mangSinhVien = mangSinhVienUpdate
            return { ...state }
        } break;




        default:
            return { ...state }
            break;
    }
}