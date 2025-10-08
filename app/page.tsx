import ContactForm from "./components/ContactForm/index"
import HeroImage from "./components/common/heroImage"
import HeroSection from "./home/heroSection"
import Section from "./home/section"
import Carousel from "./home/carousel"
import Title from "./components/common/title"
import CommonParagraph from "./components/common/paragraph"
import { Card ,Card2} from "./home/card"
import SpecializedStaff from "./home/specialized"
export default function Home() {
  return (
    <div> 
    <div className="max-w-[1600px] mx-auto" >
      <HeroSection />
      <Card />
    </div>
          <Section />
          <div className="max-w-[1600px] mx-auto">
            <p className="text-font_22 font-semiBold text-textColor">Expertise</p>
            <div className="w-[50%]">
            <Title title="Hire Permanent and Remote Developers" />


            </div>
            <div className="w-[30%]">
            <CommonParagraph paragraph="From full-time remote engineering teams to hourly contractors, work with remote devs as needed" />

            </div>

            <Card2 />
           
          </div>
          
          <SpecializedStaff />

            
<Carousel />
<ContactForm />

          </div>

  );
}
