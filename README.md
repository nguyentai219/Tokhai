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

### 🤖 Đọc giấy tờ bằng AI (từ v1.5.1)

Chụp/chọn ảnh CCCD, giấy chứng nhận quyền sử dụng đất, hợp đồng… để AI (Claude) tự đọc và đề xuất
giá trị cho các mục của tờ khai đang mở:

1. Tạo API key ở **console.anthropic.com** (nạp tiền trước bằng thẻ Visa/Mastercard quốc tế), dán vào
   **⚙️ Cài đặt chung → 🤖 Đọc giấy tờ bằng AI**, chọn mô hình (Haiku 5.5 — rẻ, mặc định; hoặc
   Sonnet 5.5 — chính xác hơn) và nhập số dư đã nạp (USD)
2. Trong màn nhập liệu, nhấn **📷 Đọc giấy tờ bằng AI** → chụp hoặc chọn ảnh vào đúng nhóm **🟢 Bên mua**
   (bên nhận chuyển nhượng) / **🔵 Bên bán** (bên chuyển nhượng) — CCCD up đúng bên, sổ đỏ và hợp đồng up
   bên nào cũng được (tối đa 10 ảnh, app tự thu nhỏ còn cạnh dài 1600px) → có thể thêm ghi chú cho AI.
   AI tự điền thông tin mỗi bên vào đúng mục theo loại tờ khai (VD Lệ phí trước bạ: bên mua → [04]-[12],
   bên bán → 1.6.a; TNCN: bên bán → [04]-[12], bên mua → [33]-[35.2])
3. AI trả về danh sách mục đọc được → xem lại, sửa trực tiếp, bỏ tick dòng không muốn → **✅ Điền vào
   tờ khai** (mục chưa tick ở ⚙️ sẽ tự tick; mục đang có dữ liệu khác sẽ báo "Đang có: … → sẽ bị thay")

- **⚡ Tự động điền sau khi đọc ảnh** (công tắc trong Cài đặt chung, cùng mục AI, mặc định tắt): bỏ bước
  xem lại — app chỉ gửi cho AI danh sách **các mục đang tick** (đang hiện ô nhập) của tờ khai, rồi điền
  thẳng toàn bộ thông tin đọc được vào các mục đó; mục chưa tick bị bỏ qua. Chưa tick mục nào thì app báo
  và không gửi ảnh (không mất tiền). Ghi chú của AI hiện kèm trong thông báo sau khi điền. Lựa chọn bật/tắt
  được nhớ trên máy (khoá `ktai_auto_v1`), chỉ đổi khi người dùng tự gạt công tắc.
- **📥 Giữ kết quả chưa điền**: kết quả đọc xong (kể cả chỗ đã sửa, dòng đã bỏ tick ở màn xem lại) được lưu
  ngay vào máy (`ktai_pending_v1`, riêng từng loại tờ khai) — tải lại trang, lỡ đóng app vẫn còn. Nút AI
  trong tờ khai hiện "📥 Có kết quả AI đọc lúc … chưa điền", nhấn để mở lại màn xem lại. Kết quả chỉ mất khi
  bấm **✅ Điền vào tờ khai** hoặc **🗑️ Bỏ** (có hỏi lại).
