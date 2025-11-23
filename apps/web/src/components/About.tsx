import React from 'react'
import { TextAnimate } from './ui/text-animate'

function About() {
  return (
    <div className="pl-[4vw] pt-[1vw] pr-[4vw] pb-[4vw] font-semibold flex flex-col mt-[5vw] mb-[5vw] md:font-medium rounded-md md:mt-[1vw] md:mb-[0.5vw] md:pl-[2vw] md:pr-[2vw] md:pt-[0.5vw] md:pb-[1.5vw] bg-black text-white">
        <p  className="text-[8vw] md:text-[3vw]">About Me</p>
        <div className="flex text-[5vw] md:flex md:text-[2vw] md:w-[94vw] text-justify md:leading-[3vw]">
          <TextAnimate animation="slideLeft" duration={0.5}>I work across frontend backend and cloud owning the entire lifecycle end-to-end. From UI to database to deployment I ship production ready features end to end. I care about clean code great UX and solving real problems. My focus is building seamless user experiences backed by robust engineering.</TextAnimate>
        </div>
    </div>
  )
}
export default About;