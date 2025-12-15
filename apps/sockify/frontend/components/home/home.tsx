import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { Button } from "../ui/button";
import { RainbowButton } from "../ui/rainbow-button";
import './bbr.css';
import './italic.css';

export default function Home() {
    return(
        <div className="w-full">
            <div className="">
                <Navbar />
            </div>
            <div className="">
                <Landing />
            </div>
        </div>
    )
}

function Navbar() {
    return(
        <div className="top-[5vw] md:top-[2vw] inset-x-0 fixed ml-[5vw] mr-[5vw] md:ml-[25%] md:mr-[25%]">
            <div className="flex justify-between items-center pl-[4vw] p-[3vw] md:pt-[0.75vw] md:pb-[0.75vw] bg-white/10 backdrop-blur-xl backdrop-saturate-150 border border-gray/20 shadow-lg rounded-2xl md:p-[1vw]">
                <p className="text-[5vw] md:text-[1.25vw]">Sockify</p>
                <div className="flex justify-center ml-[1vw] gap-[1.5vw] md:gap-[0.75vw] items-center">
                    <Button variant={'secondary'} className="rounded-xl w-[18vw] md:w-[5vw] cursor-pointer">Signup</Button>
                    <Button variant={'default'} className="rounded-xl w-[18vw] md:w-[5vw] cursor-pointer">Login</Button>
                    <AnimatedThemeToggler className="pl-[1vw] md:pl-[0.25vw] cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

function Landing() {
    return(
        <div className="flex flex-col h-[100vh] items-center justify-center">
            <p className="bartle text-[4.5vw] md:text-[4vw]">#1 Memory Layer</p>
            <p className="text-[5vw] md:text-[3vw] font-[500]">for SMBs and Founders.</p>
            <div className="flex items-center mt-[1.5vw] gap-[0.5vw]">
                <RainbowButton className="rounded-2xl mt-[1vw] md:mt-[0vw]">Try for Free</RainbowButton>
                <RainbowButton className="hidden md:flex rounded-[10vw]">System Architecture</RainbowButton>
            </div>
            <div className="absolute bottom-[1vw] flex gap-[1.25vw] md:gap-[0.35vw]">
                <p>Built by</p>
                <a href="https://www.linkedin.com/in/manasvi-nawal/" target="_blank" className="underline">@manasvi-nawal</a>
                <p>and</p>
                <a href="https://www.linkedin.com/in/aryanc381" target="_blank" className="underline">@aryanc381</a>
            </div>
        </div>
    )
}