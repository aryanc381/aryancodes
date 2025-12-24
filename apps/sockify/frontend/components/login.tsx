"use client"
import { MagicCard } from "@/components/ui/magic-card";
import { useTheme } from "next-themes";
import axios from 'axios';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/lib/store/slice/userSlice";

interface LoginResponse {
    status: number;
    msg: string;
    id: number;
    name: string;
    password: string;
    email: string;
    token: string;
}

interface AutoLoginResponse {
    email: string;
    status: number;
    name: string;
    id: number;
    msg: string;
}

export default function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        const autoLogin = async() => {
            try {
                await toast.promise(
                    async() => {
                        const response = await axios.get<AutoLoginResponse>(
                            'http://localhost:5000/v1/api/auth/autologin', 
                            { withCredentials: true }
                        );
                        return response.data;
                    }, 
                    {
                        loading: 'Attempting autologin...',
                        success: (data) => {
                            if(data.status === 201) {
                                dispatch(setUser({ name: data.name, email: data.email, id:data.id }));
                                router.push('/connections');
                                return data.msg;
                            } 
                            return `${data.msg}`
                        },
                        error: 'Backend Not Available, contact manasvi / aryan.'
                    }
                );
            } catch(err) {
                console.log(err);
            }
        }
        autoLogin(); 
    }, []);

    const loginHandler = async() => {
        if(!email || !pass) {
            toast.warning('Missing credentials.');
            return;
        }
        await toast.promise(
            async() => {
                const response = await axios.post<LoginResponse>(
                    'http://localhost:5000/v1/api/auth/login',
                    {
                        email: email,
                        password: pass,
                    },
                    {
                        withCredentials: true
                    }
                );
                return response.data;
            },
            {
                loading: 'Fetching your account...',
                success: (data) => {
                    if(data.status === 201) {
                        
                        dispatch(setUser({ name: data.name, email: data.email, id:data.id }));
                        console.log(data);

                        router.push('/connections'); 
                        return data.msg;
                    } else { 
                        return `${data.msg}`
                    }
                },
                error: 'Sockify Backend Unavailable.'
            }
        )
    }
    const { theme } = useTheme()
    return (
        <Card className="w-full max-w-sm border-none p-0 shadow-none">
        <MagicCard gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"} className="p-0">
            <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
            <CardTitle>Login</CardTitle>
            <CardDescription>Enter credentials to login.</CardDescription>
            </CardHeader>
            <CardContent className="p-4">
            <form>
                <div className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input value={email} onChange={(e) => {setEmail(e.target.value)}} id="email" type="email" placeholder="aryancwork381@manasvi.com" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input value={pass} onChange={(e) => {setPass(e.target.value)}} id="password" placeholder="********************" type="password" />
                </div>
                </div>
            </form>
            </CardContent>
            <CardFooter className="border-border border-t p-4 [.border-t]:pt-4">
            <Button className="w-full cursor-pointer" onClick={loginHandler}>Sign In</Button>
            </CardFooter>
        </MagicCard>
        </Card>
    )
}
