# TP Growth Analytics Architecture V1

## 1. Mục tiêu hệ thống

V1 đo acquisition organic và hành vi nội dung bằng một boundary không phụ thuộc vendor. Source code chỉ phát business event vào `window.dataLayer`; Google Tag Manager Web (GTM) chịu trách nhiệm chuyển event sang Google Analytics 4 (GA4).

Không có ID GA4, Google Ads, Meta hoặc TikTok trong source. Không có form conversion giả, PII, consent implementation hoặc server-side tracking trong V1.

## 2. Kiến trúc hiện tại

```text
React component click
  -> src/lib/analytics/track.ts
  -> window.dataLayer (duy nhất)
  -> GTM Web container
  -> Google tag + GA4 Event tags
  -> GA4 Web data stream
```

GTM được Vite chèn vào HTML trong `vite.config.ts` khi `VITE_GTM_ID` tồn tại và đúng dạng `GTM-XXXXXXX`. Head script dùng `window.dataLayer = window.dataLayer || []`; iframe `noscript` được chèn ngay đầu `body`. Không có biến môi trường thì cả hai đều không xuất hiện.

## 3. Kiến trúc mở rộng tương lai

```text
Application -> typed dataLayer events -> GTM Web
                                      |-> GA4
                                      |-> Google Ads (future)
                                      |-> Meta Pixel (future)
                                      |-> TikTok Pixel (future)
                                      `-> first-party tagging endpoint / server GTM (future)
                                                               |-> vendor APIs (future)
                                                               `-> CRM/offline/revenue (future)
```

Event source không gọi SDK quảng cáo. Các destination tương lai phải được thêm ở GTM hoặc server container, không thêm logic vendor vào component.

## 4. Page View ownership

Owner duy nhất: **Google tag trong GTM**, trigger `Initialization - All Pages`.

Lý do:

- `src/App.tsx` chọn page bằng `window.location.pathname` và không dùng React Router.
- Internal navigation hiện dùng `<a href>` nên tạo document load mới.
- Không có `history.pushState`, `replaceState`, `popstate` hoặc client-side route transition.
- Application **không** push `page_view` hoặc virtual page event.
- GTM **không** được tạo History Change trigger cho GA4 Page View ở V1.
- Hash/anchor navigation không tải document mới nên không tạo Page View.
- Query/UTM không được dùng để chọn route, vẫn được giữ nguyên trong browser và có thể được GA4 đọc trên landing page.

Kỳ vọng: initial load, internal link, back và forward mỗi document load có đúng một Page View; render lại React không tạo Page View.

## 5. Event taxonomy

### Runtime events

| Event | Điều kiện phát | Parameters riêng | Runtime owner |
| --- | --- | --- | --- |
| `primary_cta_click` | Người dùng click CTA nội bộ thật dẫn đến `/lam-viec-voi-phu` | `cta_name`, `destination_path`, `destination_type` | Header, Homepage, Growth System final CTA |
| `content_click` | Người dùng click card/module Growth Note, Case Study hoặc Growth System | `content_type`, `content_id`, `content_title` | Homepage, Case Study index, Growth Notes index, Growth System case cards |

### Schema sẵn sàng nhưng chưa có emitter

| Event | Trạng thái | Lý do |
| --- | --- | --- |
| `contact_click` | Typed, không phát | Zalo/Facebook/Email hiện dùng `#` hoặc button không có action; chưa phải kênh liên hệ thật |
| `booking_click` | Chưa đưa vào runtime type | Không có booking URL/provider thật |

### Enhanced Measurement, không custom

- `click` cho outbound link: dùng GA4 Enhanced Measurement.
- `file_download`: dùng GA4 Enhanced Measurement; repository hiện không có download link business cần taxonomy riêng.
- `scroll`: dùng GA4 Enhanced Measurement.
- Site search: chỉ bật khi website có query parameter search thật; hiện không có search UI.

### Reserved, không emit trong V1

`form_start`, `generate_lead`, `booking_complete`, `qualified_lead`, `sales_accepted_lead`, `purchase`, `refund`, `crm_stage_change`, `offline_conversion`, `revenue_received`.

