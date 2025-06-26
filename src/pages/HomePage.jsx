import HeroSection from '../components/home/HeroSection';
import KeyHighlights from '../components/home/KeyHighlights';
import TrustSignals from '../components/home/TrustSignals';
import AboutSection from '../components/home/AboutSection';
import ProgramsSection from '../components/home/ProgramsSection';
import SuccessStoriesSection from '../components/home/SuccessStoriesSection';
import CallToAction from '../components/home/CallToAction';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <KeyHighlights />
      <TrustSignals />
      <AboutSection />
      <ProgramsSection />
      <SuccessStoriesSection />
      <CallToAction />
    </>
  );
};

export default HomePage;
