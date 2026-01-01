"use client"
import { AvatarFallback } from "@radix-ui/react-avatar"
import { Avatar } from "./ui/avatar"
import { useAppSelector } from "@/lib/store/hooks";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type AcceptedUser = {
  id: number;
  name: string;
  email: string;
};

type Message = {
  id: number;
  sender: string;
  payload: string;
}
const arr1: Message[] = [
  { id: 1, sender: "admin", payload: "Hello! How can I help you today?" },
  { id: 2, sender: "user", payload: "I have a question about my account." },
  { id: 3, sender: "Ayush Pitale", payload: "Sure, what seems to be the issue?" },
  { id: 4, sender: "user", payload: "I’m unable to reset my password." },
  { id: 5, sender: "admin", payload: "Did you try using the forgot password link?" },
  { id: 6, sender: "user", payload: "Yes, but I didn’t receive any email." },
  { id: 7, sender: "admin", payload: "Please check your spam folder once." },
  { id: 8, sender: "user", payload: "I checked, it’s not there either." },
  { id: 9, sender: "admin", payload: "Alright, I’ll manually trigger a reset." },
  { id: 10, sender: "user", payload: "Thanks, I appreciate it." },
  { id: 11, sender: "admin", payload: "You should receive it in a sasasasasfvvfvfvasasasaasassasasfew minutes." },
  { id: 12, sender: "user", payload: "Got it! It worsasasas asasasasasasa sasasass asasasassdsdsdks now." },
]; 


type UserConnectsResponse = {
  status: number;
  msg: string;
  response: AcceptedUser[];
};

export default function Chat() {
  const [arr, setArr] = useState<AcceptedUser[]>([]);
  const user = useAppSelector((state) => state.user);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  async function userUpdater(name: string, email: string) {
    setUsername(name);
    setEmail(email);
  }

  useEffect(() => {
    async function userFetcher() {
        const response = await axios.get<UserConnectsResponse>('http://localhost:5000/v1/api/chat/user-connects?input=' + user.email);
        setArr(response?.data?.response);
    }
    userFetcher();
  }, [user.email]);

  return (
    <div className="flex gap-[1vw] w-full h-[95vh]">
      <div className="pt-[2vw] w-[20vw] bg-[#1a1a1a] rounded-sm p-[1vw] flex flex-col min-h-0">
        <p className="text-center text-[1.5vw]">Your Connects</p>

        <div className="flex-1 overflow-y-auto flex flex-col gap-[0.75vw] mt-[2vw] ml-[0.5vw] pr-[0.5vw] scrollbar-thin">
          {arr.map((usr, idx) => (
            <div key={idx} className="flex items-center cursor-pointer gap-[1vw] bg-[#2b2b2b] hover:bg-[#30302f] p-[0.75vw] rounded-sm">
              <Avatar className="flex bg-blue-500 items-center pl-[0.8vw] ml-[1vw]">
                <AvatarFallback>{usr.name[0]}</AvatarFallback>
              </Avatar>

              <div onClick={() => userUpdater(usr.name, usr.email)}>
                <p className="text-[1.25vw]">{usr.name}</p>
                <p className="text-[0.85vw] text-gray-400">{usr.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[56vw] bg-[#1a1a1a] rounded-sm p-[1vw]">
        {username !== "" ? (
          <>
            <div className="flex flex-col bg-[#2b2b2b] border-b-[0.15vw] border-white/10 rounded-sm rounded-b-[0vw] pt-[0.5vw] pb-[0.5vw] pr-[1vw] pl-[1vw]">
              <p className="text-[1.75vw]">{username}</p>
              <p className="text-[1vw] font-bold">{email}</p>
            </div>

            <div className="w-full mb-[1vw] bg-[#2b2b2b] h-[80%] rounded-b-sm overflow-y-auto [scrollbar-width:none] pt-[1vw] pb-[1vw]">
              {arr1.map((msg) => (
                <div key={msg.id} className="flex w-full mt-[0.5vw] mb-[0.25vw]">
                  {msg.sender === username ? (
                    <div className="flex w-full justify-end">
                      <div className="mr-[1vw] flex flex-col p-[1vw] bg-blue-500 max-w-[25vw] rounded-sm rounded-br-[0vw] shadow-md shadow-white/10">
                        <p className="text-[1vw] font-semibold">{msg.sender}</p>
                        <p>{msg.payload}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex w-full justify-start">
                      <div className="ml-[1vw] flex flex-col p-[1vw] bg-gray-500 max-w-[25vw] rounded-sm rounded-bl-[0vw] shadow-md shadow-white/10">
                        <p className="text-[1vw] font-semibold">{msg.sender}</p>
                        <p>{msg.payload}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-[1vw]">
              <Input placeholder="Send Message..." />
              <Button className="cursor-pointer">Send</Button>
            </div>
          </>
        ) : <div className="flex flex-col w-full h-full justify-center items-center">
          <p className="text-[2.25vw]">Choose a contact to begin a conversation</p>
          <p className="text-[1vw] text-gray-300">  Sockify stores conversations solely for its internal memory layer. No data is shared or exposed.</p>
        </div>
        }
      </div>
    </div>
  );
}

