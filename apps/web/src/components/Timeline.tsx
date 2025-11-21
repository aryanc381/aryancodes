"use client";

import { VscTelescope, VscArchive, VscActivateBreakpoints } from "react-icons/vsc";
import { cn } from "@/lib/utils";
import { ArcTimeline } from "./ui/arc-timeline";

const data = [
  {
    time: "2025",
    steps: [
      { icon: <VscTelescope className="w-[5vw] h-[5vw] md:hidden" />, content: "Launched v1" },
      { icon: <VscArchive className="w-[5vw] h-[5vw]" />, content: "Improved UX" },
    ],
  },
  {
    time: "2026",
    steps: [
      { icon: <VscActivateBreakpoints className="w-[5vw] h-[5vw]" />, content: "Growth" },
    ],
  },
];

export function Arc() {
  return (
    <div className="flex flex-col">
      <div className="mt-[0vw]">
        <ArcTimeline data={data} />
      </div>
    </div>
  );
}
