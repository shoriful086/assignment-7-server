import { Container } from "@mui/material";
import HeroSection from "./heroSection/HeroSection";
import ReliefGoods from "./reliefGoods/ReliefGoods";
import Testimonials from "./testimonials/Testimonials";
import OurWork from "./whatDoWeAre/OurWork";
import FrequentlyAskQues from "./frequently/FrequentlyAskQues";
import GalleryCarousel from "./galleryCarousel/GalleryCarousel";

const Home = () => {
  return (
    <div>
      <div className="bg-gray-200">
        <Container>
          <HeroSection />
        </Container>
      </div>
      <Container>
        <ReliefGoods />
        <Testimonials />
        <GalleryCarousel />
        <OurWork />
        <FrequentlyAskQues />
      </Container>
    </div>
  );
};

export default Home;
