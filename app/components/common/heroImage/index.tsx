import React from "react";
import Image from "next/image";
import Dev from "../../../../public/assests/images/dev.jpg";

function HeroImage({title, description}: {title: string, description: string}) {
  return (
    <div className="relative w-full h-[450px] mb-16 ">
      {/* Background Image */}
      <Image
        src={Dev}
        alt="hero-image"
        fill
        className="object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white font-semibold text-font_64 ">{title}</h1>
        <p className="text-white font-regular  text-font_18 max-w-2xl">
          {description}
        </p>
      </div>
    </div>
  );
}

export default HeroImage;
