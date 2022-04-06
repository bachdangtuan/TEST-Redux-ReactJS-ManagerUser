# Getting Started with Create React App
1. Setup Redux và Store tổng. 
(Lưu ý tạo stateDefault theo số lượng các ô input cần nhập vào, ví dụ có 4 trường input là ten, tuoi, sdt, email thì tạo object tương đương, để rỗng, muốn test thì cho giá trị vào)
(Kiểm tra lại UI/HTML có khai báo type, name, trong thẻ input, k có thì bổ sung)

2. Thao tác lấy dữ liệu từ Store tổng về và render ra màn hình thông qua props. 
Duyệt lại mảng lấy từ store và render.

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
