# TP Growth Analytics Implementation Report V1

## 1. Executive summary

- Framework: React `19.2.7` (resolved install), TypeScript `5.8.3`, Vite `6.4.3`, Tailwind CSS Vite plugin `4.3.1`.
- Router: conditional pathname router tự viết trong `src/App.tsx`; không có router package; anchor navigation tạo full reload.
- Tracking trước thay đổi: không có GTM/GA4/gtag/dataLayer/pixel runtime, analytics package, consent system hoặc tracking environment variable. Keyword match cũ thuộc nội dung bài/ảnh.
- Kiến trúc: typed React event -> `trackAnalyticsEvent` -> một `window.dataLayer` -> GTM Web -> GA4.
- Page View owner: duy nhất Google tag trong GTM trên `Initialization - All Pages`; app không emit Page View và GTM không dùng History Change ở V1.

## 2. Project inventory

| Area | Current state | Decision | Files involved |
| --- | --- | --- | --- |
| Entry | React `createRoot`, `StrictMode` | Không đặt tracking trong effect/render | `src/main.tsx` |
| Routing | `window.location.pathname`; full reload anchors | GTM sở hữu document Page View | `src/App.tsx`, `src/config/navigation.ts` |
| Layout | Không có root layout; page tự compose Header/Footer; Homepage có footer riêng | Instrument shared Header và module click thật | `src/components/Header.tsx`, page files |
| Pages | Static route branches + dynamic Growth Note slug từ data | Content ID dùng route slug | `src/pages/*`, `src/data/blogPosts.ts` |
| Content | 73 Growth Notes trong TypeScript data; case studies hard-coded trong pages | Không thay content; track card click | `src/data/blogPosts.ts`, index pages |
| Build | Vite + React + Tailwind plugins | Conditional HTML transform cho GTM script/noscript | `vite.config.ts` |
| TypeScript | bundler resolution, isolated modules, noEmit | Discriminated union analytics schema | `tsconfig.json`, `src/lib/analytics/*` |
| Environment | Vite/public convention chưa có tracking var; `.env*` ignored except example | Thêm duy nhất `VITE_GTM_ID` | `.env.example`, `.gitignore` |
| Deployment | Không có Vercel/Netlify/Docker/Cloud config trong repo | Hosting phải tự set env và rebuild | repository root |
| Scripts | `dev`, `build`, `preview`, `clean`, `lint`; `lint` chạy `tsc --noEmit`; không có test script riêng | Chạy command thực tế, không giả định | `package.json` |
| Existing tracking | Không có runtime implementation; không có hard-coded ID | GTM là source of truth mới | toàn repo scan |
| Forms/backend | Không có `<form>`, submit handler, API endpoint hoặc success state | Không emit lead/form events | `src/**/*` |
| SEO | Base title/favicon; title/meta riêng ở một số detail pages; không sitemap/robots/canonical/404 | Không sửa SEO trong task; ghi nhận attribution không bị router xóa | `index.html`, page effects |

## 3. Routing inventory

Tất cả route dùng application shell hiện tại; navigation bằng `<a href>` và full document load. Không có client-side transition.

