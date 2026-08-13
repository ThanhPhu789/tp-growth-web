export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Growth System', href: '/Growth-System-Framework' },
  { label: 'Case Study', href: '/case-study' },
  { label: 'Growth Notes', href: '/growth-notes' },
  { label: 'Làm việc với Phú', href: '/lam-viec-voi-phu' },
];

export const contactLinks = {
  zalo: 'https://zalo.me/0766911958',
  facebook: 'https://www.facebook.com/your.phanthanhphu',
  email: 'mailto:phanthanhphu789@gmail.com',
  phone: 'tel:0766911958',
};

export const navCta = {
  label: 'Nhắn Zalo',
  href: contactLinks.zalo,
};
