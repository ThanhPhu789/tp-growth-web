import Footer from '../components/Footer';
import Header from '../components/Header';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-primary">
      <Header />
      <main className="flex min-h-[60vh] items-center">
        <div className="container mx-auto px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-[12px] font-black uppercase tracking-[0.2em] text-brand-highlight">
              404
            </p>
            <h1 className="mt-5 font-heading text-[40px] font-extrabold leading-[1.08] tracking-[-0.04em] md:text-[56px]">
              Không tìm thấy trang
            </h1>
            <p className="mt-6 text-[17px] leading-[1.75] text-brand-secondary">
              Đường dẫn này không tồn tại hoặc đã được thay đổi.
            </p>
            <a
              href="/"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-brand-button bg-brand-highlight px-6 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-orange-600/15 transition-colors hover:bg-orange-700"
            >
              Về trang chủ
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