| Path | Page component | Type | Title/metadata riêng | CTA/conversion intent |
| --- | --- | --- | --- | --- |
| `/` | `HomepageV2` | Static fallback/home | Base `<title>Thanh Phu Growth</title>` | Case/Growth System/Growth Note content; `/lam-viec-voi-phu` CTA |
| `/Growth-System-Framework` | `GrowthSystemDetail` | Static, case-sensitive | Dynamic title + description | Case cards; final work-with-Phú CTA |
| `/case-study` | `CaseStudyPage` | Static | Base title | 4 case-study cards |
| `/case-study/paint-and-more-growth-system` | `PaintMoreCaseStudyPage` | Static | Dynamic title + description | Framework CTA; placeholder Zalo |
| `/case-study/blackvue-dr750-lte-growth-system` | `BlackVueCaseStudyPage` | Static | Dynamic title, description, OG title/description/image | Framework CTA; placeholder Zalo |
| `/case-study/gnet-g-on-x-growth-system` | `GnetGonxCaseStudyPage` | Static | Dynamic title, description, OG fields | Framework CTA; placeholder Zalo |
| `/case-study/fnb-tiktok-sales-system` | `FnbTiktokCaseStudyPage` | Static | Dynamic title, description, OG fields | TikTok outbound; Framework CTA; placeholder Zalo |
| `/growth-notes` | `GrowthNotesPage` | Static index | Base title | 73 data-driven Growth Note cards (12 initially visible) |
| `/growth-notes/toi-khong-tin-vao-mot-cong-thuc-marketing` | `StartHereGrowthNotePage` | Static special-case | Dynamic title, description, OG fields | Framework/Case Study links; placeholder Zalo |
| `/growth-notes/:slug` | `GrowthNoteDetailPage` + `getBlogPostBySlug` | Dynamic data route, 72 remaining valid slugs | Không có per-post title effect hiện tại | Back to Growth Notes; shared Header |
| `/lam-viec-voi-phu` | `WorkWithPhuPage` | Static | Dynamic title + description | Placeholder Zalo (`#`) only; no real submission |
| unknown path | `HomepageV2` | Fallback, không phải 404 | Base/home content | Giống homepage; đây là SEO gap hiện hữu |

Back/forward đi qua document history; mỗi page entry reloads. Hash click không đi qua router. Query/UTM vẫn nằm trong URL vì router chỉ đọc pathname.

## 4. CTA and interaction inventory

| Interaction | Route/component | Placement | Action hiện tại | Measurement decision |
| --- | --- | --- | --- | --- |
| Làm việc với Phú | `Header` trên mọi page | navbar/mobile menu | `/lam-viec-voi-phu` | `primary_cta_click` |
| Hero case studies | `HomepageV2` | hero | `/case-study` | `content_click`, `content_hub` |
| Hero work CTA | `HomepageV2` | hero | `/lam-viec-voi-phu` | `primary_cta_click` |
| Growth System links | `HomepageV2` | hero/body/CTA section | `/Growth-System-Framework` | `content_click`, `growth_system_framework` |
| Case Study cards | Homepage, `CaseStudyPage`, `GrowthSystemDetail` | card/list | 4 real case detail routes | `content_click`, stable slug |
| Growth Note cards | `GrowthNotesPage`, Homepage featured module | card | real dynamic article route | `content_click`, post slug/title |
| Ways to Work/final/mobile sticky | `HomepageV2` | card/CTA/mobile sticky | `/lam-viec-voi-phu` | `primary_cta_click` |
| Zalo navbar/page/footer | `navCta`, Footer, case pages, Work page | multiple | `#` or no handler | Không track; chưa phải business action |
| Facebook/Email footer | `Footer` | footer | `#` | Không track |
| Phone/Messenger | Không có real link | n/a | Không tồn tại | Không track |
| Booking | Không có provider URL | n/a | Không tồn tại | Không tạo runtime event |
| YouTube/TikTok/external case links | Homepage/YoutubeSection/case pages | body/card | real outbound URLs | GA4 Enhanced Measurement |
| Download | Không có business download link | n/a | Không tồn tại | Không custom `file_download` |
| Forms | Không có form | n/a | Không tồn tại | Không emit `form_start`/`generate_lead` |

## 5. Files changed by analytics task

