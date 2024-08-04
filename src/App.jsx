import Navigation from './components/navigation/Navigation'
import Carousel from './components/UI/Carousel';
import HeroSection from './components/UI/HeroSection';
import Cards from './components/layouts/Cards';
import Milestone from './components/layouts/Milestone';
import Reviews from './components/layouts/Reviews';
import Results from './components/layouts/Results';
import Footer from './components/footer/footer';

function App() {

  return (
    <>
      <Navigation />
      <Carousel />
      <HeroSection />
      <Cards />
      <Milestone />
      <Reviews />
      <Results />
      <Footer />
    </>
  );
}

export default App
