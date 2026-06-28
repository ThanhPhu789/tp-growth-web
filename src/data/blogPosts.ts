export type BlogContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'visual'; variant: 'lead-pipeline' | 'lead-quality-comparison' }
  | { type: 'placeholder'; label: string; text: string };

export type BlogPost = {
  title: string;
  slug: string;
  category: string;
  readingTime: string;
  excerpt: string;
  content: BlogContentBlock[];
  cta: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: 'Doanh nghiệp không thiếu ads, họ thiếu hệ thống',
    slug: 'doanh-nghiep-khong-thieu-ads-ho-thieu-he-thong',
    category: 'Marketing System',
    readingTime: '6–8 phút đọc',
    excerpt:
      'Nhiều doanh nghiệp SME không chững lại vì thiếu quảng cáo. Họ chững lại vì ads, content, website, sales và data chưa được nối thành một hệ thống đủ rõ để ra quyết định.',
    content: [
      {
        type: 'paragraph',
        text: 'Có một giai đoạn tôi cũng từng nghĩ marketing là tối ưu ads cho tốt hơn. Khi kết quả chưa đạt, phản xạ đầu tiên của tôi là xem lại target, đổi creative, điều chỉnh ngân sách hoặc kéo CPL xuống. Các chỉ số quảng cáo gần như trở thành trung tâm của mọi cuộc trao đổi.',
      },
      {
        type: 'paragraph',
        text: 'Cách nghĩ đó không hẳn sai. Ads vẫn quan trọng khi doanh nghiệp cần chủ động tiếp cận khách mới. Nhưng càng làm với SME và team nhỏ, tôi càng thấy nhiều vấn đề không thể giải quyết bên trong Ads Manager.',
      },
      {
        type: 'paragraph',
        text: 'Có campaign mang lead về đều nhưng sales nói phần lớn không đúng nhu cầu. Có website nhận traffic nhưng người xem chưa hiểu doanh nghiệp làm gì, có đáng tin không. Có team chạy nhiều kênh nhưng cuối tháng vẫn phải ghép số thủ công để tìm nguồn tạo ra khách thật.',
      },
      {
        type: 'paragraph',
        text: 'Tiếp tục chỉnh quảng cáo lúc đó giống như tăng áp lực nước vào một đường ống đang hở. Ads là phần dễ nhìn thấy nhất, nhưng không phải lúc nào cũng là điểm nghẽn lớn nhất.',
      },
      { type: 'heading', text: 'Ads chỉ là phần nổi của hệ thống' },
      {
        type: 'paragraph',
        text: 'Quảng cáo làm tốt một việc: đưa một nhóm người đến gần doanh nghiệp. Từ lúc họ nhìn thấy quảng cáo đến khi trở thành khách hàng còn là một dòng chảy dài. Chất lượng của dòng chảy đó mới quyết định kết quả kinh doanh.',
      },
      {
        type: 'paragraph',
        text: 'Một mẫu quảng cáo có thể tạo nhiều lượt nhấp, nhưng người nhấp có đúng tệp không? Thông điệp có rõ không? Landing page có đủ thông tin để họ tin không? Form, cuộc gọi hoặc Zalo có dễ thao tác trên điện thoại không?',
      },
      {
        type: 'paragraph',
        text: 'Sau khi có lead, sales có nhận thông tin đủ nhanh và biết cần hỏi gì không? Nếu khách chưa mua ngay, team có cách follow-up nhất quán không? Tracking có ghi đúng nguồn hay mỗi nền tảng đang báo một kiểu? Founder có biết kênh nào tạo ra khách hàng thật không?',
      },
      {
        type: 'placeholder',
        label: 'IMAGE_PLACEHOLDER',
        text: 'Sơ đồ đơn giản Ads → Landing Page → Lead → Sales → Dashboard',
      },
      {
        type: 'paragraph',
        text: 'Chỉ cần một mắt xích thiếu rõ ràng, hiệu quả của những mắt xích còn lại cũng bị giảm. Ads có thể hoàn thành nhiệm vụ của nó, nhưng doanh nghiệp vẫn cảm thấy marketing không hiệu quả vì phần phía sau chưa sẵn sàng.',
      },
      {
        type: 'placeholder',
        label: 'VIDEO_PLACEHOLDER',
        text: 'Video ngắn giải thích vì sao ads chỉ là một phần của hệ thống',
      },
      { type: 'heading', text: 'Những dấu hiệu doanh nghiệp không thiếu ads mà thiếu hệ thống' },
      {
        type: 'paragraph',
        text: 'Ở SME, vấn đề này thường không xuất hiện dưới một tên gọi rõ ràng. Nó lộ ra qua những tình huống quen thuộc trong công việc hằng tuần:',
      },
      {
        type: 'list',
        items: [
          'Ads vẫn tiêu tiền, nhưng doanh thu không tăng tương ứng.',
          'Lead vẫn về, trong khi sales liên tục phản hồi rằng lead không chất lượng.',
          'Content đăng đều, nhưng team không biết bài nào kéo đúng khách.',
          'Website có form, nút gọi và Zalo, nhưng không xác định được nguồn lead.',
          'Founder phải hỏi từng người mới biết marketing và sales đang làm gì.',
          'Báo cáo có nhiều số nhưng không chỉ ra tuần tới cần sửa việc gì.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Một team nhỏ có thể gặp nhiều dấu hiệu cùng lúc. Marketer thấy CPL tăng nên đổi quảng cáo. Sales thấy khách hỏi sai sản phẩm nên cho rằng target sai. Founder thấy doanh thu chưa đổi và muốn tăng ngân sách. Mỗi người phản ứng với một đoạn riêng, nhưng chưa ai nhìn toàn bộ hành trình.',
      },
      { type: 'heading', text: 'Một hệ thống marketing tối thiểu gồm những gì?' },
      {
        type: 'paragraph',
        text: 'Hệ thống không nhất thiết phải bắt đầu bằng phần mềm đắt tiền hay một dashboard phức tạp. Với một SME, tôi thường nhìn vào các lớp cơ bản sau:',
      },
      {
        type: 'list',
        items: [
          'Strategy: Biết mình bán cho ai, giải quyết vấn đề nào và vì sao khách nên cân nhắc mình.',
          'Traffic: Chọn kênh có khả năng đưa đúng người vào, thay vì cố có mặt ở mọi nơi.',
          'Message: Nói đúng điều khách quan tâm và giữ thông điệp nhất quán từ quảng cáo đến landing page.',
          'Tracking: Ghi nhận nguồn truy cập, hành động để lại thông tin và trạng thái lead, thay vì gom mọi chỉ số.',
          'Sales và follow-up: Thống nhất ai nhận lead, phản hồi khi nào, hỏi gì và chăm sóc tiếp ra sao.',
          'Dashboard và review: Nhìn lại theo tuần để hiểu điểm nghẽn và việc cần ưu tiên sửa trước.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Các lớp này không hoạt động riêng. Strategy chưa rõ thì traffic dễ kéo sai người. Message chưa đúng thì landing page khó thuyết phục. Tracking thiếu thì marketing và sales không thể đối chiếu. Thiếu nhịp review, dashboard chỉ còn nhiều biểu đồ nhưng ít quyết định.',
      },
      {
        type: 'placeholder',
        label: 'CASE_PLACEHOLDER',
        text: 'Sau này chèn ví dụ thực tế từ một campaign SME đã được ẩn danh',
      },
      { type: 'heading', text: 'Bài học tôi dần nhận ra' },
      {
        type: 'paragraph',
        text: 'Tôi dần nhận ra rằng nhiều lúc tăng ngân sách hay đổi creative không giải quyết vấn đề. Nếu quảng cáo thu hút nhầm kỳ vọng, đưa khách đến một trang thiếu thông tin rồi chuyển lead sang quy trình follow-up rời rạc, thêm ngân sách chỉ làm vấn đề xảy ra nhanh hơn.',
      },
      {
        type: 'paragraph',
        text: 'Việc cần làm trước là nhìn toàn bộ dòng chảy từ người lạ đến khách hàng. Họ nhìn thấy gì? Vì sao họ để lại thông tin? Lead được chuyển cho ai? Kết quả cuối có quay lại để marketer biết nguồn và thông điệp nào hiệu quả không?',
      },
      {
        type: 'paragraph',
        text: 'Trong một team nhỏ, cải thiện quan trọng đôi khi chỉ là thống nhất cách đặt tên campaign, thêm trường nguồn lead, viết rõ tiêu chí lead phù hợp, hoặc dành một buổi mỗi tuần để marketing và sales xem lại các cuộc hội thoại. Những việc này không hào nhoáng, nhưng giúp team bớt đoán.',
      },
      { type: 'heading', text: 'Bắt đầu từ những câu hỏi căn bản' },
      {
        type: 'paragraph',
        text: 'Một hệ thống marketing tốt không cần phức tạp ngay từ đầu. Nó chỉ cần giúp doanh nghiệp trả lời được vài câu hỏi căn bản: khách đến từ đâu, họ có đúng tệp không, vì sao họ để lại thông tin, sales xử lý ra sao, và tuần sau nên sửa điểm nào trước.',
      },
      {
        type: 'paragraph',
        text: 'Khi các câu hỏi chưa có lời đáp rõ, campaign mới thường chỉ tạo thêm dữ liệu và thêm việc. Khi các mắt xích đã nối lại, ads mới làm đúng vai trò: đưa đúng người vào một hệ thống có khả năng biến sự chú ý thành cơ hội kinh doanh.',
      },
    ],
    cta: 'Nếu bạn đang chạy marketing đều nhưng vẫn không chắc điểm nghẽn nằm ở đâu, có thể bắt đầu bằng việc nhìn lại toàn bộ hệ thống trước khi chạy thêm campaign mới.',
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
