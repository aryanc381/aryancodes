"use client"
import { LuBrainCircuit } from "react-icons/lu";
import { LuMessageSquareMore } from "react-icons/lu";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { VscGear } from "react-icons/vsc";
import { IoIosLogOut } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/store/hooks";

export default function Sidebar() {
    const router = useRouter();
    const user_data = useAppSelector((state) => state.user); 
    return(
        <div className="flex flex-col w-[20%] h-[95vh] bg-[#1a1a1a] rounded-sm transition ease-in all">
            <div className="flex flex-col h-full pt-[0.5vw] pl-[0.5vw] pr-[0.5vw] pb-[0.5vw]">
                <div className="h-[10%]">
                    <p className="cursor-pointer text-gray-300 pt-[0.5vw] pb-[0.5vw] pr-[0.5vw] pl-[0.5vw] rounded-sm bg-[#2b2b2b] hover:bg-[#30302f] w-[18.5vw] text-center hover:text-white">{user_data.email}</p>
                </div>
                
            <div className="h-[75%] text-gray-300 ml-[0.25vw] mr-[0.25vw] ">
                <div className="flex cursor-pointer gap-[0.5vw] items-center w-full hover:bg-[#30302f] pt-[0.25vw] pb-[0.25vw] pl-[0.75vw] pr-[0.75vw] rounded-sm hover:text-white" onClick={() => router.push('/second-brain')}>
                    <LuBrainCircuit />
                    <p className="pt-[0.5vw] pb-[0.5vw] pr-[0.5vw] pl-[0.5vw]">Brain</p>
                </div>
                <div className="flex cursor-pointer gap-[0.5vw] items-center w-full hover:bg-[#30302f] pt-[0.25vw] pb-[0.25vw] pl-[0.75vw] pr-[0.75vw] rounded-sm hover:text-white" onClick={() => router.push('/connections')}>
                    <MdOutlinePeopleAlt />
                    <p className="pt-[0.5vw] pb-[0.5vw] pr-[0.5vw] pl-[0.5vw]">Connections</p>
                </div>
                <div className="flex cursor-pointer gap-[0.5vw] items-center w-full hover:bg-[#30302f] pt-[0.25vw] pb-[0.25vw] pl-[0.75vw] pr-[0.75vw] rounded-sm hover:text-white" onClick={() => router.push('/conversations')}>
                    <LuMessageSquareMore />
                    <p className="pt-[0.5vw] pb-[0.5vw] pr-[0.5vw] pl-[0.5vw]">Your Conversations</p>
                </div>
            </div>

            <div className="h-[15%]">
                <div className=" cursor-pointer flex gap-[0.5vw] items-center hover:bg-[#30302f] pt-[0.25vw] pb-[0.25vw] pl-[0.75vw] pr-[0.75vw] rounded-sm hover:text-white">
                    <VscGear />
                    <p className="pt-[0.5vw] pb-[0.5vw] pr-[0.5vw] pl-[0.5vw]">Settings</p>
                </div>
                <div className="cursor-pointer flex gap-[0.5vw] items-center hover:bg-[#30302f] pt-[0.25vw] pb-[0.25vw] pl-[0.75vw] pr-[0.75vw] rounded-sm hover:text-white">
                    <IoIosLogOut />
                    <p className="pt-[0.5vw] pb-[0.5vw] pr-[0.5vw] pl-[0.5vw]">Logout</p>
                </div>
            </div>
            </div>
        </div>
    )
}