## 6. Parameter dictionary

| Parameter | Type/values | Quy tắc |
| --- | --- | --- |
| `event_version` | `1` | Bắt buộc, tăng version khi schema breaking |
| `page_path` | path bắt đầu bằng `/` | Utility tự lấy pathname, bỏ query và hash |
| `page_title` | string, optional | Utility lấy từ `document.title`; không nhận input người dùng |
| `placement` | `navbar`, `mobile_menu`, `hero`, `body`, `card`, `cta_section`, `footer`, `mobile_sticky` | Vị trí phân tích ổn định, không dùng label UI |
| `component_name` | string, optional | Tên module/component ổn định |
| `cta_name` | stable snake_case string | Chỉ có ở `primary_cta_click` |
| `destination_path` | path nội bộ allowlisted ở call site | Không gửi raw URL/query |
| `destination_type` | `internal_route`, `external_url`, `page_anchor`, `contact_channel` | Phân loại destination, không phải URL đầy đủ |
| `content_type` | `growth_note`, `case_study`, `growth_system_framework`, `content_hub` | Nhóm nội dung |
| `content_id` | slug/ID ổn định | Không dùng text hiển thị làm ID |
| `content_title` | title nội dung public | Không chứa dữ liệu cá nhân |
| `contact_method` | `zalo`, `phone`, `email`, `facebook`, `messenger` | Chỉ dùng khi có contact action thật |

## 7. PII policy

Không push tên người dùng, email, số điện thoại, message, form value hoặc URL đầy đủ có query. `trackAnalyticsEvent` có type whitelist và runtime validation chặn các key PII phổ biến. Khi bổ sung form, chỉ emit success event sau xác nhận backend và chỉ gửi ID/context không nhạy cảm; không gửi payload form.

## 8. UTM governance

| Kênh | `utm_source` | `utm_medium` | `utm_campaign` |
| --- | --- | --- | --- |
| TikTok | `tiktok` | `organic_social` | `personal_brand` |
| Facebook | `facebook` | `organic_social` | `personal_brand` |
| YouTube | `youtube` | `organic_social` | `personal_brand` |
| Zalo | `zalo` | `organic_social` | `personal_brand` |

Cho phép `utm_content` và `utm_term`. Giá trị phải lowercase snake_case hoặc kebab-case nhất quán trong cùng một trường, không dấu, không khoảng trắng, không PII. Ví dụ `utm_content=profile_bio` hoặc `utm_content=video_tracking_basics`.

Application không đọc, ghi đè hoặc xóa UTM. `App.tsx` chỉ đọc pathname nên URL như `/?utm_source=tiktok&utm_medium=organic_social&utm_campaign=personal_brand` và `/growth-notes?utm_source=facebook...` vẫn resolve đúng route.

## 9. Environment variables

```dotenv
VITE_GTM_ID=
```

- Local: tạo `.env.local`, điền `VITE_GTM_ID=GTM-XXXXXXX`.
- Hosting: tạo cùng biến trong cấu hình environment của production/preview rồi rebuild/redeploy.
- Không commit `.env.local`; `.gitignore` đã ignore `.env*` và allow `.env.example`.
- Không thêm `G-XXXXXXXXXX` vào source hoặc environment của app vì GA4 được cấu hình trong GTM.

## 10. Hướng dẫn GTM thủ công

1. Mở `https://tagmanager.google.com`, tạo Account/Container cho TP Growth, target platform **Web**.
2. Copy Container ID dạng `GTM-XXXXXXX`; điền vào `VITE_GTM_ID` ở local và hosting.
3. Build/deploy lại. Dùng View Source xác nhận một `gtm.js?id=GTM-...` trong head và một iframe `ns.html?id=GTM-...` ngay đầu body.
4. Trong GTM, tạo tag `GA4 - Google tag - All Pages`, type **Google tag**, Tag ID là Measurement ID của GA4 Web stream (`G-...`). Trigger `Initialization - All Pages`.
5. Không cài thêm `gtag.js` trực tiếp vào source. Không tạo tag GA4 configuration thứ hai.
6. Tạo Data Layer Variables (Data Layer Variable Name giống Variable Name):
   - `event_version`, `page_path`, `page_title`, `placement`, `component_name`
   - `cta_name`, `destination_path`, `destination_type`
   - `content_type`, `content_id`, `content_title`
   - `contact_method` chỉ để sẵn; chưa có trigger runtime V1.
