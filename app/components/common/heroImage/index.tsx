import React from "react";
import Image from "next/image";
import image from "../../../../public/assests/images/contact-form.jpg";

function HeroImage({title, description}: {title: string, description: string}) {
  return (
    <div className="relative w-full h-[450px] mb-16">
      {/* Background Image */}
      <Image
        src={image}
        alt="hero-image"
        fill
        className="object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white font-semibold text-5xl mb-4">{title}</h1>
        <p className="text-white text-lg max-w-2xl">
          {description}
        </p>
      </div>
    </div>
  );
}

export default HeroImage;