| File | Lý do | Thay đổi chính | Rủi ro |
| --- | --- | --- | --- |
| `.env.example` | Public GTM config | Thêm placeholder `VITE_GTM_ID=` | Thấp; không chứa ID thật |
| `vite.config.ts` | GTM cần head + noscript đúng vị trí | Conditional HTML injection, ID validation | Thấp; sai/thiếu env thì không inject |
| `src/lib/analytics/types.ts` | Vendor-neutral schema | Typed event union, placement/content/contact types, dataLayer global | Thấp; compile-time only |
| `src/lib/analytics/track.ts` | Single analytics boundary | SSR-safe, one dataLayer, path/title enrichment, dev validation, non-throwing | Thấp; click không chờ network |
| `src/components/Header.tsx` | Shared primary navigation | Work-with-Phú click ở desktop/mobile | Thấp; giữ nguyên href/menu flow |
| `src/components/homepage/HomepageV2.tsx` | Main CTA/content modules | Explicit primary/content handlers ở hero, cards, modules, final/sticky CTA | Thấp; chỉ thêm onClick sync push |
| `src/pages/CaseStudyPage.tsx` | Shared case index intent | 4 card events | Thấp |
| `src/pages/GrowthNotesPage.tsx` | Shared data-driven content list | Cover/title/read-link cùng dùng one helper; mỗi click target phát một event | Thấp |
| `src/pages/GrowthSystemDetail.tsx` | Framework content/CTA | Case card clicks + final work CTA | Thấp |
| `docs/ANALYTICS_ARCHITECTURE.md` | Operating guide | Architecture, schema, GTM/GA4, QA, roadmaps | Không runtime |
| `docs/ANALYTICS_IMPLEMENTATION_REPORT.md` | Evidence/report | Inventory và mapping code thực tế | Không runtime |

Không sửa các thay đổi có sẵn của người dùng trong `Footer.tsx`, `BlackVueCaseStudyPage.tsx`, `GrowthNoteDetailPage.tsx`, `PaintMoreCaseStudyPage.tsx`.

## 6. Event map

| Event | User action | Component/routes | Parameters | GA4 status |
| --- | --- | --- | --- | --- |
| `primary_cta_click` | Click route `/lam-viec-voi-phu` | `Header` mọi route; Homepage hero/about/ways/final/mobile; `GrowthSystemDetail` final | common + `cta_name`, `destination_path`, `destination_type` | Code emits; cần tạo GA4 Event tag trong GTM |
| `content_click` | Chọn Case Study | Homepage list/proof, `/case-study`, Growth System case module | common + `content_type=case_study`, slug, public title | Code emits; cần GTM tag |
| `content_click` | Chọn Growth Note | Homepage featured note, `/growth-notes` cover/title/read link | common + `content_type=growth_note`, post slug/title | Code emits; cần GTM tag |
| `content_click` | Chọn Framework/content hub | Homepage hero/body/final | common + type/id/title | Code emits; cần GTM tag |
| `contact_click` | Chưa có action thật | none | typed future schema only | Không có emitter/tag trong V1 |
| `booking_click` | Không có booking thật | none | none | Không implemented |

## 7. Tracking audit result

- GTM injection owner: `vite.config.ts`, một plugin duy nhất.
- dataLayer owner: GTM bootstrap + utility cùng dùng `window.dataLayer || []`; không có `window.dataLayer = []`.
- GA4 Measurement ID: không có trong source.
- `gtag.js`: không có.
- Meta `fbq`, TikTok `ttq`, Google Ads conversion tag: không có.
- Runtime page event: không có `page_view`; tránh trùng với Google tag.
- Consent/cookie manager: không có.
- Analytics dependency: không cài package mới.

## 8. Manual actions for Phú

Thực hiện checklist chi tiết ở `ANALYTICS_ARCHITECTURE.md` sections 9–12. Tóm tắt thứ tự:

1. Tạo GTM Web container TP Growth, copy `GTM-...`.
2. Điền `VITE_GTM_ID` ở `.env.local` và hosting environment; rebuild/deploy.
3. Tạo GA4 property + Web data stream, copy `G-...`.
4. Trong GTM tạo Google tag với `G-...`, trigger `Initialization - All Pages`.
5. Tạo Data Layer Variables.
6. Tạo Custom Event trigger/tag riêng cho `primary_cta_click` và `content_click`; map đúng parameter.
7. Bật/kiểm tra Enhanced Measurement cho scroll, outbound click, file download; site search chỉ khi có search thật.
8. Dùng GTM Preview, Tag Assistant, GA4 Realtime và DebugView kiểm thử.
9. Không tạo contact/booking tag lúc này. Không cài gtag.js thứ hai.
10. Chưa publish GTM container từ task này; Phú review Preview rồi tự Submit/Publish.

