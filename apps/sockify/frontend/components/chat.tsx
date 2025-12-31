import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Avatar } from "./ui/avatar"

const arr = [
    {id: 1, name: "Aryan Chauhan", email: "aryancwork@gmail.com"},
    {id: 2, name: "Aryan Chauhan", email: "aryancwork@gmail.com"},
    {id: 3, name: "Aryan Chauhan", email: "aryancwork@gmail.com"},
    {id: 1, name: "Aryan Chauhan", email: "aryancwork@gmail.com"},
    {id: 2, name: "Aryan Chauhan", email: "aryancwork@gmail.com"},
    {id: 3, name: "Aryan Chauhan", email: "aryancwork@gmail.com"},
    {id: 1, name: "Aryan Chauhan", email: "aryancwork@gmail.com"},
    {id: 2, name: "Aryan Chauhan", email: "aryancwork@gmail.com"},
    {id: 3, name: "Aryan Chauhan", email: "aryancwork@gmail.com"},
    {id: 1, name: "Aryan Chauhan", email: "aryancwork@gmail.com"},
    {id: 2, name: "Aryan Chauhan", email: "aryancwork@gmail.com"},
    {id: 3, name: "Aryan Chauhan", email: "aryancwork@gmail.com"},
    {id: 1, name: "Aryan Chauhan", email: "aryancwork@gmail.com"},
    {id: 2, name: "Aryan Chauhan", email: "aryancwork@gmail.com"},
    {id: 3, name: "Aryan Chauhan", email: "aryancwork@gmail.com"},
    {id: 4, name: "Aryan Chauhan", email: "aryancwork@gmail.com"}
]

export default function Chat() {
  return (
    <div className="flex gap-[1vw] w-full h-[95vh]">

      <div className="w-[20vw] bg-[#1a1a1a] rounded-sm p-[1vw] flex flex-col min-h-0">
        <p>People</p>
        <div className="flex-1 overflow-y-auto flex flex-col gap-[0.75vw] mt-[2vw] ml-[0.5vw] pr-[0.5vw] scrollbar-thin">
          {arr.map((usr, idx) => (
            <div key={idx} className="flex items-center cursor-pointer gap-[1vw] bg-[#2b2b2b] hover:bg-[#30302f] p-[0.75vw] rounded-sm">
              <Avatar className="flex bg-blue-500 items-center pl-[0.8vw] ml-[1vw] ">
                <AvatarFallback>{usr.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-[1.25vw]">{usr.name}</p>
                <p className="text-[0.85vw] text-gray-400">
                  {usr.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[56vw] bg-[#1a1a1a] rounded-sm p-[1vw]">
        <p></p>
      </div>

    </div>
  );
}

