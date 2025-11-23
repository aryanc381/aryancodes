import { ThreeDCardDemo } from "./PubCard";
import { TextAnimate } from "./ui/text-animate";

function Publications() {
  return (
    <div className="md:flex">
        <div className="flex flex-col w-full mb-[3vw] font-semibold pl-[4vw] pt-[1vw] pr-[4vw] md:w-[full] md:font-medium rounded-md md:mt-[0.5vw] md:mb-[1vw] md:pl-[2vw] md:pr-[2vw] md:pt-[0.5vw] md:pb-[1.5vw] bg-black text-white">
            <TextAnimate animation='slideLeft' duration={0.5} className="text-[8vw] md:text-[3vw]">Publications</TextAnimate>
            <div className="flex mt-[-4vw] justify-left gap-[2vw]">
                <ThreeDCardDemo title="From Signs to Speech" description="An End-to-End Conversational Platform for Deaf and Mute Individuals Using GRU and LLM Integration." image="/image.png" buttonText="See Paper" buttonLink="https://www.google.com" />
                <ThreeDCardDemo title="From Signs to Speech" description="An End-to-End Conversational Platform for Deaf and Mute Individuals Using GRU and LLM Integration." image="/image.png" buttonText="See Paper" buttonLink="https://www.google.com" />
                <ThreeDCardDemo title="From Signs to Speech" description="An End-to-End Conversational Platform for Deaf and Mute Individuals Using GRU and LLM Integration." image="/image.png" buttonText="See Paper" buttonLink="https://www.google.com" />
            </div>
        </div>
        <div className="font-medium text-[2.5vw] md:ml-[2vw] hidden items-center text-justify md:flex md:w-[50%] break-all">
        <TextAnimate  animation="blurIn">Full-stack projects built with research validation and approved by IEEE publication.</TextAnimate>
        </div>
    </div>
  )
}

export default Publications;