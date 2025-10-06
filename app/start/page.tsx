import HeroImage from "../components/common/heroImage";
import CommonParagraph from "../components/common/paragraph";
import Title from "../components/common/title";
import ContactForm from "../components/ContactForm";
import Card from "./card";
import developers  from '../../public/assests/images/developers .jpg'
import Image from "next/image";

const skills = [
  {
    id: 1,
    title: ">Talent shortage",
  },
  {
    id: 2,
    title: ">Lack of Expertise",
  },
  {
    id: 3,
    title: ">Quick Kick-Off",
  },
  {
    id: 4,
    title: ">Cost Optimization",
  },
  {
    id: 5,
    title: ">Talent Accessibility",
  },
  {
    id: 6,
    title: ">Administrative Hassle",
  },
];

export default function Start() {
  return (
    <div>
      <HeroImage
        title="How to Start"
        description="We specialize in helping you build a team of expert developers."
      />

      <div className="max-w-[1600px] mx-auto">
        <div className="w-[40%]">
          <Title title="How to Get Started with Courtney" />
        </div>
        <div className="w-[30%]">
          <CommonParagraph paragraph="From full-time remote engineering teams to hourly contractors, work with remote devs as needed" />
        </div>
        <Card />
        <div className="w-[40%]">
          <Title
            title="Why You Need To Hire Remote Developers" />
        </div>
        <div className="grid grid-cols-3 gap-8 my-16">
          {skills.map((skill) => (
            <div key={skill.id}>
              <h3 className="text-font_28 font-semiBold text-textColor">{skill.title}</h3>
            </div>
          ))}
        </div>
        <div className="w-full relative">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <Image 
              src={developers} 
              alt="developers" 
              fill
              className="object-cover"
            />
            <div className="absolute top-8 left-8 text-white">
              <div className="text-font_96 font-regular leading-none">1000+</div>
              <div className="text-font_28 font-semiBold  text-white">Developers</div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />

    </div>
  );
}
