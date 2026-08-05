# TP Growth — Production Analytics & Search Console Launch

Runbook này là thứ tự triển khai bắt buộc cho GA4/GTM và Google Search Console foundation. Không đổi thứ tự, không publish GTM trước khi event đã được xác nhận trong Realtime/DebugView.

## 1. Pre-release gate

- Working tree đã qua TypeScript, lint, production build và `git diff --check`.
- Cloudflare production environment có `VITE_SITE_URL=https://thanhphugrowth.com`.
- Cloudflare production environment có `VITE_GTM_ID` dạng `GTM-...`; không lưu ID trong source.
- GA4 Measurement ID chỉ được cấu hình trong Google tag của GTM; không đặt trong application source.
- Production build có đúng một GTM head script, một noscript iframe, `sitemap.xml` và `robots.txt`.

## 2. Launch flow

`push main` → `Cloudflare deploy` → `Tag Assistant` → `GA4 Property / Web Stream` → `Google tag trong GTM` → `primary_cta_click` → `content_click` → `GA4 Realtime / DebugView` → `publish GTM` → `GSC Domain Property` → `DNS TXT` → `submit sitemap.xml` → `robots / canonical / URL Inspection`

## 3. Analytics rollout

1. Push checkpoint đã được duyệt lên `main` theo quy trình release riêng.
2. Chờ Cloudflare deploy production hoàn tất và xác nhận domain chính là `https://thanhphugrowth.com`.
3. Mở Tag Assistant, kết nối production site và xác nhận chỉ có một GTM container bootstrap.
4. Tạo hoặc chọn đúng GA4 Property và Web Stream cho TP Growth.
5. Trong GTM, tạo Google tag bằng Measurement ID của Web Stream. Không đưa Measurement ID về source hoặc environment của app.
6. Ở GTM Preview, click một CTA thật dẫn tới `/lam-viec-voi-phu`; xác nhận một event `primary_cta_click` cùng đúng parameters.
7. Click một Growth Note, Case Study hoặc Growth System module; xác nhận một event `content_click` cùng đúng parameters.
8. Kiểm tra cả hai event trong GA4 Realtime và DebugView. Mỗi click chỉ tạo một event, không có duplicate tag firing.
9. Chỉ khi các kiểm tra trên PASS mới publish GTM container version, kèm tên/version note có thể truy vết.

## 4. Search Console rollout

1. Tạo GSC Domain Property cho `thanhphugrowth.com`.
2. Thêm DNS TXT verification record theo giá trị do GSC cấp; không lưu TXT token vào repository.
3. Chờ DNS propagate và hoàn tất Verify trong GSC.
4. Mở `https://thanhphugrowth.com/sitemap.xml`, xác nhận URL production hợp lệ rồi submit `sitemap.xml` trong GSC.
5. Mở `https://thanhphugrowth.com/robots.txt`, xác nhận `Allow: /` và sitemap trỏ đúng production origin.
6. Dùng URL Inspection cho homepage, Growth System, Case Study, Growth Notes, một URL có UTM và một unknown URL.
7. Xác nhận URL hợp lệ có self-canonical không chứa query/UTM; unknown URL render 404 UI, không có canonical và có `noindex,follow`.
8. Xác nhận Cloudflare trả deep link đúng. Với unknown route, kiểm tra HTTP status production thực tế vì SPA fallback local có thể trả HTTP 200 trước khi React render.

## 5. Go / no-go

Chỉ GO khi Tag Assistant không báo duplicate container, hai business event xuất hiện đúng một lần trong GA4, GTM đã publish, Domain Property đã verify, sitemap fetch thành công và robots/canonical/URL Inspection đều đúng production origin. Nếu một gate FAIL, dừng release tại gate đó, sửa đúng owner rồi chạy lại toàn bộ validation.
