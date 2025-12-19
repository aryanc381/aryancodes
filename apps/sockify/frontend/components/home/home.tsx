import Link from "next/link";
import { RainbowButton } from "../ui/rainbow-button";
import './bbr.css';
import './italic.css';
import Navbar from "../navbar";

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
    );
}

function Landing() {
    return(
        <div className="flex flex-col h-[100vh] items-center justify-center">
            <p className="bartle text-[4.5vw] md:text-[4vw]">#1 Memory Layer</p>
            <p className="text-[5vw] md:text-[3vw] font-[500]">for SMBs and Founders.</p>
            <div className="flex items-center mt-[1.5vw] gap-[0.5vw]">
                <RainbowButton className="rounded-2xl mt-[1vw] md:mt-[0vw]"><Link href={'/auth/signup'}>Try for Free</Link></RainbowButton>
                <RainbowButton className="hidden md:flex rounded-[10vw]"><Link href={'/about/system'}>System Architecture</Link></RainbowButton>
            </div>
            <div className="absolute bottom-[1vw] flex gap-[1.25vw] md:gap-[0.35vw]">
                <p>Built by</p>
                <a href="https://www.linkedin.com/in/manasvi-nawal/" target="_blank" className="underline">@manasvi-nawal</a>
                <p>and</p>
                <a href="https://www.linkedin.com/in/aryanc381" target="_blank" className="underline">@aryanc381</a>
            </div>
        </div>
    );
}