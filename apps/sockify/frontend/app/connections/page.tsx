import Connections from "@/components/connections";
import Sidebar from "@/components/sidebar";

export default function() {
    return(
        <div className="flex ml-[1vw] mt-[1vw] mb-[1vw] mr-[1vw] gap-[1vw]">
                <Sidebar />
                <Connections />
        </div>
    )
}