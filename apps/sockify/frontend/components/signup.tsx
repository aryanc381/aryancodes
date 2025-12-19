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
import { useState } from "react";
import { toast } from "sonner";

interface SignupRequest {
    name: string;
    email: string;
    password: string;
}

interface SignupResponse {
    status: number,
    msg: string;
    name: string;
    password: string;
    token: string;
}

export default function Signup() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const signUpHandler = async({name, email, password}: SignupRequest) => {
        if(!name || !email || !password) {
            toast.warning('Missing credentials.');
        }
        await toast.promise(
            async() => {
                const response = await axios.post<SignupResponse>(
                    'http://localhost:5000/v1/api/auth/signup',
                    {
                        email: email,
                        password: pass,
                        name: name
                    },
                );
                return response.data;
            },
            {
                loading: 'Creating your account...',
                success: (data) => `${data.msg}`,
                error: 'Sockify Backend Unavailable.'
            }
        )
    }
    const { theme } = useTheme()
    return (
        <Card className="w-full max-w-sm border-none p-0 shadow-none">
        <MagicCard gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"} className="p-0">
            <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
            <CardTitle>Signup</CardTitle>
            <CardDescription>Enter your credentials to signup for sockify.</CardDescription>
            </CardHeader>
            <CardContent className="p-4">
            <form>
                <div className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="email">Full Name</Label>
                    <Input value={name} onChange={(e) => {setName(e.target.value)}} id="name" type="text" placeholder="Aryan Chauhan" />
                </div>
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
            <Button className="w-full cursor-pointer">Sign In</Button>
            </CardFooter>
        </MagicCard>
        </Card>
    )
}
