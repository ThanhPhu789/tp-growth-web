import Hero from './components/Hero';
import StorySection from './components/StorySection';
import MarketingSystemPOV from './components/MarketingSystemPOV';
import GrowthSystemFlow from './components/GrowthSystemFlow';
import Services from './components/Services';
import Method from './components/Method';
import Experience from './components/Experience';
import YoutubeSection from './components/YoutubeSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <StorySection />
      <MarketingSystemPOV />
      <GrowthSystemFlow />
      <Services />
      <Method />
      <Experience />
      <YoutubeSection />
      <Footer />
    </div>
  );
}
