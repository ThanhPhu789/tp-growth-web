export type StartHereSection = {
  id: string;
  title: string;
  intro: string[];
  quotes?: string[];
  bullets?: string[];
  flow?: string[];
  closing?: string[];
  closingQuotes?: string[];
  link?: {
    label: string;
    href: string;
  };
};

export const openingPrinciples = [
  ['01', 'CHỌN ĐÚNG GAME', 'Hiểu business kiếm tiền bằng cách nào trước khi chọn kênh hoặc công cụ.'],
  ['02', 'XÂY VỪA ĐỦ', 'Không overbuild một hệ thống vượt quá khả năng vận hành và biên lợi nhuận.'],
  ['03', 'NỐI CÁC ĐIỂM CHẠM', 'Content, Ads, Website, Tracking và Sales phải tiếp tục cùng một lời hứa.'],
  ['04', 'HỌC TỪ THỊ TRƯỜNG', 'Conversion và phản hồi sales phải quay lại giúp content và campaign tốt hơn.'],
  ['05', 'BIẾT KHI NÀO NÊN DỪNG', 'Doanh thu tăng không đồng nghĩa mô hình đáng để tiếp tục scale.'],
] as const;

export const startHereSections: StartHereSection[] = [
  {
    id: 'lam-nhieu-khong-dong-nghia-lam-dung',
    title: 'Làm nhiều không đồng nghĩa với làm đúng',
    intro: [
      'Doanh nghiệp thấy đối thủ làm TikTok thì cũng muốn làm TikTok. Thấy thương hiệu khác book KOL thì cũng muốn book KOL. Thấy AI phát triển thì muốn làm chatbot. Thấy website cũ thì muốn xây website mới. Thấy người khác chạy đa kênh thì mở Facebook, Google, YouTube và TikTok cùng lúc.',
      'Cuối cùng, doanh nghiệp có rất nhiều hoạt động nhưng không biết hoạt động nào đang thật sự tạo ra doanh thu.',
      'Tôi không phản đối đa kênh, KOL, PR, event hay công nghệ mới. Tôi đã trực tiếp triển khai và phối hợp những lớp đó trong nhiều dự án. Nhưng tôi không tin doanh nghiệp nên làm chúng chỉ vì “marketing bây giờ phải như vậy”.',
    ],
    bullets: [
      'Business model.',
      'Biên lợi nhuận.',
      'Độ dài hành trình mua.',
      'Năng lực vận hành.',
      'Khả năng phục vụ khách.',
      'Quy mô thị trường.',
      'Giai đoạn hiện tại của doanh nghiệp.',
    ],
    closing: [
      'Một business gia đình có biên lợi nhuận thấp không cần cùng một hệ thống với một thương hiệu công nghệ ô tô cao cấp. Một doanh nghiệp B2B muốn mở rộng bán lẻ không thể dùng cùng một cách chơi với một người bán đồ ăn qua TikTok.',
    ],
    quotes: [
      'Giảm số lượng công cụ không có nghĩa giảm tư duy hệ thống. Đôi khi, đó mới là dấu hiệu của việc hiểu hệ thống.',
    ],
  },
  {
    id: 'paint-and-more',
    title: 'Với Paint & More, vấn đề không nằm ở một quảng cáo',
    intro: [
      'Paint & More đã có sản phẩm, công nghệ, kinh nghiệm trong ngành và nền tảng khách hàng B2B. Điểm nghẽn không phải doanh nghiệp chưa từng làm marketing.',
      'Điểm nghẽn là những phần quan trọng chưa được nối thành một hành trình thống nhất: định vị sản phẩm, content, video, quảng cáo, website, tracking và đội ngũ bán hàng.',
      'Website cần tương xứng hơn với công nghệ sản phẩm. Social cần những tuyến nội dung rõ. Paid Media cần creative đủ tốt. Landing page phải tiếp tục đúng lời hứa mà quảng cáo đã bắt đầu. Tracking phải biết khách đang nhấn Hotline, Zalo hay gửi form. Sales cần tư vấn theo cùng một xương sống thông điệp.',
    ],
    quotes: ['Thi công siêu tốc — Sáng cũ, chiều mới.'],
    bullets: [
      'Content giải thích vì sao có thể rút ngắn công đoạn.',
      'Video cho thấy quá trình và công trình thật.',
      'Ads đánh vào nỗi đau về thời gian và sự bất tiện khi sửa nhà.',
      'Landing page tiếp tục đúng lời hứa.',
      'Sales tư vấn theo hiện trạng, số công đoạn và khả năng đưa không gian trở lại sử dụng sớm.',
      'Tracking ghi nhận những hành động có giá trị.',
    ],
    flow: ['CÔNG TRÌNH THẬT', 'CONTENT', 'PAID MEDIA', 'LANDING PAGE', 'SALES', 'THI CÔNG', 'PROOF MỚI', 'CONTENT'],
    closing: [
      'Mỗi công trình sau khi hoàn thiện lại tạo thêm hình ảnh, video và proof cho vòng tiếp theo. Đó không còn là một campaign quảng cáo. Đó là một vòng tăng trưởng.',
      'Hệ thống bán lẻ sau đó tạo ra doanh thu tích lũy ở quy mô hàng tỷ đồng. Nhưng sẽ không chính xác nếu quy toàn bộ kết quả cho website, quảng cáo hay một creative riêng lẻ. Kết quả đến từ việc các mắt xích bắt đầu hoạt động cùng nhau.',
    ],
    link: {
      label: 'Xem case Paint & More',
      href: '/case-study/paint-and-more-growth-system',
    },
  },
  {
    id: 'blackvue',
    title: 'Với BlackVue, điểm nghẽn lại là định vị',
    intro: [
      'BlackVue là thương hiệu camera hành trình cao cấp đến từ Hàn Quốc, đã có sản phẩm tốt và mạng lưới đại lý tại Việt Nam.',
      'Nhưng một sản phẩm có mức giá premium không thể được bán giống một chiếc camera hành trình phổ thông. Nếu truyền thông theo cách “camera nhiều tính năng, có thể lắp cho mọi dòng xe”, khách hàng sẽ nhanh chóng đưa sản phẩm vào cuộc so sánh giá.',
    ],
    quotes: ['Camera hành trình chuyên dành cho xe sang.'],
    closing: [
      'Điều này không có nghĩa chỉ xe sang mới có thể lắp BlackVue. Sản phẩm vẫn có thể được sử dụng trên nhiều dòng xe. Marketing cần một phân khúc ưu tiên đủ rõ để thị trường hiểu nhanh nhất BlackVue thuộc nhóm sản phẩm nào, vì sao mức đầu tư cao hơn và trải nghiệm nào khách hàng đang nhận được.',
    ],
    bullets: [
      'KOL trong ngành ô tô tạo authority.',
      'Reviewer và KOC mở rộng góc nhìn.',
      'Báo chí tạo thêm nguồn tham khảo.',
      'Cộng đồng xe cao cấp đưa sản phẩm vào đúng bối cảnh.',
      'YouTube giải thích công nghệ và tạo search footprint.',
      'Facebook Ads tạo nhu cầu và remarketing.',
      'Sales tư vấn theo dòng xe, nhu cầu giám sát và yêu cầu lắp đặt.',
      'Khách ngoài khu vực phục vụ trực tiếp được hỗ trợ và chuyển về đại lý phù hợp.',
    ],
    flow: ['TẠO NHU CẦU TẬP TRUNG', 'RETAIL EDUCATION', 'SALES ROUTING', 'MẠNG LƯỚI ĐẠI LÝ'],
    link: {
      label: 'Xem case BlackVue DR750 LTE',
      href: '/case-study/blackvue-dr750-lte-growth-system',
    },
  },
  {
    id: 'gnet-g-on-x',
    title: 'Với GNET G-ON X, bài toán là đưa một sản phẩm mới vào thị trường',
    intro: [
      'Một sản phẩm mới thường phải vượt qua ba rào cản: chưa biết, chưa hiểu và chưa tin. Chỉ đăng một bài giới thiệu không thể giải quyết hết cả ba.',
    ],
    bullets: [
      'Content giúp khách hiểu sản phẩm.',
      'KOL và reviewer tạo nhận biết.',
      'PR tạo nguồn tham khảo.',
      'Google Search giúp khách tìm lại thông tin.',
      'Admin group và cộng đồng tạo xác nhận xã hội.',
      'Event tại SECC giúp sản phẩm xuất hiện bằng con người, gian hàng và trải nghiệm thật.',
      'Paid Ads chủ động phân phối những tài sản đó.',
      'Remarketing tiếp tục bổ sung proof cho người đã quan tâm.',
      'Sales và hệ thống Msport tiếp tục cuộc trò chuyện.',
    ],
    closing: [
      'PR không kết thúc khi bài báo được đăng. Nó tiếp tục làm việc mỗi khi khách hàng tìm lại tên sản phẩm trên Google.',
      'Event cũng không kết thúc khi gian hàng đóng cửa. Ảnh, video, câu hỏi của khách và phản hồi từ thị trường tiếp tục trở thành content, paid creative, remarketing proof và tài liệu hỗ trợ sales.',
    ],
    quotes: ['Paid Media không thay thế niềm tin. Nó khuếch đại những tài sản đã có khả năng tạo niềm tin.'],
    link: {
      label: 'Xem case GNET G-ON X × Msport',
      href: '/case-study/gnet-g-on-x-growth-system',
    },
  },
  {
    id: 'fnb-tiktok',
    title: 'Với một business F&B nhỏ, tất cả những lớp trên lại là quá nhiều',
    intro: [
      'Khi xây kênh TikTok bán chân gà sốt Thái cho mô hình gia đình, chúng tôi không cần KOL lớn, báo chí, event hay hệ thống đa kênh.',
      'Sản phẩm có lợi thế tự nhiên trên video ngắn. Cận cảnh món ăn khiến người xem dừng lại; nước sốt, texture và quá trình trộn tạo cảm giác thèm; quá trình chế biến giúp người xem tin hơn; người bán thật tạo cảm giác gần gũi; comment và phản hồi trở thành social proof.',
      'TikTok có khả năng đưa video đến người chưa theo dõi, trong khi khoảng cách từ video đến inbox và đơn hàng tương đối ngắn. Vì vậy, lựa chọn là tập trung vào một chiến trường chính.',
    ],
    quotes: ['TikTok.'],
    bullets: [
      'Organic được dùng để thử hook, format và content angle.',
      'Video tạo khả năng giữ người, comment hoặc câu hỏi được quan sát kỹ hơn.',
      'Paid Media chỉ được dùng ở mức vừa phải để khuếch đại nội dung đã có tín hiệu.',
    ],
    flow: ['MÓN THẬT', 'VIDEO', 'NGƯỜI XEM HỎI', 'XÁC NHẬN ĐƠN', 'CHUẨN BỊ MÓN', 'GIAO HÀNG', 'FEEDBACK', 'CONTENT MỚI'],
    closing: [
      'Có giai đoạn kênh tạo doanh thu khoảng 75 triệu đồng mỗi tháng. Đây là doanh thu, không phải lợi nhuận. F&B có nguyên liệu, chế biến, đóng gói, giao hàng và khối lượng lao động trực tiếp.',
      'Khi số đơn tăng, công việc vận hành cũng tăng gần như tương ứng. Sau khi ưu tiên gia đình thay đổi, mô hình không còn phù hợp để tiếp tục scale.',
      'Kênh đã chứng minh acquisition hoạt động. Nhưng một business có thể thành công trong việc tìm khách mà vẫn không đáng tiếp tục nếu unit economics, năng lực vận hành và ưu tiên cuộc sống không còn phù hợp. Biết dừng cũng là một phần của tư duy growth.',
    ],
    closingQuotes: ['Không phải mọi thứ bán được đều đáng để tiếp tục scale.'],
    link: {
      label: 'Xem case F&B TikTok Sales System',
      href: '/case-study/fnb-tiktok-sales-system',
    },
  },
  {
    id: 'ads-khong-phai-dong-co',
    title: 'Ads không phải động cơ tăng trưởng',
    intro: [
      'Một trong những hiểu lầm phổ biến nhất là: ads đắt thì phải đổi target. Target có thể là vấn đề, nhưng chi phí quảng cáo còn bị ảnh hưởng bởi nhiều lớp khác.',
    ],
    bullets: [
      'Thông điệp.',
      'Creative.',
      'Offer.',
      'Trang đích.',
      'Tốc độ website.',
      'Conversion signal.',
      'Khả năng xử lý của sales.',
      'Chất lượng sản phẩm.',
      'Trải nghiệm sau bán.',
    ],
    quotes: ['Message × Creative × Offer × Landing Page × Conversion Signal × Sales Follow-up'],
    closing: [
      'Tôi dùng dấu nhân thay vì dấu cộng. Nếu một mắt xích gần bằng 0, hiệu quả toàn hệ thống có thể bị kéo xuống rất mạnh.',
      'Creative tốt nhưng offer yếu, khách vẫn không hành động. Ads kéo được traffic nhưng landing page kể một câu chuyện khác, khách sẽ rời đi. Lead nhiều nhưng sales gọi chậm hoặc tư vấn sai trọng tâm, doanh thu vẫn không tăng. Tracking gửi sai tín hiệu, nền tảng vẫn có thể học rất tốt — nhưng học sai hành động.',
    ],
  },
  {
    id: 'vai-tro-cua-kenh',
    title: 'Không phải kênh nào cũng làm cùng một nhiệm vụ',
    intro: [
      'Google Search, YouTube, Meta và TikTok không nên được xem như bốn nơi khác nhau để đăng cùng một quảng cáo.',
      'Google Search phù hợp với việc bắt nhu cầu đã hình thành. YouTube phù hợp với việc giải thích sản phẩm, xây niềm tin và hỗ trợ quá trình research. Meta và TikTok có thể mở rộng nhu cầu, thử nhiều creative angle và tiếp tục remarketing với người đã tương tác.',
      'Landing page tiếp tục câu chuyện mà quảng cáo vừa bắt đầu. Sales hoàn thiện phần màn hình không thể giải thích hết.',
    ],
    quotes: ['Vấn đề không phải tìm ra một kênh “tốt nhất”. Vấn đề là phân vai đúng cho từng kênh trong hành trình mua.'],
  },
  {
    id: 'traffic-chua-phai-ket-qua',
    title: 'Traffic chưa phải kết quả',
    intro: [
      'Một campaign có thể tạo ra rất nhiều lượt truy cập nhưng doanh nghiệp vẫn không biết những lượt truy cập đó đang làm gì. Họ có nhấn Hotline, mở Zalo, nhắn Messenger, gửi form, tạo đơn hàng hay chỉ vào trang rồi thoát?',
      'Tracking không nên bắt đầu bằng câu hỏi “chúng ta đã gắn đủ tag chưa?”. Nó nên bắt đầu bằng câu hỏi hành động nào thật sự có giá trị với business này.',
      'Với ngành dịch vụ, Hotline, Zalo, Messenger và Lead Form có thể là những conversion khác nhau. Không nên gom tất cả thành một sự kiện chung nếu giá trị kinh doanh và mức độ ý định của khách không giống nhau.',
    ],
    quotes: ['Gửi sai tín hiệu, thuật toán vẫn học rất nhanh — nhưng học sai thứ.'],
  },
  {
    id: 'tracking-khong-chi-de-bao-cao',
    title: 'Tracking không chỉ để làm báo cáo đẹp',
    intro: [
      'Web tracking phía trình duyệt có thể chịu ảnh hưởng bởi privacy restrictions, browser policy, iOS và các công cụ chặn theo dõi.',
      'Server-side GTM và Conversion API không loại bỏ hoàn toàn những giới hạn đó. Giá trị của chúng nằm ở việc giảm phụ thuộc vào pixel phía trình duyệt, kiểm soát cách dữ liệu được gửi tốt hơn và phân phối conversion event tới các nền tảng phù hợp.',
    ],
    bullets: [
      'Giảm sự phụ thuộc vào pixel phía trình duyệt.',
      'Kiểm soát cách dữ liệu được gửi tốt hơn.',
      'Phân phối conversion event tới các nền tảng phù hợp.',
      'Hạn chế ghi trùng bằng Event ID và deduplication khi được cấu hình đúng.',
      'Cải thiện chất lượng tín hiệu khi cấu hình và consent phù hợp.',
    ],
    flow: ['CUSTOMER ACTION', 'WEB GTM', 'SERVER-SIDE GTM', 'META / GOOGLE / TIKTOK / GA4', 'CAMPAIGN OPTIMIZATION'],
    closing: [
      'Mục tiêu cuối không phải xây một container GTM thật phức tạp. Mục tiêu là giúp doanh nghiệp biết ngân sách đang tạo ra hành động gì và giúp nền tảng học từ những hành động gần với giá trị kinh doanh hơn.',
    ],
  },
  {
    id: 'creative-va-tracking',
    title: 'Tracking tốt không cứu được creative yếu',
    intro: [
      'Creative tốt cũng không thể scale bền nếu tracking sai. Khi campaign có kết quả tốt, rất dễ nhìn vào Ads Manager và kết luận target này tốt, creative này thắng hoặc nền tảng này rẻ.',
      'Nhưng kết quả tốt thường là sản phẩm của nhiều yếu tố cùng lúc: thông điệp chạm đúng pain point, creative khiến khách dừng lại, offer đủ rõ, trang đích tiếp tục đúng lời hứa, conversion signal phản ánh đúng hành động, sales tiếp tục cuộc trò chuyện đúng cách và vận hành đáp ứng được nhu cầu.',
      'Một screenshot chi phí thấp chỉ phản ánh kết quả tại thời điểm test. Nó không phải cam kết rằng mọi campaign đều đạt mức tương tự.',
    ],
    quotes: ['Cách tiếp cận đúng không phải đi tìm một “mẹo ads rẻ”. Cách tiếp cận đúng là xây một vòng phản hồi.'],
    flow: ['CONTENT ANGLE', 'PAID DISTRIBUTION', 'CUSTOMER ACTION', 'CONVERSION TRACKING', 'SALES CONVERSATION', 'OBJECTION PATTERN', 'NEW CREATIVE', 'PAID DISTRIBUTION'],
    closing: ['Creative không chỉ được sản xuất. Nó phải được học từ phản hồi của thị trường.'],
  },
  {
    id: 'sau-lead-generated',
    title: 'Marketing không nên dừng ở Lead Generated',
    intro: [
      'Đây là điểm nhiều hệ thống bị gãy nhất. Marketing báo đã tạo được lead. Sales nói lead không chất lượng. Founder nhìn hai báo cáo khác nhau và không biết vấn đề nằm ở đâu.',
    ],
    flow: ['SOURCE', 'CAMPAIGN', 'CREATIVE', 'LEAD', 'SALES STATUS', 'QUALIFIED / LOST', 'REVENUE', 'FEEDBACK VỀ MARKETING'],
    closing: [
      'Khi marketing chỉ nhìn lead và sales chỉ nhìn doanh thu, doanh nghiệp mất đoạn dữ liệu quan trọng nhất ở giữa.',
      'Không biết creative nào kéo đúng nhóm khách, objection nào xuất hiện nhiều, sales đang xử lý chậm ở bước nào, nguồn nào tạo doanh thu thật hoặc nên sửa content, offer, target, landing page hay quy trình bán hàng.',
      'Đó là lý do tôi không xem CRM, tracking và dashboard là những công cụ đứng riêng. Chúng là lớp giúp doanh nghiệp học từ chính hoạt động bán hàng của mình.',
    ],
  },
  {
    id: 'campaign-de-lai-tai-san',
    title: 'Một campaign tốt phải để lại tài sản',
    intro: [
      'Nếu campaign kết thúc và doanh nghiệp quay lại số 0, hệ thống đó chưa thật sự tích lũy.',
    ],
    bullets: [
      'Content library.',
      'Video library.',
      'Search footprint.',
      'Tệp người đã tương tác.',
      'Customer proof.',
      'Landing page.',
      'Tracking infrastructure.',
      'Sales objection library.',
      'Dữ liệu về creative và nguồn traffic.',
      'Tài liệu hỗ trợ sales hoặc đại lý.',
      'Kinh nghiệm vận hành.',
    ],
    closing: [
      'Paint & More dùng công trình thật để tạo proof mới. BlackVue dùng xe thật, trải nghiệm lắp đặt và review để nuôi vòng tiếp theo. G-ON X dùng KOL, PR, Search, Community và Event để tích lũy niềm tin. Kênh F&B dùng từng món ăn, câu hỏi và phản hồi để tạo content mới.',
    ],
    quotes: ['Mỗi vòng tăng trưởng phải để lại nhiều tài sản hơn vòng trước.'],
  },
  {
    id: 'growth-system-la-gi',
    title: 'Growth System thực sự là gì?',
    intro: [
      'Không phải một bộ công cụ cố định. Không phải bắt buộc phải có website, CRM, KOL, PR, server-side tracking hay dashboard.',
      'Growth System là cách lựa chọn và kết nối đúng những thành phần cần thiết cho game hiện tại.',
      'Có business cần một hệ thống đa kênh. Có business chỉ cần một kênh thắng. Có campaign cần authority từ KOL và cộng đồng. Có campaign chỉ cần creative đúng và một flow đặt hàng thật ngắn.',
      'Có doanh nghiệp cần tăng ngân sách. Có doanh nghiệp cần dừng ads để sửa tracking, landing page hoặc sales. Có mô hình đang tạo doanh thu nhưng không nên tiếp tục scale.',
    ],
    quotes: ['Growth không phải lúc nào cũng là làm lớn hơn. Growth là đưa ra quyết định tốt hơn dựa trên cách toàn bộ hệ thống đang vận hành.'],
  },
  {
    id: 'dieu-toi-that-su-lam',
    title: 'Điều tôi thật sự làm',
    intro: [
      'Tôi không định vị mình là người chỉ chạy quảng cáo, làm website hay cài tracking. Những thứ đó là công cụ.',
      'Điều tôi làm là nhìn toàn bộ dòng chảy, sau đó xác định điểm nghẽn nằm ở đâu; phần nào cần xây mới; phần nào chỉ cần sửa; công cụ nào thật sự cần; công cụ nào chưa cần; nên tiếp tục scale hay nên dừng lại.',
      'Tôi đã làm những campaign lớn với nhiều lớp triển khai. Tôi cũng đã làm những thử nghiệm nhỏ chỉ với một sản phẩm và một kênh TikTok.',
    ],
    quotes: [
      'Điều quan trọng không phải campaign nhìn lớn đến đâu. Điều quan trọng là hệ thống có phù hợp với business model, có tạo ra hành động kinh doanh và có giúp doanh nghiệp học nhanh hơn sau mỗi vòng vận hành hay không.',
    ],
  },
  {
    id: 'growth-khong-den-tu-chay-nhieu-hon',
    title: 'Growth không đến từ việc chạy nhiều hơn',
    intro: [
      'Nhiều doanh nghiệp không thiếu traffic. Họ thiếu một thông điệp đủ rõ.',
      'Không thiếu lead. Họ thiếu cách phân biệt lead tốt và lead xấu.',
      'Không thiếu công cụ. Họ thiếu một hệ thống giúp các công cụ nói chuyện với nhau.',
      'Không thiếu người cố gắng. Họ thiếu một dòng phản hồi đủ ngắn để nhìn thấy điểm nghẽn trước khi tiếp tục đổ thêm tiền.',
    ],
    quotes: [
      'Business đang chơi game gì, và đâu là hệ thống nhỏ nhất đủ để thắng game đó?',
      'Đó là cách tôi hiểu về Growth Through Systems.',
    ],
  },
];

export const growthSystemFlow = [
  'BUSINESS MODEL',
  'MARKET & POSITIONING',
  'CONTENT',
  'PAID MEDIA',
  'WEBSITE / CONVERSION',
  'TRACKING',
  'SALES',
  'REVENUE',
  'FEEDBACK',
  'OPTIMIZATION',
  'SCALE OR STOP',
];

export const rightSizedQuestions = [
  'Business model kiếm tiền bằng cách nào?',
  'Biên lợi nhuận và chu kỳ mua ra sao?',
  'Điểm nghẽn nằm ở nhận biết, niềm tin, chuyển đổi, sales hay vận hành?',
  'Kênh nào có lợi thế tự nhiên nhất?',
  'Hành động nào cần được đo?',
  'Sales đang nhận và xử lý nhu cầu thế nào?',
  'Campaign để lại tài sản gì?',
  'Hệ thống có đáng để tiếp tục scale không?',
];
