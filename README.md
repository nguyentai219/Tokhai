# 📚 Khai Thuế (đa tờ khai)

Công cụ web đơn file (HTML/CSS/JS thuần, không framework) giúp nhập liệu nhanh
**nhiều loại tờ khai thuế** — chỉ hiện đúng các mục cần khai cho từng lần, tự nhớ
dữ liệu, và xuất/in ra bản tờ khai đã điền. Hiện có 3 loại tờ khai:

- **📋 Tờ khai lệ phí trước bạ** (Mẫu 01/LPTB, TT80/2021/TT-BTC) — áp dụng với nhà, đất
- **💰 Tờ khai thuế TNCN chuyển nhượng bất động sản** (Mẫu 03/BĐS-TNCN, TT80/2021/TT-BTC)
  — áp dụng với chuyển nhượng, nhận thừa kế, nhận quà tặng là bất động sản
- **🏞️ Tờ khai tiền sử dụng đất** (Mẫu 01/TSDĐ, TT156/2013/TT-BTC) — kê khai tiền sử
  dụng đất phải nộp khi được giao đất, công nhận quyền sử dụng đất, chuyển mục đích sử dụng đất

Mở app lên sẽ luôn thấy **màn hình chọn loại tờ khai** trước tiên; chọn vào 1 loại
sẽ vào màn hình nhập liệu riêng của loại đó.

## Vì sao cần công cụ này?

Các tờ khai thuế có rất nhiều mục/mục con, nhưng **không phải hồ sơ nào cũng cần
điền hết** (VD: chỉ mua đất thì không cần phần "2. Nhà"; không dùng đại lý thuế thì
bỏ qua các mục liên quan đại lý...). Nếu hiện tất cả cùng lúc sẽ rất rối mắt. Công
cụ này cho phép **tick chọn trước những mục thực sự cần dùng**, ẩn hết phần còn
lại, và **nhớ lựa chọn đó cho lần sau** — mỗi lần mở đúng loại tờ khai đó lên chỉ
thấy đúng những gì cần nhập. Mỗi loại tờ khai có **cấu hình mục, dữ liệu và lịch sử
hoàn toàn riêng biệt**, không lẫn vào nhau.

## Cách dùng