## 9. Validation status

| Check | Result |
| --- | --- |
| `npm.cmd run build` | PASS; Vite production build hoàn tất. Có warning chunk JS > 500 kB đã tồn tại ở cấu trúc bundle, không phải analytics error. |
| `npm.cmd run lint` | PASS; script repository thực tế là `tsc --noEmit`. Repository không có ESLint script riêng. |
| Typecheck | PASS qua cùng command `npm.cmd run lint`. |
| Automated tests | NOT RUN; `package.json` không có test script/test runner. |
| GTM build không env | PASS; `dist/index.html` không có GTM URL/ID. |
| GTM build với test env | PASS; `GTM-TEST123` xuất hiện đúng ở một bootstrap script và một noscript iframe; test ID không được lưu vào source. Temp build đã được xóa. |
| Utility runtime harness | PASS; một input tạo một dataLayer event, trailing slash được normalize, query không đi vào payload, PII key bị drop, lỗi `push` bị catch. |
| Duplicate/static audit | PASS; một GTM injection owner, một `window.dataLayer` global, không app `page_view`, không History API tracking, không gtag/GA4 ID/ad pixel. |
| HTTP route smoke | PASS; 11 route samples + landing URL có UTM trả HTTP 200 và root shell. |
| UTF-8 | PASS; strict UTF-8 decode cho 11 task files và mojibake signature scan không có match mới. |
| `git diff --check` | PASS; không whitespace error. Git chỉ cảnh báo policy LF/CRLF của working copy. |
| UI/responsive runtime | NOT EXECUTED; browser backend không khả dụng trong phiên. Static diff xác nhận không sửa class/style/content, nhưng không tuyên bố visual QA ở 360/390/768/1440 đã pass. |
| GTM Preview / GA4 Realtime / DebugView | NOT EXECUTED; chưa có container ID thật, GA4 stream hoặc container config được publish. |

Không coi GTM/GA4 production là hoạt động cho đến khi Phú cung cấp ID thật, cấu hình container, deploy và kiểm thử Preview/DebugView.

## 10. Future-ready roadmap

- Google Ads/Meta/TikTok: reuse business events ở GTM; bổ sung chỉ sau consent và conversion definition thật.
- Consent Mode: CMP + default/update state trước advertising tags.
- Server-side GTM: Web container vẫn nhận cùng schema; route Google tag qua first-party server endpoint.
- CAPI/Events API: server-owned credentials, event ID và deduplication; không gọi từ browser utility.
- CRM/offline: backend lead ID, stage taxonomy, timestamps, consent, reconciliation và revenue source of truth.
- Revenue attribution: nối acquisition IDs/UTM với lead/order/revenue sau khi có backend lifecycle thật.

## 11. Not implemented

- Meta Pixel: **NOT IMPLEMENTED**.
- TikTok Pixel: **NOT IMPLEMENTED**.
- Google Ads tags/conversions: **NOT IMPLEMENTED**.
- Meta CAPI/TikTok Events API/advertising APIs: **NOT IMPLEMENTED**.
- Server-side GTM: **NOT IMPLEMENTED**.
- Consent Mode/CMP: **NOT IMPLEMENTED**.
- CRM, lead lifecycle, offline conversion, revenue attribution: **NOT IMPLEMENTED**.
- Form/lead/booking completion events: **NOT IMPLEMENTED** vì không có success state thật.

## 12. Search Console readiness

Technical SEO, sitemap, robots, canonical và hướng dẫn xác minh Search Console được ghi tại `docs/SEARCH_CONSOLE_SETUP.md`. Analytics taxonomy và GTM integration không thay đổi trong phase này.
