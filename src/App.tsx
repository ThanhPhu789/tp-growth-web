import Hero from './components/Hero';
import ProofStrip from './components/ProofStrip';
import StorySection from './components/StorySection';
import GrowthSystemSection from './components/GrowthSystemSection';
import FourPillarsSection from './components/FourPillarsSection';
import Services from './components/Services';
import ProofCasesSection from './components/ProofCasesSection';
import Method from './components/Method';
import Experience from './components/Experience';
import YoutubeSection from './components/YoutubeSection';
import Footer from './components/Footer';
import GrowthSystemDetail from './pages/GrowthSystemDetail';
import CaseStudyPage from './pages/CaseStudyPage';
import GrowthNotesPage from './pages/GrowthNotesPage';
import GrowthNoteDetailPage from './pages/GrowthNoteDetailPage';
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

  if (pathname === '/growth-notes') {
    return <GrowthNotesPage />;
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

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProofStrip />
      <StorySection />
      <GrowthSystemSection />
      <FourPillarsSection />
      <Services />
      <ProofCasesSection />
      <Method />
      <Experience />
      <YoutubeSection />
      <Footer />
    </div>
  );
}
