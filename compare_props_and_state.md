### So sánh sự khác nhau giữa props và state

#### Giống nhau

- Làm component bị re-render mỗi khi state hoặc props thay đổi

#### Khác nhau

|           | Props                                                                               | State                                                                                         |
| --------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Khái niệm | Props là các đối số của function component, giống như các thuộc tính của 1 thẻ html | State là thành phần riêng của 1 component, chứa thông tin của 1 component                     |
| Đặc điểm  | Props có thuộc tính là Read-only, giá trị của props không thể thay đổi              | State có thể thay đổi trong quá trình thực thi của component thông qua phương thức setState() |
| Công dụng | Props dùng để truyền data từ component cha xuống component con                      | Bảo lưu những data cần cho component                                                          |
