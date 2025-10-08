import React from 'react';
import nodeJS from '../../public/assests/images/nodeJs.png'
import reactJs from '../../public/assests/images/reactJs.png'
import angular from '../../public/assests/images/angular.png'
import native from '../../public/assests/images/native.png'
import Image from 'next/image';

function Carousels() {
  return (
    <div className="w-full  py-16">
      <div className="w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-font_22 font-semiBold text-textColor mb-2">Specialized</p>
          <h1 className="text-font_46 font-semiBold text-textColor">Technologies</h1>
        </div>

        {/* Technologies Grid */}
        <div className="flex items-center justify-center gap-24">
          {/* React */}
          <div className="flex items-center justify-center">
            <Image 
              src={reactJs} 
              alt="React" 
              width={180}
              height={180}
              className="object-contain"
            />
          </div>

          {/* Angular */}
          <div className="flex items-center justify-center">
            <Image 
              src={angular} 
              alt="Angular" 
              width={180}
              height={180}
              className="object-contain"
            />
          </div>

          {/* Next.js */}
          <div className="flex items-center justify-center">
            <Image 
              src={native} 
              alt="Next.js" 
              width={180}
              height={180}
              className="object-contain"
            />
          </div>

          {/* Node.js */}
          <div className="flex items-center justify-center">
            <Image 
              src={nodeJS} 
              alt="Node.js" 
              width={180}
              height={180}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousels;