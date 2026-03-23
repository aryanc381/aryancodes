"use client"

import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import dynamic from "next/dynamic"

const MagicCard = dynamic(
  () => import("@/components/ui/magic-card").then(mod => ({ default: mod.MagicCard })),
  { ssr: false }
)
import Link from "next/link"
import { useState } from "react"
import { singUpHandler } from "@/lib/functions"
import { toast } from "sonner"


export default function() {
  const { theme } = useTheme();
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="">
        <div className="absolute top-[1vw] end-[1vw]">
            <Button variant={'link'} className="rounded-[0.1vw] cursor-pointer"><Link href={'/'}>home</Link></Button>
            <Button variant={'link'} className="rounded-[0.1vw] cursor-pointer"><Link href={'/auth/signup'}>signup</Link></Button>
            <Button variant={'link'} className="rounded-[0.1vw] cursor-pointer"><Link href={'/auth/login'}>login</Link></Button>
        </div>
         <div className="flex justify-center items-center w-[100vw] h-[100vh]">
            <Card className="w-full max-w-sm border-none p-0 shadow-none">
            <MagicCard
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                className="p-0">
                <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
                <CardTitle>Signup</CardTitle>
                <CardDescription>A strategic way to see growth.</CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                <form>
                    <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input value={fullName} onChange={(e) => setFullName(e.target.value)} id="fullName" type="fullName" placeholder="Aryan Chauhan" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="aryan@gmail.com" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input value={password} onChange={(e) => setPassword(e.target.value)} id="password" type="password" placeholder="************" />
                    </div>
                    </div>
                </form>
                </CardContent>
                <CardFooter className="border-border border-t p-4 [.border-t]:pt-4">
                <Button type="button" className="w-full" onClick={async () => {const response = await singUpHandler(fullName, email, password); toast.success(response.msg)}}>Signup</Button>
                </CardFooter>
            </MagicCard>
            </Card>
        </div>
    </div>
   
  )
}
