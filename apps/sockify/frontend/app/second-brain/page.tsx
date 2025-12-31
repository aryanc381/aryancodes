import Chat from "@/components/chat";
import Sidebar from "@/components/sidebar";

export default function () {
  return (
    <div className="flex flex ml-[1vw] mt-[1vw] mb-[1vw] mr-[1vw] gap-[1vw]">
        <Sidebar />
        <div className="">
          <Chat />
        </div>
    </div>
  )
}
