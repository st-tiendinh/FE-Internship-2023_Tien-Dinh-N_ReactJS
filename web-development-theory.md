#### Câu 1: So sánh Single Page App (SPA) và Multiple Page App (MPA)

| Single Page App (SPA)                                                                | Multiple Page App (MPA)                                                          |
| :----------------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| - Không yêu cầu tải lại trang trong quá trình sử dụng                                | - Yêu cầu tải lại trang trong quá trình sử dụng                                  |
| - Phần lớn tài nguyên được tải trong lần đầu, trang chỉ tải thêm dữ liệu mới khi cần | - Luôn tải lại toàn bộ trang khi truy cập và điều hướng                          |
| - Có phần front-end riêng biệt                                                       | - Có phần front-end và back-end phụ thuộc nhau nhiều hơn, được đặt trong 1 dự án |
| - Không thân thiện với SEO                                                           | - Thân thiện với SEO                                                             |

#### Câu 2: So sánh Client-Side-Rendering và Server-Side-Rendering

|            | Client-Side-Rendering                                                                                             | Server-Side-Rendering                                                                                    |
| :--------- | :---------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
| Khái niệm  | - Việc render HTML, CSS, JS được thực hiện ở Client                                                               | - Các logic xử lý trang web sẽ được xử lý ở phía server                                                  |
| Ưu điểm    | - Trang sẽ được load 1 lần duy nhất, server sẽ trả về data cho client xử lý bằng Virtual DOM, giảm tải cho server | - Server sẽ xử lý và trả về html, css, js cho client hiển thị nên mỗi lần chuyển hướng sẽ load lại trang |
| Nhược điểm | - File HTML chỉ có 1 element có id là root nên không tối ưu cho SEO                                               | - File HTML sẽ chứa toàn bộ thành phần hoàn chỉnh của 1 page nên tối ưu cho SEO                          |

#### Câu 3: Các cách import, export trong Javascript module:

| Export                                                                       | Import                                                                                         |
| :--------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------- |
| - export default variable                                                    | - import variable from ‘./folder’                                                              |
| - export const/let variable                                                  | - import { variable } from ‘./folder’                                                          |
| - export { variable1, variable2 }                                            | - import { variable1, variable2 } from ‘./folder’                                              |
| - Export bằng alias: export { function1 as newFunc1, function2 as newFunc2 } | - import { newFunc1, newFunc2 } from ‘./folder’                                                |
|                                                                              | - import \* as allData from ‘./folder’ (import tất cả những thứ được export trong file bất kỳ) |
