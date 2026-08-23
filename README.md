# 📋 Tờ Khai Lệ Phí Trước Bạ (Mẫu 01/LPTB)

Công cụ web đơn file (HTML/CSS/JS thuần, không framework) giúp nhập liệu nhanh
**Tờ khai lệ phí trước bạ** (Mẫu số 01/LPTB, ban hành theo Thông tư 80/2021/TT-BTC,
áp dụng đối với nhà, đất) — chỉ hiện đúng các mục cần khai cho từng lần, tự nhớ dữ
liệu, và xuất/in ra bản tờ khai đã điền.

## Vì sao cần công cụ này?

Tờ khai LPTB có tới ~46 mục/mục con, nhưng **không phải hồ sơ nào cũng cần điền hết**
(VD: chỉ mua đất thì không cần phần "2. Nhà"; không dùng đại lý thuế thì bỏ qua mục
[13]-[15]...). Nếu hiện tất cả cùng lúc sẽ rất rối mắt. Công cụ này cho phép **tick
chọn trước những mục thực sự cần dùng**, ẩn hết phần còn lại, và **nhớ lựa chọn đó
cho lần sau** — mỗi lần mở app lên chỉ thấy đúng những gì cần nhập.

## Cách dùng

1. Mở `index.html` (hoặc cài như app qua trình duyệt di động — xem mục "Cài đặt như
   ứng dụng" bên dưới)
2. Nhấn nút **⚙️** ở góc trên bên phải
3. Tick chọn các mục cần khai cho lần này (mục nào không dùng thì để trống)
4. Nhấn **Đóng** — màn hình chính chỉ hiện đúng các mục vừa tick, có ô nhập liệu sẵn
5. Nhập dữ liệu — **tự động lưu ngay khi gõ**, không cần bấm nút lưu riêng
6. Nhấn **🖨️ In / Xuất Tờ Khai** ở cuối màn hình — mở màn xem trước tờ khai đã điền (dạng ảnh,
   đúng khổ A4 đứng), có thể chụm 2 ngón tay để phóng to xem chi tiết. Ở đây có 3 lựa chọn:
   - **📤 Chia sẻ** — gửi thẳng file PDF qua Zalo/Gmail/Messenger... (trên điện thoại có hỗ trợ)
   - **🖨️ In** — mở file PDF để in trực tiếp
   - **⬇️ Tải PDF** — lưu file PDF về máy

   Lưu ý: bản in/PDF sẽ hiện **đầy đủ toàn bộ mục** giống hệt tờ khai giấy gốc — mục nào có tick
   chọn và đã nhập dữ liệu thì hiện đúng dữ liệu đó, mục nào không tick chọn thì hiện dấu chấm chấm
   trống (giống hệt in ra 1 tờ giấy chưa điền), không bị ẩn/lược bỏ khỏi bản in.

### Quy tắc ghi nhớ dữ liệu

- **Tick chọn** 1 mục → mục đó hiện ô nhập, dữ liệu gõ vào sẽ **tự lưu và nhớ mãi**
  cho các lần mở app sau (kể cả sau khi đóng trình duyệt/tắt máy)
- **Bỏ tick** 1 mục → mục đó **ẩn đi VÀ xoá luôn dữ liệu đã nhập** của riêng mục đó
  (không ảnh hưởng các mục khác đang tick) — tick lại sẽ là ô trống, không phải dữ
  liệu cũ
- Nút **"🗑️ Bỏ chọn tất cả"** trong màn hình Cài đặt sẽ xoá toàn bộ lựa chọn và dữ
  liệu đã nhập của mọi mục, dùng khi muốn làm lại tờ khai mới hoàn toàn (tờ khai
  đang dở tự động được lưu vào Lịch sử trước khi xoá, không mất dữ liệu)

### ➕ Tờ khai mới (nút cạnh icon ⚙️)

Bấm để bắt đầu ngay 1 tờ khai trống, dùng khi chuyển sang khai cho khách/hồ sơ
khác. **Chỉ xoá dữ liệu đã nhập**, tờ khai đang dở (nếu có) được **tự động lưu vào
Lịch sử trước khi xoá** (không mất dữ liệu). Các **mục đang tick chọn ở ⚙️ Cài đặt
được GIỮ NGUYÊN** — màn hình nhập liệu vẫn hiện đúng các khung đã chọn, chỉ trống
nội dung; mục chỉ mất khi tự tay bỏ tick trong Cài đặt.

### 🕘 Lịch sử tờ khai (nút cạnh icon ⚙️)

Mỗi lần bấm **"In / Xuất Tờ Khai"**, tờ khai đang nhập sẽ **tự động lưu lại 1 bản
vào Lịch sử** (kèm thời điểm lưu, tên người nộp thuế để dễ nhận biết). Bấm nút
**"🕘"** ở đầu trang để xem lại toàn bộ các tờ khai đã từng lưu:
- Nhấn vào 1 tờ khai trong danh sách → **nạp lại toàn bộ dữ liệu** đã nhập của tờ
  đó vào màn hình nhập liệu, có thể chỉnh sửa tiếp rồi xuất lại (chỉnh sửa và xuất
  lại sẽ **cập nhật đúng bản ghi đó**, không tạo thêm bản trùng)
- Nhấn 🗑️ cạnh 1 tờ khai để xoá riêng tờ đó khỏi lịch sử
- Lịch sử lưu tối đa 200 tờ khai gần nhất

### 🔄 Khi mở lại ứng dụng (đầu trang ⚙️ Cài đặt)

- **Mở lại tờ khai cũ** (mặc định) — mở app lên vẫn thấy y nguyên tờ khai đang
  nhập dở lần trước, giống như trước giờ
- **Mở tờ khai mới** — mỗi lần mở app, dữ liệu đã nhập tự động **trống hoàn
  toàn** để bắt đầu 1 tờ khai mới (giữ nguyên các mục đang tick chọn, y như nút
  "➕ Tờ khai mới"); tờ khai đang dở của lần trước được **tự động lưu vào Lịch sử**
  trước khi xoá — phù hợp khi dùng để khai nhiều hồ sơ khác nhau liên tục trong
  ngày

Lựa chọn này **tự nhớ** cho đến khi đổi lại — không cần chọn lại mỗi lần mở app.

### 💡 Tự động đề xuất khi gõ

Các trường nhập chữ ở mục **"Thông tin người nộp thuế"** và **"Đặc điểm nhà, đất"**
sẽ tự hiện gợi ý ngay khi gõ vài ký tự đầu, lấy từ các giá trị **đã từng nhập** ở
những tờ khai có trong Lịch sử (VD: gõ "Ng" vào ô Tên người nộp thuế sẽ gợi ý lại
tên khách quen đã khai trước đó). Bấm vào gợi ý để điền nhanh, không cần gõ lại từ
đầu — hoạt động giống hệt kiểu chọn nhanh tên khách hàng ở app Mua Bán Mủ Cao Su.

## Cấu trúc file

```
index.html      Toàn bộ giao diện + logic (tự chứa, không phụ thuộc thư viện ngoài)
manifest.json   Khai báo PWA (tên, icon, màu chủ đạo) để cài như ứng dụng
sw.js           Service worker cache-first, cho phép dùng offline sau lần mở đầu
icon-192.png    Icon app 192×192
icon-512.png    Icon app 512×512
```

## Đưa lên GitHub Pages

1. Tạo repository mới (hoặc dùng repo hiện có), copy toàn bộ 5 file trên vào
2. Vào **Settings → Pages**, chọn nhánh (thường là `main`) và thư mục gốc (`/`)
3. Chờ khoảng 1 phút, GitHub sẽ cấp link dạng
   `https://<tên-tài-khoản>.github.io/<tên-repo>/`
4. Mở link đó trên điện thoại → xem hướng dẫn cài đặt bên dưới

## Cài đặt như ứng dụng (PWA)

**Android (Chrome):** mở link → menu (⋮) → "Cài đặt ứng dụng" / "Thêm vào Màn hình
chính".
**iPhone (Safari):** mở link → nút Chia sẻ → "Thêm vào Màn hình chính".

Sau khi cài, app mở như 1 ứng dụng độc lập (không thanh địa chỉ trình duyệt), dùng
được cả khi không có mạng nhờ service worker đã lưu cache sẵn.

## Kỹ thuật sử dụng (để tham khảo khi cần mở rộng thêm loại tờ khai khác)

Toàn bộ mục/mục con của tờ khai được khai báo tập trung trong 1 mảng `SCHEMA` ở đầu
phần `<script>` của `index.html`. Cả khung nhập liệu chính lẫn danh sách tick chọn
trong ⚙️ Cài đặt đều được **render tự động** từ `SCHEMA` này — không có phần nào lặp
lại code ở 2 nơi. Muốn thêm/sửa/bớt 1 mục, chỉ cần sửa đúng 1 chỗ trong mảng
`SCHEMA`, không cần đụng vào phần render hay phần lưu trữ.

Đây gọi là kỹ thuật **"Master Data theo mục có thể bật/tắt"** (schema-driven form
với field-level visibility toggle + tự nhớ dữ liệu qua localStorage) — có thể áp
dụng lại y hệt cho các loại tờ khai/biểu mẫu khác (thuế TNCN, đăng ký kinh doanh...)
bằng cách tạo 1 `SCHEMA` mới theo đúng khuôn mẫu này.

## Đánh số phiên bản

Từ **v1.1.0** trở đi, đánh số phiên bản theo đúng quy tắc của app "Mua Bán Mủ Cao
Su": định dạng `Z.X.Y` — **Y tăng dần 0→9** sau mỗi lần chỉnh sửa, hết 9 thì tăng X
lên 1 và Y quay về 0 (VD: 1.1.3→1.1.4→...→1.1.9→1.2.0). Mỗi lần cập nhật version
phải sửa đúng **4 vị trí**: `<title>`, dòng phụ đề trong header của `index.html`,
`description` trong `manifest.json`, hằng số `CACHE` trong `sw.js`.

*(Giai đoạn phát triển đầu tiên — từ lúc phát hành đến trước v1.1.0 — đã trải qua
nhiều lần chỉnh sửa nhanh chưa áp dụng đúng quy tắc đánh số này, nên được gộp chung
lại thành 1 dòng "v1.0.0 (giai đoạn đầu)" trong bảng bên dưới thay vì liệt kê từng
số riêng lẻ như trước. Từ v1.1.0, mỗi số phiên bản phản ánh đúng 1 lần chỉnh sửa.)*

## Changelog

| Phiên bản | Ngày | Thay đổi |
|-----------|------|----------|
| **v1.2.0** | 2026-08-23 | 🐛✨ (1) **Sửa lỗi mất góc dưới trang khi xem trước** — nguyên nhân do khung xem trước dùng kéo (pan) tự chế bằng transform + chặn hẳn cuộn mặc định (`touch-action:none`), khiến phần cuối trang 2 (bảng đồng sở hữu, mục 6, chữ ký) vượt quá khung nhìn không thể chạm tới bằng thao tác cuộn thông thường; đã đổi sang **cuộn tự nhiên** của trình duyệt (vuốt 1 ngón cuộn bình thường), chỉ can thiệp khi chụm đúng 2 ngón để phóng to/thu nhỏ. (2) **Chuyển dropdown "Khi mở lại ứng dụng" vào trong ⚙️ Cài đặt**, đặt ngay trên đầu (trước đây tách riêng thành 1 thanh ngang dưới header). (3) **"➕ Tờ khai mới" giờ CHỈ xoá dữ liệu đã nhập, GIỮ NGUYÊN các mục đang tick chọn** ở Cài đặt (trước đây lỡ xoá luôn cả mục đã chọn) — các mục chỉ mất khi tự tay bỏ tick trong Cài đặt; áp dụng logic này cho cả chế độ khởi động "Mở tờ khai mới". (4) **Thay toàn bộ hộp thoại `confirm()` mặc định của trình duyệt bằng popup xác nhận riêng của app** — đẹp hơn, đồng bộ giao diện, không còn hộp thoại trắng đơn điệu của hệ thống |
| **v1.1.0** | 2026-08-22 | ✨ (1) Chọn "Mở lại tờ khai cũ / Mở tờ khai mới" dạng dropdown ngay trên đầu trang, tự nhớ lựa chọn. (2) 2 nút mới cạnh icon ⚙️: "➕ Tờ khai mới" và "🕘 Lịch sử tờ khai" (xem nhanh từ màn hình chính). (3) Tự động đề xuất khi gõ cho các trường nhập chữ ở "Thông tin người nộp thuế" và "Đặc điểm nhà, đất" — gợi ý lấy từ Lịch sử, giống kiểu chọn nhanh tên khách hàng ở app Mua Bán Mủ Cao Su |
| **v1.0.0 (giai đoạn đầu)** | 2026-08-21 – 2026-08-22 | Phát hành lần đầu và các lần chỉnh sửa nhanh trong giai đoạn phát triển ban đầu (gộp chung 1 dòng): đầy đủ mục số [01]-[15] và 1.x-6 của Mẫu 01/LPTB; cơ chế tick chọn hiển thị + tự nhớ/xoá dữ liệu theo mục; bản in/PDF luôn hiện đủ mục (mục chưa tick hiện dấu chấm chấm giống bản giấy gốc); ô [05] Mã số thuế dạng từng ô vuông (10+4 ô); điểm ngắt trang khớp đúng mẫu gốc (trang 1 hết ở mục 1.7, trang 2 từ "2. Nhà:"); cơ chế xem trước/xuất PDF bằng html2canvas + jsPDF (khổ A4 đứng, chụp tuần tự từng trang tránh lỗi mất góc, có CDN dự phòng); tính năng Lịch sử tờ khai (tự lưu mỗi lần xuất, xem lại/nạp lại/xoá từng tờ) |
