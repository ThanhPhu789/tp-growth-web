import PlaceholderLayout from './PlaceholderLayout';

export default function WorkWithPhuPage() {
  return (
    <PlaceholderLayout
      eyebrow="WORK WITH PHU"
      title="Làm việc với Phú"
      subtitle="Bắt đầu bằng một cuộc nói chuyện rõ vấn đề."
      body="Hiện tại trang này dùng placeholder để giữ cấu trúc website. Form, Zalo, booking link và thông tin liên hệ thật sẽ được cập nhật sau."
      ctaLabel="Nhắn Zalo trao đổi nhanh"
      ctaLocation="work-with-phu"
      cards={[
        {
          title: 'Strategy Call 60 phút',
          status: 'Coming soon',
          text: 'Dành cho chủ doanh nghiệp cần clarity nhanh.',
        },
        {
          title: 'Audit hệ thống marketing',
          status: 'Coming soon',
          text: 'Rà lại traffic, funnel, tracking, website và team execution.',
        },
        {
          title: 'Tracking / Data Foundation',
          status: 'Coming soon',
          text: 'GTM, GA4, Meta CAPI, TikTok Events API, dashboard.',
        },
      ]}
    />
  );
}