1. Mở `index.html` (hoặc cài như app qua trình duyệt di động — xem mục "Cài đặt như
   ứng dụng" bên dưới)
2. Ở màn hình danh sách, chọn loại tờ khai muốn thực hiện
3. Nhấn nút **⚙️** ở góc trên bên phải
4. Tick chọn các mục cần khai cho lần này (mục nào không dùng thì để trống)
5. Kéo xuống cuối danh sách, nhấn **Đóng** — màn hình chính chỉ hiện đúng các mục
   vừa tick, có ô nhập liệu sẵn
6. Nhập dữ liệu — **tự động lưu ngay khi gõ**, không cần bấm nút lưu riêng (nút
   **💾 Lưu** ở cuối trang chỉ để chủ động chốt lại 1 bản vào Lịch sử khi cần)
7. Kéo xuống **cuối tờ khai**, nhấn **🖨️ In / Xuất Tờ Khai** — mở màn xem trước tờ
   khai đã điền (dạng ảnh, đúng khổ A4 đứng), có thể chụm 2 ngón tay để phóng to
   xem chi tiết. Ở đây có 3 lựa chọn:
   - **📤 Chia sẻ** — gửi thẳng file PDF qua Zalo/Gmail/Messenger... (trên điện thoại có hỗ trợ)
   - **🖨️ In** — mở file PDF để in trực tiếp
   - **⬇️ Tải PDF** — lưu file PDF về máy

   Lưu ý: bản in/PDF sẽ hiện **đầy đủ toàn bộ mục** giống hệt tờ khai giấy gốc — mục nào có tick
   chọn và đã nhập dữ liệu thì hiện đúng dữ liệu đó, mục nào không tick chọn thì hiện dấu chấm chấm
   trống (giống hệt in ra 1 tờ giấy chưa điền), không bị ẩn/lược bỏ khỏi bản in.

### Quy tắc ghi nhớ dữ liệu

- **Tick chọn** 1 mục → mục đó hiện ô nhập, dữ liệu gõ vào sẽ **tự lưu và nhớ mãi**
  cho các lần mở lại đúng loại tờ khai đó sau (kể cả sau khi đóng trình duyệt/tắt máy)
- **Bỏ tick** 1 mục → mục đó **ẩn đi VÀ xoá luôn dữ liệu đã nhập** của riêng mục đó
  (không ảnh hưởng các mục khác đang tick) — tick lại sẽ là ô trống, không phải dữ
  liệu cũ

### 💰 Ô nhập số tiền

Các mục thể hiện số tiền (đồng) — VD mục 1.7, 2.4, 3 của Tờ khai trước bạ; mục
[45], [47] và các giá trị nhà/đất/công trình của Tờ khai TNCN... — tự động thêm
**dấu chấm phân cách hàng nghìn** ngay khi gõ để dễ đọc (VD gõ `2500000` sẽ tự hiện
`2.500.000`). Một số mục (thuế TNCN phát sinh, được miễn, phải nộp...) là **mục tự
động tính** từ các số đã nhập, không cần gõ tay.

### 🏠 Về danh sách tờ khai

Nút **🏠** ở đầu màn hình nhập liệu đưa về lại màn hình chọn loại tờ khai. Dữ liệu
đang nhập dở vẫn được giữ nguyên (đã tự lưu ngay khi gõ), không cần lo mất khi
chuyển qua lại giữa các loại tờ khai.

### ➕ Tờ khai mới (nút cạnh icon ⚙️)

Bấm để bắt đầu ngay 1 tờ khai trống **của đúng loại đang mở**, dùng khi chuyển
sang khai cho khách/hồ sơ khác. **Chỉ xoá dữ liệu đã nhập**, tờ khai đang dở (nếu
có) được **tự động lưu vào Lịch sử trước khi xoá** (không mất dữ liệu). Các **mục
đang tick chọn ở ⚙️ Cài đặt được GIỮ NGUYÊN** — màn hình nhập liệu vẫn hiện đúng
các khung đã chọn, chỉ trống nội dung; mục chỉ mất khi tự tay bỏ tick trong Cài đặt.

### 🕘 Lịch sử tờ khai (nút cạnh icon ⚙️)

Mỗi lần bấm **"In / Xuất Tờ Khai"** hoặc **"💾 Lưu"**, tờ khai đang nhập sẽ **tự
động lưu lại 1 bản vào Lịch sử của đúng loại tờ khai đó** (kèm thời điểm lưu, tên
người nộp thuế để dễ nhận biết). Bấm nút **"🕘"** ở đầu trang để xem lại toàn bộ các
tờ khai đã từng lưu (riêng cho loại đang mở):
- Nhấn vào 1 tờ khai trong danh sách → **nạp lại toàn bộ dữ liệu** đã nhập của tờ
  đó vào màn hình nhập liệu, có thể chỉnh sửa tiếp rồi xuất lại (chỉnh sửa và xuất
  lại sẽ **cập nhật đúng bản ghi đó**, không tạo thêm bản trùng)
- Nhấn 🗑️ cạnh 1 tờ khai để xoá riêng tờ đó khỏi lịch sử
- Lịch sử lưu tối đa 200 tờ khai gần nhất **cho mỗi loại tờ khai**

### ⚙️ Cài đặt chung (nút ⚙️ ở màn hình danh sách) — TÁCH BIỆT khỏi "Chọn mục cần khai"

Đây là 2 phần cấu hình khác nhau, cố tình tách riêng:

- **⚙️ Cài đặt chung** (mở từ màn hình danh sách tờ khai) — chỉ có 1 lựa chọn
  **"🔄 Khi chọn 1 tờ khai"**, áp dụng CHUNG cho mọi loại tờ khai:
  - **Mở lại tờ khai cũ** (mặc định) — chọn vào 1 loại tờ khai vẫn thấy y nguyên
    dữ liệu đang nhập dở lần trước của đúng loại đó
  - **Mở tờ khai mới** — mỗi lần chọn vào loại tờ khai đó, dữ liệu đã nhập tự động
    **trống hoàn toàn** để bắt đầu 1 tờ khai mới (giữ nguyên các mục đang tick
    chọn, y như nút "➕ Tờ khai mới"); tờ khai đang dở của lần trước được **tự
    động lưu vào Lịch sử** trước khi xoá
- **⚙️ Chọn mục cần khai** (nút ⚙️ trong màn hình nhập liệu) — CHỈ có danh sách
  tick chọn mục, áp dụng RIÊNG cho loại tờ khai đang mở, không còn lẫn lựa chọn
  "khi mở lại ứng dụng" ở đây nữa

Lựa chọn "Khi chọn 1 tờ khai" **tự nhớ** cho đến khi đổi lại.

### 💡 Tự động đề xuất khi gõ

Các trường nhập chữ ở mục **"Thông tin người nộp thuế"** và **"Đặc điểm nhà, đất"**
(hoặc mục tương ứng ở tờ khai TNCN) sẽ tự hiện gợi ý ngay khi gõ vài ký tự đầu, lấy
từ các giá trị **đã từng nhập** ở những tờ khai cùng loại có trong Lịch sử (VD: gõ
"Ng" vào ô Tên người nộp thuế sẽ gợi ý lại tên khách quen đã khai trước đó). Bấm
vào gợi ý để điền nhanh, không cần gõ lại từ đầu — hoạt động giống hệt kiểu chọn
nhanh tên khách hàng ở app Mua Bán Mủ Cao Su.

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
được cả khi không có mạng nhờ service worker đã lưu cache sẵn. (Riêng tính năng
"In / Xuất Tờ Khai" cần mạng ở lần đầu để tải thư viện html2canvas/jsPDF từ CDN.)

## Kỹ thuật sử dụng (để tham khảo khi cần mở rộng thêm loại tờ khai khác)

Từ v1.2.1, app chuyển sang kiến trúc **đa tờ khai**: mỗi loại tờ khai là 1 phần tử
trong mảng `FORM_DEFS` ở đầu phần `<script>` của `index.html`, gồm:

- `schema` — mảng khai báo TOÀN BỘ mục/mục con của tờ khai đó (kiểu dữ liệu tương
  tự bản cũ: `text`/`number`/`date`/`textarea`/`multi`/`choice`/`yesno`, cộng thêm
  2 kiểu mới là `table` — bảng động nhiều dòng có thể thêm/xoá, cột tự khai báo —
  và `computed` — mục tự động tính từ công thức tham chiếu các mục khác, dùng cho
  các dòng thuế TNCN phát sinh/được miễn/phải nộp)
- `sectionLabel` / `sectionOrder` — tên và thứ tự các phần (I, II, III...)
- `buildPages()` — hàm dựng HTML từng trang in/PDF, khớp đúng điểm ngắt trang của
  mẫu giấy gốc
- Các thông tin hiển thị: `headerTitle`, `mauSo`, `thongTu`, `moTa`, `fileName`...

Khung nhập liệu chính lẫn danh sách tick chọn trong ⚙️ Cài đặt đều được **render tự
động** từ `schema` của loại tờ khai đang mở — không có phần nào lặp lại code ở 2
nơi. Dữ liệu/lịch sử/cấu hình mục của mỗi loại tờ khai được lưu ở khoá `localStorage`
riêng (namespace theo `form.id`, hàm `K(formId, tên)`), không lẫn vào nhau; chỉ có
1 cài đặt DUY NHẤT dùng chung cho mọi loại là "Khi chọn 1 tờ khai" (mở lại cũ/mới).

Muốn thêm 1 loại tờ khai mới: tạo 1 `SCHEMA_...` + các hàm `xayHtml..Trang..()` theo
đúng khuôn mẫu các tờ khai đã có, rồi thêm 1 phần tử vào `FORM_DEFS`.

Đây vẫn là kỹ thuật **"Master Data theo mục có thể bật/tắt"** (schema-driven form
với field-level visibility toggle + tự nhớ dữ liệu qua localStorage) như bản gốc,
chỉ mở rộng thêm 1 lớp "chọn loại tờ khai" bên ngoài.

### Di trú dữ liệu từ bản cũ (chỉ có 1 tờ khai)

Lần đầu mở bản v1.2.1 trở đi, app tự động phát hiện dữ liệu tờ khai trước bạ đã lưu
theo cấu trúc cũ (khoá `ltb_...`) và **tự chuyển sang cấu trúc mới** (namespace
theo `ltb`), chạy đúng 1 lần duy nhất — không mất dữ liệu, không cần thao tác gì
thêm.

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
| **v1.4.4** | 2026-08-28 | 🐛✨ 2 sửa: (1) Popup xác nhận xóa nâng z-index 900 (trên modal-cloud 700) — không còn bị che; (2) Màn hình chi tiết nhóm dữ liệu: nhấn vào nhóm → xem từng sub-key (giá trị/lịch sử/bảng), xóa từng phần; lịch sử tờ khai hiện tên từng người; gợi ý autocomplete hiện từng người riêng có thể xóa từng người |
| **v1.4.3** | 2026-08-28 | ✨ 2 tính năng: (1) **Quản lý dữ liệu đám mây** — thêm mục "📂 Quản lý dữ liệu đám mây" vào menu Supabase, hiện danh sách từng tờ khai / nhóm dữ liệu đang lưu trên cloud, xóa sẽ đồng bộ xóa cả Supabase lẫn localStorage máy; pool gợi ý được tách thành nhóm riêng tránh xóa nhầm; (2) **Person pool liên thông tờ khai** — xác nhận `tk2_ac_person_v1` tự sync theo push/pull cloud nên dữ liệu gợi ý dùng chung mọi tờ khai |
| **v1.4.2** | 2026-08-28 | 🐛 Sửa autocomplete nhóm người: tách hẳn khỏi pool cũ `tk2_ac_pool_v1` — trường họ tên/MST/CMND/địa chỉ giờ CHỈ đọc `tk2_ac_person_v1`, không còn trộn dữ liệu người khác từ pool chung |
| **v1.4.1** | 2026-08-28 | ✨ Autocomplete thông minh theo người: thêm pool `tk2_ac_person_v1` lưu bộ dữ liệu theo người (họ tên + MST + CMND/CCCD + địa chỉ). Khi đã nhập họ tên, ô MST/CMND/địa chỉ tiếp theo chỉ hiện đúng đề xuất của người đó. Icon 👤=khớp người, 🕐=pool chung, 📍=địa chính |
| **v1.4.0** | 2026-08-28 | 🐛 Sửa dứt điểm pinch-zoom bị reset sau khi thả tay: (1) thêm `_lastPinchEnd` — đánh dấu thời điểm kết thúc pinch **trước** khi reset `_isPinching`, block double-tap trong 500ms sau pinch; (2) bỏ `_tkSoftClamp` (nguyên nhân ép TX/TY về 0 sai); (3) `_tkResetView` dùng `requestAnimationFrame` để đợi layout wrap xong trước khi căn giữa |
| **v1.3.9** | 2026-08-28 | 🐛 Sửa lỗi pinch-zoom: sau khi thả tay nội dung giữ nguyên vị trí và tỉ lệ, kéo 1 ngón tự do 4 chiều. Viết lại `_tkSoftClamp` (bỏ clamp cứng về 0 khi scale=1), mô hình tọa độ nhất quán (origin trong không gian nội dung), `_tkResetView(scrollEl)` căn giữa ngang đúng. Pan dùng delta tích lũy thay vì absolute offset |
| **v1.3.8** | 2026-08-28 | 🐛✨ 2 sửa lỗi: (1) **Toggle Màn hình luôn bật** — đổi từ CSS selector (không hoạt động khi input nằm trong label) sang JS class `.wl-on` trên `#wakelock-thumb`; thêm `_wlSetUi()` để đồng bộ UI khi mở Settings và khi app khởi động; (2) **Pinch-zoom 4 chiều tự do** — viết lại engine: dùng `transform:translate()+scale()` thay `css zoom`, lưu `_tkTX/_tkTY` để pan 1 ngón sau khi zoom, điểm zoom khớp đúng midpoint 2 ngón tay; double-tap để reset về 100%; hint cập nhật |
| **v1.3.7** | 2026-08-28 | ✨🔆 2 cải tiến: (1) **Màn hình luôn bật** — thêm toggle vào Cài đặt chung (dùng Wake Lock API, tự lấy lại lock khi chuyển tab rồi quay lại, lưu localStorage); (2) **Bản xem trước phóng to ngang** — đổi `overflow-x:hidden` → `auto` + thêm `min-width:fit-content` cho vùng cuộn, cho phép cuộn ngang tự do sau khi chụm 2 ngón phóng to |
| **v1.3.6** | 2026-08-27 | 🐛 Sửa lỗi popup Hướng dẫn bị nằm dưới Cài đặt chung — thêm z-index:800 cho modal-huong-dan |
| **v1.3.5** | 2026-08-27 | 🎨 Tách hướng dẫn ra popup riêng — Cài đặt chung gọn gàng (chỉ còn 2 dòng cài đặt + nút "📖 Hướng dẫn sử dụng"); nhấn vào nút đó mở popup hướng dẫn đầy đủ riêng biệt |
| **v1.3.4** | 2026-08-27 | 🎨 **Cài đặt chung gọn hơn**: bỏ 2 tab (⚙️ Cài đặt / 📖 Hướng dẫn), đổi tiêu đề thành "Cài đặt chung", hiển thị thẳng 2 mục cài đặt (chế độ mở tờ khai + CSDL hành chính) rồi phần Hướng dẫn sử dụng nằm cuối — cuộn được, gọn hơn |
| **v1.3.3** | 2026-08-27 | 📍 **Chuẩn hóa CSDL hành chính đúng 34 tỉnh/thành** theo Nghị quyết 202/2025/QH15 hiệu lực 1/7/2025 — xóa 17 tên tỉnh sai (Bình Dương, Bình Phước, Bình Thuận, Thừa Thiên Huế, Quảng Nam, Bình Định, Ninh Thuận, Kon Tum, Kiên Giang, Bạc Liêu, Sóc Trăng, Trà Vinh, Bến Tre, Tiền Giang, Long An, Vũng Tàu, Đắk Nông, Vĩnh Phúc), bổ sung 11 tỉnh thiếu (Huế, Cao Bằng, Hà Tĩnh, Hưng Yên, Lai Châu, Lào Cai, Ninh Bình, Quảng Trị, Sơn La, Tuyên Quang, Điện Biên); cập nhật dữ liệu xã/phường theo cơ cấu sáp nhập mới (898 xã/phường từ 34 tỉnh/thành) |
| **v1.3.2** | 2026-08-27 | 📍 **Mở rộng CSDL hành chính lên 41 tỉnh/thành, 852+ xã/phường** — bổ sung đầy đủ theo cơ cấu 34 tỉnh/thành sau sáp nhập hành chính: Hà Nội, TP.HCM, Hải Phòng, Đà Nẵng, Cần Thơ, Quảng Ninh, Thanh Hóa, Nghệ An, Thừa Thiên Huế, Quảng Nam, Quảng Ngãi, Bình Định, Khánh Hòa, Ninh Thuận, Lâm Đồng, Đắk Lắk, Đắk Nông, Gia Lai, Kon Tum, Bình Phước, Tây Ninh, Bình Dương, Đồng Nai, Vũng Tàu, Long An, Tiền Giang, Bến Tre, Đồng Tháp, Vĩnh Long, An Giang, Kiên Giang, Cần Thơ, Bạc Liêu, Sóc Trăng, Trà Vinh, Cà Mau, Bắc Ninh, Vĩnh Phúc, Phú Thọ, Thái Nguyên, Lạng Sơn |
| **v1.3.1** | 2026-08-26 | 📍 **Lọc CSDL hành chính theo tỉnh/thành** — dropdown trong Cài đặt chung cho phép chọn 1 trong 8 tỉnh/thành (TP.HCM, Bình Dương, Bình Phước, Bình Thuận, Đồng Nai, Hà Nội, Cần Thơ, Đà Nẵng) hoặc "Tất cả"; khi đã chọn tỉnh, gợi ý địa chỉ 📍 chỉ hiện xã/phường thuộc tỉnh đó — nhanh hơn, chính xác hơn; lựa chọn tự lưu vào localStorage |
| **v1.3.0** | 2026-08-26 | 🆕📖⏱ **3 tính năng lớn**: (1) **Popup chọn Mới/Tiếp tục** khi nhấn tờ khai — nếu có dữ liệu đang dở sẽ hỏi "Tiếp tục tờ khai cũ" hay "Bắt đầu tờ khai mới" (tự lưu lịch sử trước), có thể cài sẵn "Luôn mở cũ" / "Hỏi lại" / "Luôn mở mới" trong Cài đặt chung; nút ➕ Tờ khai mới chuyển vào đầu modal ⚙️ Cài đặt tờ khai (bỏ khỏi header); (2) **Hướng dẫn sử dụng** tích hợp trong Cài đặt chung — tab "📖 Hướng dẫn" với giới thiệu app, giải thích 3 loại tờ khai, 6 bước sử dụng, hướng dẫn đồng bộ đám mây và mẹo nhanh; (3) **Thanh đa nhiệm cải tiến** — giữ nguyên vị trí slide khi ẩn/mở lại app (không reset về slide đầu), cố định 10 giây chờ sau mỗi slide (ngắn) hoặc 10 giây sau khi cuộn xong chữ dài rồi mới chuyển slide tiếp theo |
| **v1.2.9** | 2026-08-26 | 📡🌙 **Thanh đa nhiệm nâng cấp**: (1) **Kiểm tra kết nối thật** — ping DB Supabase (đọc 1 row thật), chỉ báo "Đã kết nối" khi server xác nhận thành công, báo lỗi rõ ràng nếu thất bại — không báo ảo; ping tự động mỗi 60 giây, sau mỗi lần đăng nhập và sau mỗi lần push thành công; (2) **Slide âm lịch** — hiện ngày/tháng âm lịch hiện tại với icon pha mặt trăng đúng theo chu kỳ (🌑🌒🌓🌔🌕🌖🌗🌘); (3) **Slide trạng thái đọc/ghi đám mây** — chỉ xuất hiện sau khi ping thật thành công hoặc thất bại, ghi rõ thời gian xác nhận |
| **v1.2.8** | 2026-08-25 | 🔑 Đổi sang Legacy anon key (`eyJhbG…`) — tương thích hoàn toàn với Supabase JS SDK v2, đảm bảo kết nối đám mây hoạt động ổn định |
| **v1.2.7** | 2026-08-25 | 🔑 Gắn Supabase Publishable Key thật vào app (`sb_publishable_bfcAZrSZ…`) — không cần nhập key thủ công, mở app là kết nối ngay |
| **v1.2.6** | 2026-08-25 | 🎨☁️ **3 sửa đổi giao diện cloud**: (1) Thanh `gd-bar` ở **app-screen** được khôi phục hiển thị đầy đủ (trước bị thu nhỏ chỉ còn icon ☁️); (2) Thanh `gd-bar` ở **trang chủ** được kéo vào bên trong header gradient vàng — nổi bật, tương phản cao thay vì nằm trên nền trắng; (3) **Supabase URL/Key hardcode** vào app — bỏ màn hình cài đặt URL/Key và option "Đổi cấu hình", người dùng chỉ cần đăng nhập/đổi tài khoản, không thể thay đổi server |
| **v1.2.5** | 2026-08-25 | 🔄📍 **3 cải tiến lớn**: (1) **Restore màn hình sau reload** — đang nhập tờ khai nào, reload xong tự trở về đúng tờ khai đó (dùng `sessionStorage`), nhấn 🏠 về trang chủ mới xóa vị trí; (2) **Pool gợi ý dùng chung tất cả tờ khai** — giá trị đã nhập ở tờ khai này tự xuất hiện gợi ý ở tờ khai khác cùng loại field (chuẩn hóa label: tên người nộp thuế, địa chỉ, tỉnh/thành phố… gom chung 1 pool `tk2_ac_pool_v1`), lưu cả khi blur không qua dropdown; (3) **CSDL hành chính tích hợp** — gõ tên phường/xã → tự gợi ý từ DB 300+ đơn vị hành chính (icon 📍), chọn xong tự điền quận/huyện + tỉnh/thành phố vào các ô tương ứng còn trống. Icon 👤 = từ lịch sử, 📍 = từ CSDL |
| **v1.2.4** | 2026-08-25 | 🎨 **Cải thiện giao diện đồng bộ đám mây**: tăng tương phản thanh `gd-bar` (nền đen mờ thay vì trắng mờ, chữ trắng đậm + text-shadow rõ nét trên nền vàng); modal "Đồng bộ đám mây" render động theo trạng thái, kiểu `gd-opt` dạng danh sách hành động giống app Mua Bán Mủ Cao Su — đã đăng nhập hiện avatar chữ cái + email + thông tin sync + 4 tuỳ chọn (Đẩy lên / Kéo về / Đăng xuất / Đổi cấu hình), chưa đăng nhập hiện form email+password có nút ẩn/hiện mật khẩu |
| **v1.2.3** | 2026-08-25 | ☁️🔄 **Đổi tên app thành "Khai Thuế"**. **Thêm đồng bộ đám mây Supabase**: thanh trạng thái `gd-bar` nằm dưới header (cả màn hình danh sách lẫn màn hình nhập liệu) — nhấn để mở menu cloud, hiển thị trạng thái kết nối, giờ đồng bộ cuối (kiểu cuộn chữ, animation `khTickerIn` giống app Mua Bán Mủ Cao Su). Tự động đẩy lên Supabase sau mỗi lần lưu/in tờ khai, sau khi ẩn/đóng tab, và đồng bộ ngầm mỗi **15 giây** khi không có thao tác (idle) — không reload trang, không làm mất dữ liệu đang nhập. Hỗ trợ đăng nhập / tạo tài khoản Supabase, kéo/đẩy thủ công, RLS đảm bảo dữ liệu chỉ thuộc về đúng tài khoản. sw.js bỏ qua cache cho mọi request đến Supabase API |
| **v1.2.2** | 2026-08-24 | ✨ Thêm loại tờ khai mới **🏞️ Tờ khai tiền sử dụng đất (Mẫu 01/TSDĐ, TT156/2013/TT-BTC)** vào danh sách chọn ở màn hình khởi động — đầy đủ mục [01]-[03] và 1-6 theo đúng mẫu gốc (thông tin người SDĐ & đại lý thuế, giấy tờ về quyền SDĐ, đặc điểm thửa đất, diện tích nộp tiền SDĐ theo từng loại đất, các khoản giảm trừ/miễn giảm), áp dụng đúng cơ chế chung của app: tick chọn mục cần khai, tự nhớ dữ liệu, mục tiền tệ tự có dấu chấm phân cách, tự động đề xuất khi gõ, lịch sử tờ khai và xuất/in PDF riêng biệt, không lẫn với 2 tờ khai đã có |
| **v1.2.1** | 2026-08-24 | 🚀✨ **Chuyển sang kiến trúc ĐA TỜ KHAI**: (1) Đổi tên app thành "Sổ Tay Khai Thuế", **icon mới**, màn hình khởi động giờ là **danh sách chọn loại tờ khai** (hiện có Tờ khai lệ phí trước bạ + **Tờ khai thuế TNCN chuyển nhượng bất động sản — Mẫu 03/BĐS-TNCN mới thêm**, đầy đủ mục [01]-[51] + VII, tự động tính thuế TNCN phát sinh/được miễn/phải nộp theo đúng công thức, có autocomplete/lịch sử/xuất PDF y hệt tờ khai trước bạ). Mỗi loại tờ khai có dữ liệu, lịch sử, cấu hình mục hoàn toàn riêng biệt (namespace theo `localStorage`), dữ liệu cũ tự động di trú không mất. (2) Nút **🖨️ In/Xuất** chuyển xuống cuối tờ khai (không còn nổi cố định) + thêm nút **💾 Lưu** để chủ động chốt 1 bản vào Lịch sử mà không cần mở bản xem trước. (3) Các mục tiền tệ (VD mục 1.7, 2.4, 3, [45], [47]...) tự thêm **dấu chấm phân cách hàng nghìn** khi gõ, in ra cũng định dạng lại cho dễ đọc. (4) **Tách bạch "⚙️ Cài đặt chung"** (chế độ mở lại/mở mới, dùng chung mọi tờ khai, ở màn hình danh sách) **khỏi "⚙️ Chọn mục cần khai"** (riêng từng tờ khai) — bỏ nút "Bỏ chọn tất cả"; nút Đóng/Huỷ/Đồng ý ở MỌI modal trong app không còn nổi cố định ở đáy nữa, nằm trong luồng nội dung, kéo hết mới thấy |
| **v1.2.0** | 2026-08-23 | 🐛✨ (1) **Sửa lỗi mất góc dưới trang khi xem trước** — nguyên nhân do khung xem trước dùng kéo (pan) tự chế bằng transform + chặn hẳn cuộn mặc định (`touch-action:none`), khiến phần cuối trang 2 (bảng đồng sở hữu, mục 6, chữ ký) vượt quá khung nhìn không thể chạm tới bằng thao tác cuộn thông thường; đã đổi sang **cuộn tự nhiên** của trình duyệt (vuốt 1 ngón cuộn bình thường), chỉ can thiệp khi chụm đúng 2 ngón để phóng to/thu nhỏ. (2) **Chuyển dropdown "Khi mở lại ứng dụng" vào trong ⚙️ Cài đặt**, đặt ngay trên đầu (trước đây tách riêng thành 1 thanh ngang dưới header). (3) **"➕ Tờ khai mới" giờ CHỈ xoá dữ liệu đã nhập, GIỮ NGUYÊN các mục đang tick chọn** ở Cài đặt (trước đây lỡ xoá luôn cả mục đã chọn) — các mục chỉ mất khi tự tay bỏ tick trong Cài đặt; áp dụng logic này cho cả chế độ khởi động "Mở tờ khai mới". (4) **Thay toàn bộ hộp thoại `confirm()` mặc định của trình duyệt bằng popup xác nhận riêng của app** — đẹp hơn, đồng bộ giao diện, không còn hộp thoại trắng đơn điệu của hệ thống |
| **v1.1.0** | 2026-08-22 | ✨ (1) Chọn "Mở lại tờ khai cũ / Mở tờ khai mới" dạng dropdown ngay trên đầu trang, tự nhớ lựa chọn. (2) 2 nút mới cạnh icon ⚙️: "➕ Tờ khai mới" và "🕘 Lịch sử tờ khai" (xem nhanh từ màn hình chính). (3) Tự động đề xuất khi gõ cho các trường nhập chữ ở "Thông tin người nộp thuế" và "Đặc điểm nhà, đất" — gợi ý lấy từ Lịch sử, giống kiểu chọn nhanh tên khách hàng ở app Mua Bán Mủ Cao Su |
| **v1.0.0 (giai đoạn đầu)** | 2026-08-21 – 2026-08-22 | Phát hành lần đầu và các lần chỉnh sửa nhanh trong giai đoạn phát triển ban đầu (gộp chung 1 dòng): đầy đủ mục số [01]-[15] và 1.x-6 của Mẫu 01/LPTB; cơ chế tick chọn hiển thị + tự nhớ/xoá dữ liệu theo mục; bản in/PDF luôn hiện đủ mục (mục chưa tick hiện dấu chấm chấm giống bản giấy gốc); ô [05] Mã số thuế dạng từng ô vuông (10+4 ô); điểm ngắt trang khớp đúng mẫu gốc (trang 1 hết ở mục 1.7, trang 2 từ "2. Nhà:"); cơ chế xem trước/xuất PDF bằng html2canvas + jsPDF (khổ A4 đứng, chụp tuần tự từng trang tránh lỗi mất góc, có CDN dự phòng); tính năng Lịch sử tờ khai (tự lưu mỗi lần xuất, xem lại/nạp lại/xoá từng tờ) |
