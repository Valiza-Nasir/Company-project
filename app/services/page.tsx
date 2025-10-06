import HeroImage from "../components/common/heroImage";
import CommonParagraph from "../components/common/paragraph";
import Title from "../components/common/title";
import Card from "./card";
import ContactForm from "../components/ContactForm";

export default function Services() {
  return (
    <div>
      <HeroImage
        title="Our Services"
        description="We specialize in helping you build a team of expert developers."
      />
      <div className="max-w-[1600px] mx-auto">
        <Title title="Services" />
        <div className="w-[30%]">
        <CommonParagraph paragraph="From full-time remote engineering teams to hourly contractors, work with remote devs as needed" />
        </div>
        <Card />
        <ContactForm />
      </div>
    </div>
  )
}