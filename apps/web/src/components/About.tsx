import React from 'react';
import { TextAnimate } from './ui/text-animate';

interface AboutProps {
  description: string
}

function About({description}: AboutProps) {
  return (
    <div className="pl-[4vw] pt-[1vw] pr-[4vw] pb-[4vw] font-semibold flex flex-col mt-[5vw] mb-[5vw] md:font-medium rounded-md md:mt-[1vw] md:mb-[0.5vw] md:pl-[2vw] md:pr-[2vw] md:pt-[0.5vw] md:pb-[1.5vw] bg-black text-white">
        <p  className="text-[8vw] md:text-[3vw]">About Me</p>
        <div className="flex text-[5vw] md:flex md:text-[2vw] md:w-[94vw] text-justify md:leading-[3vw]">
          <TextAnimate animation="blurIn" duration={0.5}>{description}</TextAnimate>
        </div>
    </div>
  )
}
export default About;