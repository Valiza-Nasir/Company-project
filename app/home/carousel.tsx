import React from 'react';
import { Carousel } from 'antd';
import nodeJS from '../../public/assests/images/nodeJs.png'
import reactJs from '../../public/assests/images/reactJs.png'
import angular from '../../public/assests/images/angular.png'
import native from '../../public/assests/images/native.png'

import Image from 'next/image';

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
function Carousels() {
  return (
    <div className="w-full w-[1600px] mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-normal text-blue-900 mb-2">Specialized</h2>
        <h1 className="text-4xl font-bold text-blue-900">Technologies</h1>
      </div>

      {/* Technologies Grid */}
      <div className="flex items-center justify-center space-x-16">
        {/* React */}
        <div className="flex flex-col items-center space-y-3">
          <div className="w-16 h-16 flex items-center justify-center">
            <Image 
              src={reactJs} 
              alt="React" 
            
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Angular */}
        <div className="flex flex-col items-center space-y-3">
          <div className="w-16 h-16 flex items-center justify-center">
            <Image 
              src={angular} 
              alt="Angular" 
              width={48} 
              height={48}
              className="object-contain"
            />
          </div>
        </div>

        {/* Next.js */}
        <div className="flex flex-col items-center space-y-3">
          <div className="w-16 h-16 flex items-center justify-center">
            <Image 
              src={native} 
              alt="Native" 
              width={100} 
              height={100}
              className="object-contain"
            />
          </div>
        </div>

        {/* Node.js */}
        <div className="flex flex-col items-center space-y-3">
          <div className="w-16 h-16 flex items-center justify-center">
            <Image 
              src={nodeJS} 
              alt="Node.js" 
              width={48} 
              height={48}
              className="object-contain"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Carousels;