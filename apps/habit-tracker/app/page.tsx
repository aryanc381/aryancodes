import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh]">
      <p className="text-[5vw] font-mono tracking-[-0.5vw]">Habit Tracker</p>
      <div className="text-[1.25vw]">
        <p>The best solution to maximize and self critic your growth.</p>
      </div>
      <div className="">
        <div className="absolute top-[1vw] end-[1vw]">
          <Button variant={'link'} className="rounded-[0.1vw] cursor-pointer"><Link href={'/auth/signup'}>signup</Link></Button>
          <Button variant={'link'} className="rounded-[0.1vw] cursor-pointer"><Link href={'/auth/login'}>login</Link></Button>
        </div>
        <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh]">
          <p className="text-[5vw] font-mono tracking-[-0.5vw]">Habit Tracker</p>
          <div className="text-[1.25vw]">
            <p>The best solution to maximize and self critic your growth.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
