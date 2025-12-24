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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { setSearchUsers } from "@/lib/store/slice/searchSlice";

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
    const users  = useAppSelector((state) => state.searchUser.users);
    const dispatch = useDispatch();
    const [r_email, setRemail] = useState('');
    const [input, setInput] = useState('');

    interface AcceptResponse {
        msg: string;
        status: number;
    }

    interface GetAllResponse {
        status: number;
        msg: string;
        existing_users: {
            name: string;
            email: string;
        }[]
    }

    const searchHandler = async() => {
        toast.promise(
            Promise.resolve(
                axios.get<GetAllResponse>('http://localhost:5000/v1/api/connect/fetch-all?input=' + input,
                ),
            ),
            {
                loading: 'Searching for people...',
                success: (res) => {dispatch(setSearchUsers({users: res.data.existing_users})); return res.data?.msg ? `${res.data.existing_users.length} users found.` : 'No users found.'},
                error: () => "Backend not available."
            }
        );

    }

    const acceptHandler = async() => {
        toast.promise(
            Promise.resolve(
                axios.post<AcceptResponse>('http://localhost:5000/v1/api/connect/accept', 
                    { s_email: r_email, r_email: user.email }
                ),
            ),
            {
                loading: 'Accepting Friend Request',
                success: (res) => { return res.data?.msg },
                error: () =>  "Backend not available."
            }, 
        );
        fetchConnections(); 
    }

    const requestHandler = async() => {
        if(r_email === user.email) {
            toast.warning('You cannot send a request to yourself!');
            return;
        }
        toast.promise(
            Promise.resolve(
                axios.post<AcceptResponse>('http://localhost:5000/v1/api/connect/send',
                    { s_email: user.email , r_email: r_email }
                ),
            ),
            {
                loading: 'Sending Friend Request...',
                success: (res) => { return res.data.msg },
                error: () => "Backend not available."
            }
        )
    }

    const fetchConnections = async () => {
        const res = await axios.get<RetrieveUsersResponse>(
            `http://localhost:5000/v1/api/connect/retrieve?email=${user.email}`
        );
        toast.success('User data updated and fetched.');

        dispatch(
            setUsers({
            pending: res.data.pending_users,
            accepted: res.data.accepeted_users,
            })
        );
    };

    useEffect(() => {
        if (!user?.email) return;
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
                        {pending.map((usx: any, index: any) => (
                            <div className="flex flex-col" key={index}>
                                <div className="flex items-center gap-[0.5vw]">
                                    <Avatar>
                                        <AvatarImage className="" src={'https://cdn-icons-png.freepik.com/512/8188/8188362.png'} />
                                    </Avatar>
                                    <div className="">
                                        <p>{usx.name}</p>
                                        <p className="text-[0.85vw] text-gray-400">{usx.email}</p>
                                    </div>
                                    <div className="flex justify-end w-full mr-[1vw]">
                                        <Button className="rounded-3xl text-[1vw] cursor-pointer" variant={'secondary'} onClick={() => {setRemail(usx.email); acceptHandler();}}>Accept</Button>
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
                        {accepted.map((usx, index) => (
                            <div key={index} className="">
                                <div className="flex items-center gap-[0.5vw]">
                                    <Avatar>
                                        <AvatarImage className="" src={'https://cdn-icons-png.freepik.com/512/8188/8188362.png'} />
                                    </Avatar>
                                    <div className="">
                                        <p>{usx.name}</p>
                                        <p className="text-[0.85vw] text-gray-400">{usx.email}</p>
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
                    <Input value={input} onChange={(e) => {setInput(e.target.value)}} className="w-[80%]" placeholder="ex. manasvi nawal" />
                    <Dialog>
                        <DialogTrigger asChild><Button className="rounded-sm cursor-pointer" onClick={searchHandler}>Search</Button></DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                            <DialogTitle>Sockify DB User Search</DialogTitle>
                            <DialogDescription asChild>
                                <div className="">
                                    <div className="mt-[1vw] gap-[1vw] flex flex-col overflow-y-auto no-scrollbar ">
                                        {users.map((usx: any, index: any) => (
                                            <div className="flex flex-col" key={index}>
                                                <div className="flex items-center gap-[0.5vw]">
                                                    <Avatar>
                                                        <AvatarImage className="" src={'https://cdn-icons-png.freepik.com/512/8188/8188362.png'} />
                                                    </Avatar>
                                                    <div className="">
                                                        <p>{usx.name}</p>
                                                        <p className="text-[0.85vw] text-gray-400">{usx.email}</p>
                                                    </div>
                                                    <div className="flex justify-end w-full mr-[1vw]">
                                                        <Button className="rounded-3xl text-[1vw] cursor-pointer" variant={'secondary'} onClick={() => {setRemail(usx.email); requestHandler();}}>Accept</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                    
                </div>
            </div>
        </div>
    )
}