"use client"
import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "@/lib/store/slice/connectSlice";
import { useAppSelector } from "@/lib/store/hooks";
import { toast } from "sonner";

interface ConnectUser {
  name: string;
  email: string;
}

interface RetrieveUsersResponse {
  pending_users: ConnectUser[];
  accepeted_users: ConnectUser[];
}

export default function Connections() {
    const [refresh, setRefresh] = useState(false);
    const user = useSelector((state: any) => state.user);
    const { pending, accepted } = useAppSelector((state) => state.users);
    const dispatch = useDispatch();

    const acceptHandler = async() => {

    }

    useEffect(() => {
        if (!user?.email) return;

        const fetchConnections = async () => {
        const res = await axios.get<RetrieveUsersResponse>(
            `http://localhost:5000/v1/api/connect/retrieve?email=${user.email}`
        );
        toast.success('User Data Fetched');

        dispatch(
            setUsers({
            pending: res.data.pending_users,
            accepted: res.data.accepeted_users,
            })
        );
        };

        fetchConnections();
    }, [user?.email, dispatch, refresh]);
    return(
        <div className="flex w-full bg-[#1a1a1a] rounded-sm pl-[1.25vw] pr-[1.25vw] pt-[1vw] pb-[1vw] gap-[1vw]">
            <div className="flex flex-col w-[50%] gap-[1vw]">
                
                <div className="flex flex-col h-[45vh] bg-[#2b2b2b] pl-[1.5vw] pr-[1.5vw] pt-[1vw] pb-[1vw] rounded-sm">
                    <div className="flex justify-between">
                        <p className="text-[2vw]">Pending Requests</p>
                        <Button onClick={() => {setRefresh(!refresh)}} className="rounded-lg cursor-pointer">Refresh</Button>
                    </div>
                    <div className="mt-[1vw] gap-[1vw] flex flex-col overflow-y-auto no-scrollbar ">
                        {pending.map((user: any, index: any) => (
                            <div className="flex flex-col" key={index}>
                                <div className="flex items-center gap-[0.5vw]">
                                    <Avatar>
                                        <AvatarImage className="" src={'https://cdn-icons-png.freepik.com/512/8188/8188362.png'} />
                                    </Avatar>
                                    <div className="">
                                        <p>{user.name}</p>
                                        <p className="text-[0.85vw] text-gray-400">{user.email}</p>
                                    </div>
                                    <div className="flex justify-end w-full mr-[1vw]">
                                        <Button className="rounded-3xl text-[1vw] cursor-pointer" variant={'secondary'}>Accept</Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-[#2b2b2b] h-[44vh] pl-[1.5vw] pr-[1.5vw] pt-[1vw] pb-[1vw] rounded-sm flex flex-col">
                    <div className="flex justify-between">
                        <p className="text-[2vw]">Your Connects</p>
                        <Button onClick={() => {setRefresh(!refresh)}} className="rounded-lg cursor-pointer">Refresh</Button>
                    </div>
                    <div className="mt-[1vw] gap-[1vw] overflow-y-auto no-scrollbar flex-1 flex flex-col">
                        {accepted.map((user, index) => (
                            <div key={index} className="">
                                <div className="flex items-center gap-[0.5vw]">
                                    <Avatar>
                                        <AvatarImage className="" src={'https://cdn-icons-png.freepik.com/512/8188/8188362.png'} />
                                    </Avatar>
                                    <div className="">
                                        <p>{user.name}</p>
                                        <p className="text-[0.85vw] text-gray-400">{user.email}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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