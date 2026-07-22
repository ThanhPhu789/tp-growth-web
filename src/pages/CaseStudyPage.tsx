import { siteImageData } from '../data/siteImages';
import PlaceholderLayout from './PlaceholderLayout';

export default function CaseStudyPage() {
  return (
    <PlaceholderLayout
      eyebrow="PROOF LIBRARY"
      title="Case Study"
      subtitle="Các dự án thực tế về marketing, data, tracking và growth system sẽ được cập nhật sau."
      body="Placeholder page. Nội dung case study sẽ được bổ sung khi có dữ liệu, hình ảnh và số liệu phù hợp."
      cards={[
        {
          title: 'Paint & More / OneCoat',
          status: 'Coming soon',
          text: 'B2B -> retail system, social, ads, tracking, optimization.',
          image: siteImageData('Camp Sơn Lại Sáng cũ chiều mới youtube ads conversions.jpg'),
        },
        {
          title: 'Msport',
          status: 'Coming soon',
          text: 'Retail growth, content system, paid traffic, sales support.',
          image: siteImageData('msport-product-exhibition-booth.jpg'),
        },
        {
          title: 'F&B Test',
          status: 'Coming soon',
          text: 'Small-budget test, simple funnel, direct response.',
          image: siteImageData('Case FnB Build kênh Tiktok 1.jpg'),
        },
      ]}
    />
  );
}
