import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Connections() {
    return(
        <div className="flex w-full bg-[#1a1a1a] rounded-sm pl-[1.25vw] pr-[1.25vw] pt-[1vw] pb-[1vw] gap-[1vw]">
            <div className="flex flex-col w-[50%] gap-[1vw]">
                <div className="flex h-[50%] bg-[#2b2b2b] pl-[1.5vw] pr-[1.5vw] pt-[1vw] pb-[1vw] rounded-sm">
                    <p className="text-[2vw]">Pending Requests</p>
                </div>

                <div className="bg-[#2b2b2b] h-[50%] pl-[1.5vw] pr-[1.5vw] pt-[1vw] pb-[1vw] rounded-sm">
                    <p className="text-[2vw]">Your Connects</p>
                </div>
            </div>

            <div className="flex flex-col gap-[1vw] justify-center items-center text-[2vw] bg-[#2b2b2b] w-[50%] pl-[1.25vw] pr-[1.25vw] pt-[1vw] pb-[1vw] rounded-sm">
                <p>Add Connects</p>
                <div className="flex gap-[0.5vw]">
                    <Input className="w-[80%]" placeholder="ex. aryanc381@gmail.com" />
                    <Button className="rounded-sm">Search</Button>
                </div>
                
            </div>
        </div>
    )
}