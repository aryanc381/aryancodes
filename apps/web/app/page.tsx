import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { Nav } from "@/components/Navbar";
import BlockExp from "@/components/Projects";
import Publications from "@/components/Publications";

import { MarqueeDemo } from "@/components/Reviews";
import StackAch from "@/components/StackAch";
import { Button } from "@/components/ui/button";
import Face from "@/components/ui/face";
import { TextAnimate } from "@/components/ui/text-animate";

export default function Home() {
  return (
    <div className="flex flex-col m-[3vw] md:m-[2vw] flex-col md:flex justify-center md:justify-start">
      <Nav />
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between md:text-[3vw] md:font-medium md:mr-[10vw]">
        <Face />
        <div className="mt-[30vw] md:mt-[0vw] md:flex md:flex-col md:w-[46vw]">
          <TextAnimate className="text-center text-[5vw] font-medium mt-[2vw] md:mt-[0vw] md:text-[3vw]" animation="blurIn" duration={0.5}>I'm a Fullstack Software Developer</TextAnimate>
          <div className="text-center md:text-[1vw] md:text-center md:mt-[0.5vw] md:text-[#373737]">
            <TextAnimate animation="blurIn" duration={0.5}>I build and ship end-to-end full-stack solutions with super-speed and rock-solid robustness.</TextAnimate>
            <Button className="md:hidden mt-[3vw] rounded-lg">Download Resume</Button>
            <div className="hidden md:block md:mt-[1vw] md:text-left">
              <MarqueeDemo />
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-col md:justify-center md:gap-[0.5vw] md:mt-[0.5vw]">
        <About />
        <Experience />
        <BlockExp />
        <Publications />
        <Education />
        <StackAch />
        <Footer />
      </div>
    </div>
  );
}