# Getting Started with Create React App
Kiểm tra rỗng các ô input
</br>
Kiểm tra email nhập vào đúng kí tự
</br>
Xóa sinh viên theo index

1.MapDispatchToProps:
thêm action xóa Sinh Viên dữ liệu gửi lên store là index của phần tử.

2. Xử lý trên Reducer

case: 'XOA_SINH_VIEN' 
- Sao Chép lại mảng sinh viên ban đầu đặt tên là 
let mangSinhVienUpdate = [...state.mangSinhVien]
- splice(action index, 1 ) 
- gán reducer store = mảng Sinh Viên Update
- return lại {...state}
