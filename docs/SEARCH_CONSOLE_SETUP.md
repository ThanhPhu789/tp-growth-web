# TP Growth Search Console Setup

## 1. Production domain source of truth

`VITE_SITE_URL` là nguồn duy nhất cho production origin dùng bởi canonical, sitemap và robots.

```dotenv
VITE_SITE_URL=https://example.com
```

Thay `https://example.com` bằng domain production thật. Giá trị hợp lệ phải:

- dùng HTTPS;
- chỉ chứa origin, không có path, query hoặc hash;
- thể hiện đúng hostname canonical đã chọn, ví dụ `example.com` hoặc `www.example.com`;
- không phải localhost, preview hoặc staging domain.

Repository hiện không cung cấp bằng chứng để chọn www hay non-www. Phú phải chọn hostname production thực tế, bảo đảm hostname còn lại redirect vĩnh viễn ở hosting, rồi dùng đúng hostname đó trong `VITE_SITE_URL`.

Production build cố ý fail nếu thiếu hoặc sai `VITE_SITE_URL`. Development server vẫn có thể chạy không có biến này, nhưng không tạo canonical cho đến khi biến được cung cấp.

## 2. Canonical strategy

`src/components/RouteMetadata.tsx` tạo đúng một `<link rel="canonical">` cho route hợp lệ sau khi React render. Canonical được xây từ:

```text
normalizeSiteUrl(VITE_SITE_URL) + normalizeRoutePath(window.location.pathname)
```

Do chỉ dùng pathname, canonical không chứa query string, UTM hoặc hash. Component xóa canonical duplicate nếu có và không canonical mọi trang về homepage.

Canonical route giữ nguyên casing thực tế. Growth System hiện tồn tại tại `/Growth-System-Framework`; `/growth-system-framework` không phải route hợp lệ và được xử lý như Not Found.

Growth Note dùng `/growth-notes/{slug}`. Case Study dùng đúng bốn detail route được khai báo trong `src/config/site.ts`.

Đây là client-rendered canonical vì project là Vite SPA không có SSR/prerender. Google có thể đọc canonical sau render, nhưng production host vẫn phải phục vụ JS và deep link chính xác.

## 3. Sitemap generation strategy

`scripts/generateSeoArtifacts.ts` chạy trong Vite production build qua plugin `tp-growth-seo-assets` ở `vite.config.ts`.

- Static/index routes và Case Study routes đến từ `src/config/site.ts`.
- Growth Note slugs được đọc trực tiếp từ `src/data/blogPosts.ts` bằng TypeScript AST.
- Build fail nếu slug trống, duplicate hoặc sai định dạng.
- Sitemap không chứa query, hash, trailing-slash duplicate, fallback hoặc route không tồn tại.
- Không có `<lastmod>` vì `BlogPost` chưa có nguồn ngày xuất bản/cập nhật thật và nhất quán.

Production artifact:

```text
/sitemap.xml
```

Coverage hiện tại:

- 5 static/index routes;
- 4 Case Study detail routes;
- 73 Growth Note detail routes;
- tổng cộng 82 canonical URLs.

## 4. Robots strategy

Production artifact:

```text
/robots.txt
```

Nội dung được generate từ cùng `VITE_SITE_URL`:

```text
User-agent: *
Allow: /

Sitemap: https://your-production-domain.example/sitemap.xml
```

Robots không block toàn site, JS, CSS hoặc assets. Không dùng robots để bảo vệ dữ liệu riêng tư.

## 5. Dynamic route coverage

Sitemap tự mở rộng khi thêm một object Growth Note có `slug` hợp lệ vào `src/data/blogPosts.ts`. Không cần cập nhật sitemap thủ công.

Khi thêm Case Study route mới, cần cập nhật cả:

1. route branch trong `src/App.tsx`;
2. `CASE_STUDY_ROUTES` trong `src/config/site.ts`.

Build-time validation sẽ bảo vệ duplicate, nhưng chưa thể tự chứng minh một Case Study route mới đã được nối vào router nếu manifest không được cập nhật.

## 6. UTM and canonical behavior

URL landing có thể giữ attribution, ví dụ:

```text
https://example.com/growth-notes?utm_source=tiktok&utm_medium=organic_social&utm_campaign=personal_brand
```

Browser và GA4 vẫn thấy query để attribution hoạt động. Canonical chỉ là:

```text
https://example.com/growth-notes
```

Application không redirect, xóa hoặc ghi đè UTM.

## 7. Indexability policy

- Các route hợp lệ không có `noindex` hoặc `nofollow`.
- `robots.txt` cho phép crawl public site.
- Unknown path và Growth Note slug không tồn tại render Not Found và nhận `noindex,follow`.
- Sitemap chỉ chứa canonical public routes.
- Không thêm `google-site-verification` meta tag vì phương án chính là Domain Property + DNS TXT.

## 8. 404 and soft-404 limitation

Trước thay đổi, mọi unknown path render Homepage và trả HTTP 200, tạo nguy cơ soft 404.

