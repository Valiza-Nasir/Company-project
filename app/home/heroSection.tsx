import React from "react";
import CommonButton from "../components/common/button";
import Image from "next/image";
import Dev from "../../public/assests/images/dev.jpg";

function HeroSection() {
  return (
    <div className="flex  relative w-[1600px] mx-auto my-12" >
      <div className="flex ">
        <div
          className=" flex  lg:items-center  items-start rounded-3xl bg-white absolute top-[5%] left-[50%] h-auto 
"
        >
          <div className="p-6 md:p-8 rounded-4xl w-[80%]">
            {/* Form Header */}
            <h2 className="text-font_46 font-semiBold text-textColor mb-6 text-start">
              Building dev team, Quickly and Affordably
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              facilis consequuntur nulla nesciunt nostrum eaque nisi sapiente
              eum, quos distinctio saepe dolorum, natus aliquid! Itaque
              provident laudantium praesentium ex. Et.
            </p>
            <CommonButton>Build a Team</CommonButton>

           
          </div>
        </div>
        <Image src={Dev} alt="hero-image" width={900} height={800} className="rounded-3xl" />
       
      </div>
    </div>
  );
}

export default HeroSection;