7. Tạo Custom Event trigger chính xác theo event name, không regex gộp:
   - `CE - primary_cta_click`
   - `CE - content_click`
8. Tạo GA4 Event tag cho từng trigger:
   - Event Name `primary_cta_click`; map common params + `cta_name`, `destination_path`, `destination_type`.
   - Event Name `content_click`; map common params + `content_type`, `content_id`, `content_title`.
9. Không tạo tag `contact_click` hoặc `booking_click` cho đến khi website có emitter/action thật.
10. Preview và QA trước; task này không publish container.

## 11. Hướng dẫn GA4

1. Trong GA4 Admin, tạo property TP Growth nếu chưa có.
2. Data streams -> Add stream -> Web; nhập production domain và tên stream.
3. Copy Measurement ID `G-...` vào Google tag trong GTM, không đặt vào code.
4. Web stream -> Enhanced Measurement: xác nhận Page views, Scrolls, Outbound clicks và File downloads. Site search chỉ bật với query parameter thật.
5. Sau khi event đã nhận, tạo custom dimensions dạng Event-scoped cho các parameter cần report: `placement`, `component_name`, `cta_name`, `destination_type`, `content_type`, `content_id`, `event_version`. Không cần tạo custom dimension cho mọi field nếu chưa có use case.
6. Chỉ cân nhắc mark `contact_click` và `booking_click` là Key Event sau khi có action thật. V1 có thể cân nhắc `primary_cta_click` nếu `/lam-viec-voi-phu` thực sự là intent quan trọng. Không mark `page_view`, `scroll`, `content_click` chỉ để tăng số conversion.

## 12. Debug checklist

- Build không có env: không có `googletagmanager.com`, `gtm.js` hoặc iframe GTM trong `dist/index.html`.
- Build với `VITE_GTM_ID=GTM-TEST123`: đúng một head script và một noscript iframe; cùng ID.
- GTM Preview/Tag Assistant: Google tag fire một lần mỗi page load.
- Không tạo History Change trigger ở V1.
- Click một CTA/card: đúng một custom event trong Data Layer; click icon/text child vẫn chỉ một event vì handler nằm trên anchor.
- Không click: render, hover và scroll không phát custom business event.
- GA4 DebugView/Realtime: tên và parameter khớp bảng.
- Network/ad blocker failure không làm hỏng navigation.
- Test direct URL có UTM, internal link, reload, back, forward và anchor hash.
- Inspect Data Layer: không có email, phone, name, message hoặc query string.

## 13. Future ads roadmap

Sau khi có consent và conversion thật, GTM có thể nghe cùng event schema để gửi Google Ads, Meta Pixel hoặc TikTok Pixel. Không đổi component event theo vendor. Mapping quảng cáo phải có version, deduplication/event ID và kiểm chứng business outcome trước khi dùng bidding.

## 14. Consent roadmap

Chưa triển khai. Bước tương lai: chọn CMP, định nghĩa consent categories, áp default state trước GTM, cập nhật Consent Mode bằng consent APIs, kiểm tra region behavior và chặn advertising tags khi chưa được phép. Không dùng Custom HTML để tự chế consent.

## 15. Server-side roadmap

Chưa triển khai. Khi có nhu cầu: tạo GTM Server container, first-party tagging domain, cấu hình `server_container_url` trong Google tag, thiết kế allowlist/redaction, monitoring, retry và cost controls. Web dataLayer/event taxonomy được giữ nguyên.

## 16. CRM/offline conversion roadmap

Chưa triển khai. Cần có form/booking success thật, backend-generated lead ID, consent/legal basis, CRM stage dictionary, event_id/deduplication và mapping revenue. `generate_lead`, qualified/offline/revenue chỉ emit từ trạng thái business đã được xác nhận, không từ click intent.
