import React from "react";
import  medal from '../../public/assests/images/cardImages/medal.png'
import  handshake from '../../public/assests/images/cardImages/handshake.png'
import  message from '../../public/assests/images/cardImages/message.png'
import  proceed from '../../public/assests/images/cardImages/proceed.png'
import Image from "next/image";

// 
// medal.png
// handshake.png
// message.png
// proceed.png

function Section() {
  return (
    <div className="bg-gradient-to-r from-orange to-yellow h-auto w-full ">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col items-center justify-center p-8 ">
          <p>How to Start</p>
          <h1>Easy Process</h1>
          <p>
          We specialize in helping you build a team of expert developers, testers, and leaders.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-8">
          <div className="flex flex-col items-center justify-center">
            <Image src={message} alt="nessage" />
            <div>
              <h3>01</h3>
              <p>YOU ASK</p>
            </div>
          </div>


          <div className="flex flex-col items-center justify-center">
            <Image src={proceed} alt="proceed" />
            <div>
              <h3>02</h3>
              <p>WE PROCEED</p>
            </div>
          </div>


          <div className="flex flex-col items-center justify-center">
            <Image src={handshake} alt="handshake" />
            <div>
              <h3>03</h3>
              <p>NEGOTIATE</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image src={medal} alt="medal" />
            <div>
              <h3>04</h3>
              <p>YOU GET</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Section;
