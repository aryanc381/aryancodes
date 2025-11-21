import React from 'react'
import { TextAnimate } from './ui/text-animate'

function About() {
  return (
    <div className="flex flex-col md:font-medium rounded-md md:mt-[1vw] md:mb-[0.5vw] md:pl-[2vw] md:pr-[2vw] md:pt-[0.5vw] md:pb-[1.5vw] bg-black text-white">
        <TextAnimate duration={0.5} animation='slideLeft' className="md:text-[3vw]">About Me</TextAnimate>
        <div className="md:flex md:text-[2vw] md:w-[94vw] text-justify leading-[3vw]">
          <TextAnimate animation="slideLeft" duration={0.5}>I work across frontend backend and cloud owning the entire lifecycle end-to-end. From UI to database to deployment I ship production ready features end to end. I care about clean code great UX and solving real problems. My focus is building seamless user experiences backed by robust engineering.</TextAnimate>
        </div>
    </div>
  )
}
export default About;