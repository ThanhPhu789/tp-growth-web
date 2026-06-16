<div className="container mx-auto px-6">
  {/* HÀNG TRÊN: Phân tách rõ 2 vùng */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16 border-b border-brand-border">
    
    {/* Vùng 1: Thương hiệu */}
    <div className="flex flex-col items-center lg:items-start gap-4">
      <div className="h-12 md:h-14 bg-white border border-brand-border rounded-xl flex items-center justify-center shadow-md px-4 py-1 shrink-0">
        <TPLogo size="custom" className="h-full w-auto object-contain" />
      </div>
      <div className="text-center lg:text-left space-y-2">
        <h3 className="text-[18px] md:text-[20px] font-black text-brand-primary tracking-tight uppercase">
          Growth Through System
        </h3>
        <p className="text-brand-secondary font-medium max-w-[440px] text-[14px] md:text-[15px] opacity-70 leading-relaxed">
          Đồng hành cùng chủ doanh nghiệp xây dựng hệ thống marketing thực chiến, minh bạch & ra tiền.
        </p>
      </div>
    </div>

    {/* Vùng 2: Kết nối (Đã thêm Heading để định hướng người dùng) */}
    <div className="flex flex-col items-center lg:items-end gap-4">
      <h4 className="text-[14px] font-bold text-brand-primary uppercase tracking-widest opacity-80">Kết nối với Phú</h4>
      <div className="flex flex-wrap justify-center lg:justify-end gap-3">
        {[
          { icon: <MessageCircle className="w-5 h-5" />, label: 'Zalo', url: 'https://zalo.me/0766911958' },
          { icon: <Facebook className="w-5 h-5" />, label: 'Facebook', url: 'https://www.facebook.com/your.phanthanhphu' },
          { icon: <Mail className="w-5 h-5" />, label: 'Email', url: 'mailto:phanthanhphu789@gmail.com' }
        ].map((link, i) => (
          <a 
            key={i} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-brand-primary font-bold text-[14px] bg-slate-50 border border-brand-border hover:border-brand-accent hover:bg-white transition-all py-2.5 px-5 rounded-full"
          >
            {link.icon}
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </div>

  {/* HÀNG DƯỚI: Sạch sẽ & Chuyên nghiệp */}
  <div className="flex flex-col md:flex-row items-center justify-between py-10 gap-6">
    <div className="text-brand-soft-text text-[12px] font-medium opacity-60">© 2026 TP GROWTH MARKETING.</div>
    <div className="flex items-center gap-6">
      <a href="#" className="text-brand-soft-text text-[12px] hover:text-brand-primary underline underline-offset-4">Bảo mật</a>
      <a href="#" className="text-brand-soft-text text-[12px] hover:text-brand-primary underline underline-offset-4">Điều khoản</a>
    </div>
    <div className="flex items-center gap-2 bg-brand-highlight/10 px-4 py-1.5 rounded-full">
      <div className="w-2 h-2 rounded-full bg-brand-highlight animate-pulse" />
      <span className="text-[10px] font-black text-brand-highlight uppercase tracking-[0.2em]">Strategic Advisor</span>
    </div>
  </div>
</div>
