import type { ReactNode } from 'react';
import HomepageV2 from './components/homepage/HomepageV2';
import RouteMetadata from './components/RouteMetadata';
import GrowthSystemDetail from './pages/GrowthSystemDetail';
import CaseStudyPage from './pages/CaseStudyPage';
import BlackVueCaseStudyPage from './pages/BlackVueCaseStudyPage';
import PaintMoreCaseStudyPage from './pages/PaintMoreCaseStudyPage';
import GnetGonxCaseStudyPage from './pages/GnetGonxCaseStudyPage';
import FnbTiktokCaseStudyPage from './pages/FnbTiktokCaseStudyPage';
import GrowthNotesPage from './pages/GrowthNotesPage';
import GrowthNoteDetailPage from './pages/GrowthNoteDetailPage';
import StartHereGrowthNotePage from './pages/StartHereGrowthNotePage';
import WorkWithPhuPage from './pages/WorkWithPhuPage';
import NotFoundPage from './pages/NotFoundPage';
import { getBlogPostBySlug } from './data/blogPosts';

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const renderIndexablePage = (page: ReactNode) => (
    <>
      <RouteMetadata canonicalPath={pathname} />
      {page}
    </>
  );

  if (pathname === '/') {
    return renderIndexablePage(<HomepageV2 />);
  }

  if (pathname === '/Growth-System-Framework') {
    return renderIndexablePage(<GrowthSystemDetail />);
  }

  if (pathname === '/case-study') {
    return renderIndexablePage(<CaseStudyPage />);
  }

  if (pathname === '/case-study/paint-and-more-growth-system') {
    return renderIndexablePage(<PaintMoreCaseStudyPage />);
  }

  if (pathname === '/case-study/blackvue-dr750-lte-growth-system') {
    return renderIndexablePage(<BlackVueCaseStudyPage />);
  }

  if (pathname === '/case-study/gnet-g-on-x-growth-system') {
    return renderIndexablePage(<GnetGonxCaseStudyPage />);
  }

  if (pathname === '/case-study/fnb-tiktok-sales-system') {
    return renderIndexablePage(<FnbTiktokCaseStudyPage />);
  }

  if (pathname === '/growth-notes') {
    return renderIndexablePage(<GrowthNotesPage />);
  }

  if (pathname === '/growth-notes/toi-khong-tin-vao-mot-cong-thuc-marketing') {
    return renderIndexablePage(<StartHereGrowthNotePage />);
  }

  if (pathname.startsWith('/growth-notes/')) {
    const slug = pathname.slice('/growth-notes/'.length);
    const post = getBlogPostBySlug(slug);

    if (post) {
      return renderIndexablePage(<GrowthNoteDetailPage post={post} />);
    }
  }

  if (pathname === '/lam-viec-voi-phu') {
    return renderIndexablePage(<WorkWithPhuPage />);
  }

  return (
    <>
      <RouteMetadata noindex pageTitle="Không tìm thấy trang | TP Growth" />
      <NotFoundPage />
    </>
  );
}
