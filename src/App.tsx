import HomepageV2 from './components/homepage/HomepageV2';
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
import { getBlogPostBySlug } from './data/blogPosts';

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';

  if (pathname === '/Growth-System-Framework') {
    return <GrowthSystemDetail />;
  }

  if (pathname === '/case-study') {
    return <CaseStudyPage />;
  }

  if (pathname === '/case-study/paint-and-more-growth-system') {
    return <PaintMoreCaseStudyPage />;
  }

  if (pathname === '/case-study/blackvue-dr750-lte-growth-system') {
    return <BlackVueCaseStudyPage />;
  }

  if (pathname === '/case-study/gnet-g-on-x-growth-system') {
    return <GnetGonxCaseStudyPage />;
  }

  if (pathname === '/case-study/fnb-tiktok-sales-system') {
    return <FnbTiktokCaseStudyPage />;
  }

  if (pathname === '/growth-notes') {
    return <GrowthNotesPage />;
  }

  if (pathname === '/growth-notes/toi-khong-tin-vao-mot-cong-thuc-marketing') {
    return <StartHereGrowthNotePage />;
  }

  if (pathname.startsWith('/growth-notes/')) {
    const slug = pathname.slice('/growth-notes/'.length);
    const post = getBlogPostBySlug(slug);

    if (post) {
      return <GrowthNoteDetailPage post={post} />;
    }
  }

  if (pathname === '/lam-viec-voi-phu') {
    return <WorkWithPhuPage />;
  }

  return <HomepageV2 />;
}
