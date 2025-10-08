import React from "react";
import  medal from '../../public/assests/images/cardImages/medal.png'
import  handshake from '../../public/assests/images/cardImages/handshake.png'
import  message from '../../public/assests/images/cardImages/message.png'
import  proceed from '../../public/assests/images/cardImages/proceed.png'
import Image from "next/image";

function Section() {
  return (
    <div className="bg-gradient-to-r from-orange to-yellow h-auto w-full py-12 my-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col items-center justify-center p-8 ">
          <p className="text-font_22 font-semiBold text-white">How to Start</p>
          <h1 className="text-font_46 font-semiBold text-textColor">Easy Process</h1>
          <p className="text-font_18 font-regular text-textColor text-center">
          We specialize in helping you build a team of <br/> expert developers, testers, and leaders.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <Image src={message} alt="nessage" className="w-28 h-28" />
            <div className="flex  items-center justify-center gap-2">
              <h3 className="text-font_46 font-semiBold text-textColor">01</h3>
              <p className="text-font_28 font-semibold text-textColor">YOU ASK</p>
            </div>
          </div>


          <div className="flex flex-col items-center justify-center gap-4">
            <Image src={proceed} alt="proceed" className="w-28 h-28" />
            <div className="flex  items-center justify-center gap-2">
            <h3 className="text-font_46 font-semiBold text-textColor">02</h3>
              <p className="text-font_28 font-semibold text-textColor">WE PROCEED</p>
            </div>
          </div>


            <div className="flex flex-col items-center justify-center gap-4">
            <Image src={handshake} alt="handshake" className="w-28 h-28" />
            <div className="flex  items-center justify-center gap-2">
               <h3 className="text-font_46 font-semiBold text-textColor">03</h3>
              <p className="text-font_28 font-semibold text-textColor">NEGOTIATE</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <Image src={medal} alt="medal" className="w-28 h-28"  />
            <div className="flex  items-center justify-center gap-2">
               <h3 className="text-font_46 font-semiBold text-textColor">04</h3>
              <p className="text-font_28 font-semibold text-textColor">YOU GET</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Section;
