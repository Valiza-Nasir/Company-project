import ContactForm from "./components/ContactForm/index"
import HeroImage from "./components/common/heroImage"
import HeroSection from "./home/heroSection"
import Card from "./home/card"
import Section from "./home/section"
import Carousel from "./home/carousel"
export default function Home() {
  return (
    <div> 
    <div className="max-w-[1600px] mx-auto" >
      <HeroSection />
      <Card />
    </div>
          <Section />
          <Carousel />
          <ContactForm />
          </div>

  );
}
