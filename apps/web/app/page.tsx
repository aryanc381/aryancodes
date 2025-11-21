import About from "@/components/About";
import Experience from "@/components/Experience";
import { Nav } from "@/components/Navbar";
import Projects from "@/components/Projects";
import { MarqueeDemo } from "@/components/Reviews";
import { TextAnimate } from "@/components/ui/text-animate";

export default function Home() {
  return (
    <div className="flex md:m-[1vw] flex-col md:flex justify-center md:justify-start">
      <Nav />
      <div className="flex md:items-center md:justify-between md:text-[3vw] md:font-medium md:mr-[10vw]">
        <img className="rounded-sm mt-[47vw] md:mt-0 object-cover md:aspect-[3/4] md:w-[40vw]" src="/main.jpeg" alt="" />
        <div className="md:flex md:flex-col md:w-[46vw]">
          <TextAnimate animation="slideLeft" duration={0.5}>I'm a Fullstack Software Developer</TextAnimate>
          <div className="md:text-[1vw] md:text-center md:mt-[0.5vw] md:text-[#373737]">
            <TextAnimate animation="slideLeft" duration={0.5}>I build and ship end-to-end full-stack solutions with super-speed and rock-solid robustness.</TextAnimate>
            <div className="md:mt-[1vw] md:text-left">
              <MarqueeDemo />
            </div>
          </div>
        </div>
      </div>
       <About />
       <Experience />
       <Projects />
    </div>
  );
}