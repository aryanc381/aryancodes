import { ThreeDCardDemo } from "./PubCard";
import { TextAnimate } from "./ui/text-animate";

function Publications() {
  return (
    <div className="md:flex">
      <div className="flex flex-col w-full mb-[3vw] font-semibold pl-[4vw] pt-[1vw] pr-[4vw] md:w-full md:font-medium rounded-md md:mt-[0.5vw] md:mb-[1vw] md:pl-[2vw] md:pr-[2vw] md:pt-[0.5vw] md:pb-[1.5vw] bg-black text-white">
        
        <TextAnimate animation="blurIn" duration={0.5} className="text-[8vw] md:text-[3vw]">Publications</TextAnimate>
        <div className="flex gap-[2vw] mt-[-17vw] md:mt-[-4vw] overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-[4vw] md:pb-0">
          
          <div className="snap-start min-w-[88vw] md:min-w-0">
            <ThreeDCardDemo title="From Signs to Speech" description="An End-to-End Conversational Platform for Deaf and Mute Individuals Using GRU and LLM Integration." image="/papers/rp1.png" buttonText="See Paper" buttonLink="https://drive.google.com/file/d/1fDU_ogG9LeKhFRyOxxKOTr_Vxsfm5L4B/view?usp=sharing" />
          </div>

          <div className="snap-start min-w-[88vw] md:min-w-0">
            <ThreeDCardDemo title="Second Brain" description="An Agentic-AI driven Memory Layer for Intelligent Real-Time Messaging Communication System for SMBs." image="/papers/rp1.png" buttonText="See Paper" buttonLink="https://www.google.com" />
          </div>

          <div className="snap-start min-w-[88vw] md:min-w-0">
            <ThreeDCardDemo title="KahaaniAI" description="An Interactive Agentic-AI driven Conversational Guidance Platform for Indian Monuments using a Fullstack AI Approach." image="/papers/rp3.jpg" buttonText="See Paper" buttonLink="https://drive.google.com/file/d/1z6ZOfyLNwmwROqBgDKmZ0wUQqr-XTtzB/view?usp=sharing" />
          </div>
        </div>
        <div className="flex justify-end md:hidden mb-[4vw]">
          <p className="pl-[2vw] pr-[2vw] p-[1vw] text-[5vw] bg-gray-900 border border-gray-500 rounded">→</p>
        </div>
      </div>

      <div className="font-medium text-[2.5vw] md:ml-[2vw] hidden items-center text-justify md:flex md:w-[50%] break-all">
        <TextAnimate animation="blurIn">Full-stack projects built with research validation and approved by IEEE.</TextAnimate>
      </div>
    </div>
  );
}

export default Publications;
