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
import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col m-[3vw] md:m-[2vw] flex-col md:flex justify-center md:justify-start">
      <Nav />
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between md:text-[3vw] md:font-medium md:mr-[10vw]">
        <Face />
        <div className="mt-[30vw] md:mt-[0vw] md:flex md:flex-col md:w-[46vw]">
          <div className="hidden md:flex md:justify-end md:w-full">
            <Drawer>
                <DrawerTrigger>
                  <div className="">
                    <TextAnimate animation="blurIn" className="border md:text-[1vw] md:pr-[1vw] md:pt-[0.5vw] md:pb-[0.5vw] hover:bg-[#fcfcfc] md:pl-[1vw] cursor-pointer md:rounded-3xl">Connect</TextAnimate>
                  </div>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Connect with Aryan Chauhan</DrawerTitle>
                    <DrawerDescription>
                      <div className="flex text-black justify-center items-center gap-[3vw] mt-[3vw] mb-[2vw]">
                        <a href="https://www.linkedin.com/in/aryanc381/" className="active:scale-90"><FaLinkedinIn className="size-[10vw] md:size-[4vw]" /></a>
                        <a href="https://github.com/aryanc381" className="active:scale-90"><FaGithub className="size-[10vw] md:size-[4vw]" /></a>
                        <a href="" className="active:scale-90"><FaXTwitter className="size-[10vw] md:size-[4vw]" /></a>
                        <a href="https://wa.me/9049122622?text=Hi%20there!%20I%20want%20to%20connect%20with%20you." className="active:scale-90"><FaWhatsapp className="size-[10vw] md:size-[4vw]" /></a>
                        <a href="https://mailto:aryanc381@gmail.com" className="active:scale-90"><IoMail className="size-[10vw] md:size-[4vw]" /></a>
                      </div>
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <DrawerClose>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
          </div>
          <TextAnimate className="text-center text-[5vw] font-medium mt-[2vw] md:mt-[0vw] md:text-[3vw]" animation="blurIn" duration={0.5}>I'm a Fullstack Software Developer</TextAnimate>
          <div className="flex flex-col justify-center md:text-[1vw] md:text-center md:mt-[0.5vw] md:text-[#373737]">
            <TextAnimate className="text-center" animation="blurIn" duration={0.5}>I build and ship end-to-end full-stack solutions with super-speed and rock-solid robustness.</TextAnimate>
            <div className="flex justify-center gap-[2vw] md:hidden">
              <Button className="md:hidden mt-[3vw] rounded-lg"><Link href={'https://drive.google.com/file/d/1Elx_be0koRKcS3ZPFe4PRveF-erzb5na/view?usp=sharing'} target="_blank">Download Resume</Link></Button>
              <Drawer>
                <DrawerTrigger>
                  <div className="">
                    <Button variant={'outline'} className="md:hidden mt-[3vw] rounded-lg">Connect</Button>
                  </div>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Connect to Aryan Chauhan</DrawerTitle>
                    <DrawerDescription>
                      <div className="flex text-black justify-center items-center gap-[3vw] mt-[5vw]">
                        <a href="https://www.linkedin.com/in/aryanc381/" className="active:scale-90"><FaLinkedinIn className="size-[10vw] md:size-[1.8vw]" /></a>
                        <a href="https://github.com/aryanc381" className="active:scale-90"><FaGithub className="size-[10vw] md:size-[1.8vw]" /></a>
                        <a href="" className="active:scale-90"><FaXTwitter className="size-[10vw] md:size-[1.8vw]" /></a>
                        <a href="https://wa.me/9049122622?text=Hi%20there!%20I%20want%20to%20connect%20with%20you." className="active:scale-90"><FaWhatsapp className="size-[10vw] md:size-[1.8vw]" /></a>
                        <a href="https://mailto:aryanc381@gmail.com" className="active:scale-90"><IoMail className="size-[10vw] md:size-[1.8vw]" /></a>
                      </div>
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <DrawerClose>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
            
            <div className="hidden md:block md:mt-[1vw] md:text-left">
              <MarqueeDemo />
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-col md:justify-center md:gap-[0.5vw] md:mt-[0.5vw]">
        <About description="Full-stack engineer building scalable, cloud-native systems end to end. I move fast with strong software engineering discipline, clear architecture, and ownership, focused on creating reliable, high-impact solutions that solve real problems and drive revenue." />
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

export function Connect() {
  return(
    <div className="">
      
    </div>
  )
}