Sau thay đổi, frontend render Not Found riêng, không có canonical và có `noindex,follow`. Tuy nhiên Vite development/preview và nhiều static-host SPA rewrite vẫn trả HTTP 200 trước khi React chạy.

HTTP 404 thật cần cấu hình hosting/CDN phù hợp. Repository không có deployment config nên Codex không thể thêm rule provider-specific an toàn. Sau deploy, kiểm tra unknown URL bằng DevTools/`curl` và cấu hình host trả 404 nếu provider hỗ trợ mà không làm hỏng deep-link fallback. Không xem frontend Not Found là bằng chứng HTTP 404 đã pass.

## 9. Tạo Google Search Console Domain Property

1. Mở `https://search.google.com/search-console`.
2. Chọn **Add property**.
3. Chọn **Domain**, không chọn URL prefix.
4. Nhập root domain không có protocol/path, ví dụ `example.com`.
5. Search Console cung cấp DNS TXT record riêng cho property.

Domain Property bao phủ HTTP/HTTPS và các subdomain, nhưng chỉ có thể xác minh bằng DNS. Tham khảo [Verify site ownership](https://support.google.com/webmasters/answer/9008080?hl=en).

## 10. Thêm DNS TXT và verify

1. Đăng nhập DNS provider đang quản lý nameserver của domain.
2. Thêm TXT record đúng host/name và value do Search Console cung cấp; không chỉnh sửa token.
3. Không xóa hoặc ghi đè TXT verification của owner khác.
4. Chờ DNS propagate theo provider.
5. Quay lại Search Console và chọn **Verify**.
6. Giữ TXT record sau khi verify vì Google kiểm tra lại định kỳ.

Codex không tạo token, không chỉnh DNS và không bấm Verify thay người dùng.

## 11. Deploy và submit sitemap

1. Set `VITE_SITE_URL` thành production HTTPS origin ở hosting.
2. Rebuild và deploy.
3. Mở trực tiếp:
   - `https://your-domain/sitemap.xml`
   - `https://your-domain/robots.txt`
4. Xác nhận cả hai trả HTTP 200, không redirect sang login và dùng đúng hostname.
5. Search Console -> **Sitemaps**.
6. Nhập `sitemap.xml` hoặc absolute sitemap URL theo giao diện hiện tại.
7. Chọn **Submit** và chờ status **Success**.

Submitting chỉ báo cho Google vị trí file; sitemap phải được host công khai trước. Tham khảo [Sitemaps report](https://support.google.com/webmasters/answer/7451001?hl=en-GB).

## 12. URL Inspection checklist

Sau deploy, dùng URL Inspection -> **Test live URL** cho:

- homepage;
- `/Growth-System-Framework`;
- `/growth-notes`;
- một Growth Note mới và một Growth Note cũ;
- `/case-study` và bốn Case Study detail;
- `/lam-viec-voi-phu`;
- một URL có UTM để xác nhận Google-declared canonical bỏ query;
- một unknown URL để kiểm tra `noindex` và HTTP status thực tế.

Nếu live test thành công và trang quan trọng chưa được index, có thể chọn **Request indexing**. Tham khảo [URL Inspection](https://support.google.com/webmasters/answer/12482179?hl=en).

## 13. Báo cáo cần theo dõi

- **Pages / Page indexing:** indexed, duplicate, crawled/discovered not indexed, soft 404, 404.
- **Sitemaps:** fetch status, discovered URL count, parsing errors.
- **Core Web Vitals:** mobile và desktop field data.
- **HTTPS:** URL HTTPS không hợp lệ hoặc mixed canonical host.
- **Manual Actions:** kiểm tra ngay khi property được tạo và khi có cảnh báo.
- **Security Issues:** kiểm tra malware/hacked content warnings.

Không kỳ vọng mọi URL được index ngay. Ưu tiên critical canonical URLs và điều tra lý do loại trừ bằng URL Inspection.

## 14. Liên kết Search Console với GA4 sau này

Sau khi GA4 property hoạt động và Domain Property đã verify:

1. GA4 Admin -> Product links -> Search Console links.
2. Chọn verified Search Console property.
3. Chọn đúng GA4 Web data stream của production site.
4. Review và submit link.
5. Publish Search Console report collection trong GA4 Library nếu cần.

Cần GA4 Editor role và verified Search Console owner. Tham khảo [Connect Search Console to Google Analytics](https://support.google.com/analytics/answer/10737381?hl=en-EN).

## 15. Việc Codex không thể làm thay

- Chọn hoặc xác nhận production hostname khi repository không có bằng chứng.
- Set environment variable trên hosting.
- Deploy production build.
- Đăng nhập Search Console/DNS provider.
- Tạo hoặc thêm DNS TXT token.
- Verify property hoặc submit sitemap.
- Request indexing.
- Cấu hình HTTP 404/redirect www tại hosting chưa xác định.
- Xác nhận Google đã crawl/index trước khi production được deploy và Search Console thu thập dữ liệu.
