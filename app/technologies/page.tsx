import React from "react";
import HeroImage from "../components/common/heroImage";
import Title from "../components/common/title";
import CommonParagraph from "../components/common/paragraph";
import TabComponent from "./tab";
import ContactForm from "../components/ContactForm";

function Technologies() {
  return (
    <div>
      <HeroImage
        title="Technologies"
        description="We specialize in helping you build a team of expert developers."
      />
      <div className="max-w-[1600px] mx-auto">
        <div className="my-16">
        <Title title="Technologies" />
        <div className="w-[30%]">
          <CommonParagraph paragraph="Using the right technology for the right problem is our mantra. We are agile about learning new processes and tools to save time and reduce complexity" />
        </div>
        </div>
        
        <TabComponent />
        <ContactForm />
      </div>
    </div>
  );
}

export default Technologies;
