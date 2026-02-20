import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh]">
      <p className="text-[5vw] font-mono tracking-[-0.5vw]">Habit Tracker</p>
      <div className="text-[1.25vw]">
        <p>The best solution to maximize and self critic your growth.</p>
      </div>
    </div>
  );
}
