import Link from "next/link";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { Button } from "./ui/button";

export default function Navbar() {
    return(
        <div className="top-[5vw] md:top-[2vw] inset-x-0 fixed ml-[5vw] mr-[5vw] md:ml-[25%] md:mr-[25%]">
            <div className="flex justify-between items-center pl-[4vw] p-[3vw] md:pt-[0.75vw] md:pb-[0.75vw] bg-white/10 backdrop-blur-xl backdrop-saturate-150 border border-gray/20 shadow-lg rounded-2xl md:p-[1vw]">
                <p className="text-[5vw] md:text-[1.25vw]">Sockify</p>
                <div className="flex justify-center ml-[1vw] gap-[1.5vw] md:gap-[0.75vw] items-center">
                    <Button variant={'secondary'} className="rounded-xl w-[18vw] md:w-[5vw] cursor-pointer"><Link href={'/auth/signup'}>Signup</Link></Button>
                    <Button variant={'default'} className="rounded-xl w-[18vw] md:w-[5vw] cursor-pointer"><Link href={'/auth/login'}>Login</Link></Button>
                    <AnimatedThemeToggler className="pl-[1vw] md:pl-[0.25vw] cursor-pointer" />
                </div>
            </div>
        </div>
    )
}