- **📚 Kho khách hàng** (từ v1.5.6, đổi ở v1.5.7): AI đọc ảnh ra dạng **trung lập** — *người* (họ tên,
  CCCD, ngày/nơi cấp, địa chỉ, MST… kèm vai trò mua/bán), *bất động sản* và *hợp đồng* — rồi app tự ghép
  vào ô của từng loại tờ khai (`_aiGhep`): LPTB bên mua → [04]-[12], bên bán → 1.6.a, người mua thứ 2 →
  bảng đồng sở hữu (5); TNCN bên bán → [04]-[12], bên mua → [33]-[35.2], hợp đồng → [32] hoặc [36]; TSDĐ
  bên mua → người sử dụng đất. **Khách hàng và hợp đồng** được lưu vào kho `tk2_kho_v1` (đồng bộ đám mây,
  chống trùng theo số CCCD / hộ chiếu / họ tên và số + ngày hợp đồng). **Thửa đất không lưu** vào kho (mỗi
  lần mua bán chỉ khai 1 lần) — chỉ dùng trong lần đọc đó.
  - Dữ liệu AI đọc và dữ liệu **nhập tay** có giá trị như nhau: bấm **💾 Lưu** / **In** tờ khai thì thông
    tin từng bên đang nhập (có họ tên + CCCD/hộ chiếu/MST/địa chỉ) tự lưu vào kho; hoặc thêm trong kho.
  - **Cách 1 — nút 👤 Lấy khách hàng từ kho** (trong tờ khai, và trong cửa sổ đọc ảnh): chọn điền vào bên
    nào (VD LPTB: người nộp thuế/bên mua hoặc bên chuyển giao; TNCN: người nộp thuế/bên bán hoặc bên nhận),
    gõ tên/số CCCD → chọn → tự điền đủ thông tin khách vào đúng các ô của bên đó (tự tick mục).
  - **Cách 2 — nhấn vào ô tên/CCCD/MST** của 1 bên trong tờ khai: hiện ngay danh sách khách trong kho
    (📚, nền xanh), gõ để lọc; chọn 1 khách → điền đủ thông tin khách vào các ô của bên đó. Ô nào thuộc bên
    nào được suy tự động từ `_aiGhep` (`_khachViTri`), không khai báo tay.
  - **Quản lý kho** (Cài đặt chung → 📚 Kho khách hàng): tìm, **➕ Thêm khách hàng / hợp đồng**, nhấn
    **✏️** sau tên để sửa (có 💾 Lưu, 🗑️ Xoá), ô AI đọc không chắc hiện nền vàng; lưu tay thì bỏ đánh dấu.
  - Màn xem lại sau khi AI đọc vẫn có ô chọn Bên mua/Bên bán (kèm người thứ 2)/Thửa đất (của lần đọc
    này)/Hợp đồng và nút ⇄ đảo vai trò.
- **♻️ Không đọc lại đúng file ảnh đã đọc**: mỗi ảnh lấy dấu vân tay SHA-256 từ file gốc (`ktai_cache_v2`,
  tối đa 150 lần đọc, chỉ trên máy). Chọn lại đúng file đó → báo "đã được đọc lúc …", nhãn **♻️ Đã đọc**,
  dùng lại kết quả cũ (0đ) cho mọi loại tờ khai; ảnh CCCD chuyển sang nhóm kia thì tự đảo vai trò (hợp đồng
  ghi rõ 2 bên thì giữ nguyên). Nhấn nhãn → **🔄 Đọc lại** nếu muốn AI đọc lại. Ảnh chụp lại (file khác) vẫn
  phải đọc — khi đó dùng 📚 Kho giấy tờ để khỏi chụp.
- **🟨 Ô AI đọc không chắc chắn**: với mỗi giá trị AI trả kèm cờ `khong_chac` (ảnh mờ, bị che, khó đọc).
  Các ô đó được tô **nền vàng nhạt** kèm dòng "⚠️ AI đọc không chắc chắn — kiểm tra lại", cả ở màn xem lại
  lẫn trong tờ khai sau khi điền. Đánh dấu lưu trong `valuesMap.__aiMo` (đi cùng tờ khai: lịch sử, đồng bộ,
  tải lại app vẫn còn), tự mất khi người dùng sửa ô đó, bỏ tick mục, hoặc bắt đầu tờ khai mới.
- **Số dư ước tính**: Anthropic không cho đọc số dư bằng API key thường, nên app tự trừ theo số token
  Anthropic báo về sau mỗi lần đọc (Haiku 5.5: $0,10/$0,50; Sonnet 5.5: $2/$10 mỗi 1 triệu token đọc
  vào/viết ra), hiện thông báo biến động và lưu lịch sử trừ tiền trong Cài đặt chung. Nhập lại số dư
  thật sau khi nạp thêm.
- **Hết số dư / sai key / mất mạng**: app báo rõ lý do, không đọc ảnh được nhưng mọi chức năng khác
  (nhập tay, lưu, in PDF, đồng bộ) vẫn dùng bình thường.
- **API key, mô hình, số dư** lưu trong localStorage với prefix `ktai_` — chỉ trên máy đó, KHÔNG đồng bộ
  lên Supabase (cloud sync chỉ xử lý khoá `tk2_`). Ảnh không được lưu lại.
