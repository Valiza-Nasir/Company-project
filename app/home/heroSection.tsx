import React from "react";
import Image from "next/image";
import Dev from "../../public/assests/images/dev.jpg";

function HeroSection() {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 py-12">
      <div className="relative flex items-center justify-end">
        {/* Text Content Card - Positioned on the left */}
        <div className="absolute right-[52%] top-1/2 -translate-y-1/2 z-10 w-full max-w-[700px]">
          <div className="bg-white rounded-tr-[60px]  p-8 md:p-12 ">
            <h2 className="text-4xl md:text-5xl lg:text-font_64 font-semiBold text-textColor mb-6 leading-loose">
              Building dev team, Quickly and Affordably
            </h2>
            <p className="text-textColor text-base md:text-lg mb-8 leading-relaxed">
              We specialize in helping you build a team of expert developers, testers, and leaders. We are setup to deliver long term solutions, or scale to different needs quickly.
            </p>
            <button className="bg-[#FFA500] hover:bg-[#ff9500] text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
              Build a team
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Image - Positioned on the right */}
        <div className="w-full max-w-[900px] ml-auto">
          <Image
            src={Dev}
            alt="Development team working together"
            width={900}
            height={600}
            className="rounded-bl-[60px] rounded-tr-[20px] w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
