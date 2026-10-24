# Hướng dẫn cho Claude — dự án Khai Thuế (Tờ Khai Đa Năng)

PWA khai thuế đa tờ khai, chạy trên GitHub Pages tại `https://nguyentai219.github.io/Tokhai/`. Toàn bộ app
nằm trong một file `index.html` (HTML + CSS + JS nội tuyến); `sw.js` là Service Worker; `manifest.json` là
thông tin cài đặt app; `icon-192.png`, `icon-512.png` là biểu tượng.

Dự án này **tách biệt hoàn toàn** với app Mủ Cao Su (repo `nguyentai219/Mucaosu`) — không sửa gì bên đó.

## Quy trình làm việc (bắt buộc)

1. Mỗi lần chỉnh sửa và kiểm tra xong: **tự động lưu thẳng lên GitHub**, không cần hỏi — commit và push
   trực tiếp lên nhánh `main` của repo `nguyentai219/Tokhai`, để GitHub Pages đăng bản mới và app trên điện
   thoại tự cập nhật.
2. Gửi kèm file `.zip` bản mới nhất (index.html, sw.js, manifest.json, README.md, icon) cho người dùng tải về.
3. **Báo lại** đã sửa những gì, đã kiểm tra ra sao, kèm link commit trên GitHub.
4. **Hỏi người dùng còn muốn chỉnh sửa gì nữa không.**
5. Trả lời người dùng bằng tiếng Việt.

## Đánh số phiên bản

Theo quy tắc `Z.X.Y` ghi trong `README.md` (Y tăng 0→9, hết 9 thì tăng X và Y về 0). Mỗi lần cập nhật tăng
đúng 1 bước và đổi ở đủ các vị trí:

- `index.html`: `<title>` và dòng phụ đề/phiên bản trong giao diện (grep số cũ để tìm hết).
- `manifest.json`: `description`.
- `sw.js`: hằng `CACHE` — bắt buộc đổi, vì app trên điện thoại chỉ tự cập nhật khi `sw.js` thay đổi.

Sau khi đổi, `grep` số cũ để chắc không sót. Thêm 1 dòng vào bảng "Changelog" trong `README.md`
(dòng mới nhất ở trên cùng).

## Kiểm tra trước khi báo xong

- `node --check sw.js` và kiểm tra cú pháp các khối `<script>` nội tuyến trong `index.html`.
- Khi cần, chạy thử bằng Playwright (Chromium có sẵn): phục vụ thư mục cha qua HTTP sao cho app nằm ở
  đường dẫn `/Tokhai/`, mở `index.html` và kiểm tra không có lỗi JS.
