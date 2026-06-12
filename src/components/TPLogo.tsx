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
  // Map kích thước tương thích chính xác với layout cũ của hệ thống
  const sizeMap = {
    sm: { w: 'w-8', h: 'h-8' },
    md: { w: 'w-10', h: 'h-10' },
    lg: { w: 'w-14', h: 'h-14' },
    xl: { w: 'w-20', h: 'h-20' },
    custom: { w: '', h: '' },
  };

  const dims = size === 'custom' ? { width, height } : {};
  const sizeClasses = size !== 'custom' ? `${sizeMap[size].w} ${sizeMap[size].h}` : '';

  return (
    <img
      src="https://pub-7e13bf90e3314fc284e5c20636c22021.r2.dev/assets/logo.png"
      alt="ThanhPhu Growth Logo"
      className={`${sizeClasses} ${className} object-contain`}
      {...dims}
    />
  );
}
