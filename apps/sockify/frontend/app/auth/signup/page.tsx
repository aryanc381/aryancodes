import Navbar from "@/components/navbar";
import Signup from "@/components/signup";

export default function() {
    return(
        <div className="flex w-full h-full">
            <Navbar />
            <div className="flex w-[100vw] h-[100vh] items-center justify-center ">
                <Signup />
            </div>
        </div>
    )
}