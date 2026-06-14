import React from 'react';

interface TPLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  width?: number | string;
  height?: number | string;
}

export default function TPLogo({
  className = '',
  size = 'md',
  width,
  height,
}: TPLogoProps) {
  // Thay đổi tư duy: Khống chế chiều cao (h), để chiều rộng tự động co giãn (w-auto) theo tỉ lệ ảnh gốc
  const sizeMap = {
    sm: { h: 'h-6 md:h-7' },
    md: { h: 'h-8 md:h-9' },    // Kích thước chuẩn cho Header
    lg: { h: 'h-12 md:h-14' },
    xl: { h: 'h-16 md:h-20' },
    custom: { h: '' },
  };

  const dims = size === 'custom' ? { width, height } : {};
  const sizeClasses = size !== 'custom' ? `${sizeMap[size].h} w-auto` : 'w-auto';

  return (
    <img
      src="https://pub-7e13bf90e3314fc284e5c20636c22021.r2.dev/assets/logo-v2.png"
      alt="ThanhPhu Growth Logo"
      className={`${sizeClasses} ${className} object-contain`}
      {...dims}
    />
  );
}
