### Khi nào nên sử dụng Redux và Context?

#### Đối với Context

- Lưu những state ở 1 nơi và cung cấp 1 Provider để các Consumer sử dụng
- Lưu những state mà người dùng ít tương tác để thay đổi (như theme, ...) vì khi state thay đổi thì tất cả các component sử dụng state đó bị re render

#### Đối với Redux

- Lưu những state có kiểu dữ liệu phức tạp ở một nơi chung là store, và component nào cũng có thể access bất kỳ state nào từ store này
- Khi phải quản lý quá nhiều state
- Xử lý các action bất đồng bộ bằng middleware và xử lý side effect sau mỗi action được thực thi
- Cung cấp middle ware giúp xử lý các action cần được dispatch khi nào