- Thư viện chính thức `@anthropic-ai/sdk` 0.132.1 được đóng gói sẵn thành `anthropic-sdk-0.132.1.js`
  (esbuild, IIFE, gán `window.AnthropicSDK`), chỉ tải khi bấm đọc lần đầu. Gọi `messages.parse()` với
  structured outputs (`output_config.format`) để nhận JSON đúng khuôn `{values, tables, ghi_chu}`.

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
anthropic-sdk-0.132.1.js  Thư viện @anthropic-ai/sdk đóng gói sẵn (chỉ tải khi dùng "Đọc giấy tờ bằng AI")
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
| **v1.5.8** | 2026-10-25 | 🐛 Sửa lỗi nhập ngày (VD ngày sinh trong kho khách hàng) bị báo sai định dạng: bộ chọn ngày của Android tự chèn "/" nên gõ thêm "/" thành "21//09/1986". Mọi ô ngày trong app (tờ khai, ô con, lựa chọn có ngày, màn xem lại AI, kho khách hàng) đổi sang ô gõ số dd/mm/yyyy tự chèn "/" — gõ `21091986` hay `21/09/1986` đều được; ngày không có thật (VD 31/02) tô đỏ và không cho lưu vào kho. Giá trị lưu vẫn là yyyy-mm-dd như cũ |
| **v1.5.7** | 2026-10-25 | 👤 **Kho khách hàng**: chọn khách theo 2 cách — nút **👤 Lấy khách hàng từ kho** (chọn bên, gõ tên → điền đủ thông tin khách) và **nhấn vào ô tên/CCCD/MST** hiện đề xuất 📚 từ kho, chọn là điền đủ cả bên đó. Dữ liệu nhập tay = dữ liệu AI: Lưu/In tờ khai tự lưu khách vào kho; quản lý kho có ➕ thêm, ✏️ sửa (💾 Lưu, 🗑️ Xoá). Không lưu thửa đất vào kho nữa (chỉ dùng trong lần đọc) |
| **v1.5.6** | 2026-10-25 | 📚 **Kho giấy tờ đã đọc**: AI đọc ảnh ra dạng trung lập (người / bất động sản / hợp đồng, không gắn với tờ khai), tự lưu vào kho đồng bộ đám mây, chống trùng theo số CCCD/GCN/hợp đồng; app tự ghép vào ô của từng loại tờ khai. Màn xem lại có ô chọn Bên mua/Bên bán (kèm người thứ 2)/Thửa đất/Hợp đồng và nút ⇄ đảo vai trò — đổi không cần đọc lại. Nút **📚 Điền từ kho giấy tờ (0đ)** điền không cần chụp ảnh. Quản lý kho (tìm, xoá) trong Cài đặt chung. Bộ nhớ ảnh đã đọc dùng được cho mọi tờ khai, ảnh CCCD đổi nhóm tự đảo vai trò |
| **v1.5.5** | 2026-10-25 | 📥 Giữ kết quả AI chưa điền: lưu ngay vào máy (kể cả chỗ đã sửa/bỏ tick), tải lại trang không mất, nút AI báo "Có kết quả … chưa điền"; chỉ mất khi Điền hoặc Bỏ. ♻️ Ghi nhớ ảnh đã đọc theo dấu vân tay SHA-256: chọn lại ảnh cũ thì báo và dùng lại kết quả cũ, chỉ gửi AI ảnh mới (không mất tiền); nhãn ♻️ Đã đọc / 🔄 Đọc lại trên ảnh; bỏ qua ảnh trùng |
| **v1.5.4** | 2026-10-25 | 🟨 Ô AI đọc **không chắc chắn** (ảnh mờ, khó đọc) được tô nền vàng nhạt kèm dòng nhắc kiểm tra — ở màn xem lại và trong tờ khai sau khi điền; vẫn giữ sau khi tải lại app, tự mất khi sửa ô/bỏ tick mục/tờ khai mới. Thông báo sau khi điền nêu số ô cần kiểm tra. Xác nhận công tắc ⚡ Tự động điền nhớ lựa chọn trên máy, chỉ đổi khi người dùng tự gạt |
| **v1.5.3** | 2026-10-25 | ⚡ Thêm công tắc **Tự động điền sau khi đọc ảnh** trong Cài đặt chung (mục 🤖 Đọc giấy tờ bằng AI): bật thì AI chỉ nhận danh sách các mục đang tick và điền thẳng thông tin đọc được vào các mục đó, không qua bước xem lại (chưa tick mục nào thì báo, không gửi ảnh). Thêm huy hiệu **VIP** vàng nổi bật sau chữ "Đọc giấy tờ bằng AI" (nút trong tờ khai, tiêu đề cửa sổ, Cài đặt chung, Hướng dẫn) |
| **v1.5.2** | 2026-10-25 | 🤖 Đọc giấy tờ bằng AI: tách khu chọn ảnh thành 2 nhóm **🟢 Bên mua** / **🔵 Bên bán** để lấy dữ liệu cả hai bên cho hợp đồng cần thông tin hai bên — CCCD up đúng bên, sổ đỏ/hợp đồng up bên nào cũng được. Mỗi ảnh gửi AI kèm nhãn nhóm; AI điền thông tin mỗi bên vào đúng mục theo từng loại tờ khai (LPTB: bên mua [04]-[12], bên bán 1.6.a; TNCN: bên bán [04]-[12], bên mua [33]-[35.2]). Tăng giới hạn lên 10 ảnh/lần |
| **v1.5.1** | 2026-10-25 | 🤖 **Đọc giấy tờ bằng AI (Claude)**: nút 📷 trong màn nhập liệu — chụp/chọn ảnh CCCD, sổ đỏ, hợp đồng… → AI đề xuất giá trị cho từng mục của tờ khai đang mở → xem lại, sửa, bỏ tick rồi điền vào tờ khai (tự tick mục, cảnh báo mục sẽ bị ghi đè, bảng đồng sở hữu thêm dòng). Cài đặt chung thêm mục nhập API key (chỉ lưu trên máy, không đồng bộ đám mây), chọn mô hình Haiku 5.5/Sonnet 5.5, số dư ước tính tự trừ theo token sau mỗi lần đọc kèm thông báo biến động và lịch sử trừ tiền. Hết số dư/sai key/mất mạng báo rõ lý do, nhập tay vẫn bình thường. Toast nhận thêm thời gian hiển thị tuỳ chọn |
| **v1.5.0** | 2026-08-29 | 🐛✨ Sửa sync + xóa gợi ý: (1) `cloudPullAll` nay xóa luôn localStorage key bị xóa trên cloud (trước chỉ ghi đè, không xóa → dữ liệu cũ còn sót); (2) Thêm nút "🧹 Xóa gợi ý trên máy này" trong 💡 Lịch sử gợi ý — xóa trực tiếp `tk2_ac_person_v1` và `tk2_ac_pool_v1` khỏi localStorage không cần Supabase |
| **v1.4.9** | 2026-08-29 | 🐛 Sửa 2 bug autocomplete: (1) `_acNormLabel`: đưa kiểm tra `cmnd_cccd` lên TRƯỚC `ma_so_thue` — label "Số CMND/CCCD/Hộ chiếu (trường hợp chưa có mã số thuế)" bị nhận nhầm thành `ma_so_thue` do label chứa cả hai từ; (2) `_acPersonSuggest`: khi đã có ho_ten khớp thì KHÔNG trộn dữ liệu người khác vào kết quả |
| **v1.4.8** | 2026-08-29 | 🗺️ Làm lại hoàn toàn CSDL TP.HCM: xây từ nguồn chính xác (NQ1685/NQ-UBTVQH15), đúng 168 xã/phường/đặc khu (113 phường + 54 xã + Côn Đảo). Không còn cấp quận/huyện. Gồm đủ khu vực TP.HCM cũ + 36 đơn vị Bình Dương cũ (có Xã Thanh An từ H. Dầu Tiếng) + 30 đơn vị Bà Rịa–Vũng Tàu cũ. Xóa dữ liệu sai của các phiên bản trước |
| **v1.4.7** | 2026-08-29 | ✨ Cải tiến autofill địa chỉ: (1) Bỏ tự động điền Quận/huyện (không chính xác sau sáp nhập NQ202); (2) Chỉ giữ tự động điền Tỉnh/thành phố; (3) Thêm toggle bật/tắt "Tự động điền Tỉnh/TP" vào Cài đặt chung (mặc định bật, lưu localStorage) |
| **v1.4.6** | 2026-08-28 | 🗺️ Bổ sung CSDL TP.HCM mở rộng theo NQ202/2025/QH15: thêm 75 xã/phường từ Bình Dương sáp nhập (TP. Dầu Tiếng, TP. Bến Cát, Huyện Bàu Bàng, Huyện Phú Giáo, TP. Tân Uyên, TP. Thủ Dầu Một, TP. Thuận An, TP. Dĩ An). Tổng 377 xã/phường, 30 quận/huyện. Xã Thanh An nay thuộc TP. Dầu Tiếng - TP.HCM |
| **v1.4.5** | 2026-08-28 | 🗺️ Bổ sung CSDL hành chính TP.HCM đầy đủ: từ 95 → 302 xã/phường, từ 7 → 22 quận/huyện. Bổ sung toàn bộ Huyện Củ Chi (22 xã gồm Thanh An), Huyện Hóc Môn (12 xã), Huyện Nhà Bè (7 xã), Huyện Cần Giờ (7 xã/thị trấn), Quận 3, 4, 5, 6, 7, 8, 10, 11, Bình Thạnh, Phú Nhuận, Tân Phú |
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
