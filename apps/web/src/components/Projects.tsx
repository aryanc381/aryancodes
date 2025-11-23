import { TextAnimate } from "./ui/text-animate";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal"

interface IExperience {
  role: string;
  company: string;
  time: string;
  duration: string;
}

function BlockExp({ role, company, time, duration }: IExperience) {
  const companyItems = company.split(",").map((item) => item.trim());

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between bg-[#2b2b2b] text-white rounded-md p-[4vw] md:p-[1vw] mb-[4vw] md:mb-[0.75vw]">
      <div className="flex flex-col md:w-[60%]">
        <TextAnimate animation="slideLeft" className="text-[5vw] md:text-[1.75vw] font-semibold">{role}</TextAnimate>

        <div className="flex flex-wrap gap-[1vw] md:gap-[0.5vw] mt-[2vw] md:mt-[0.5vw]">
          {companyItems.map((item, index) => (
            <TextAnimate key={index} animation="slideLeft" className="bg-white text-black rounded-md text-[3vw] md:text-[1vw] pt-[0.5vw] pb-[0.5vw] pl-[1vw] pr-[1vw] md:pt-[0.25vw] md:pb-[0.25vw] md:pl-[0.5vw] md:pr-[0.5vw]">
              {item}
            </TextAnimate>
          ))}
        </div>
      </div>

      <div className="flex flex-col text-left md:text-right mt-[4vw] md:mt-0">
        <TextAnimate animation="slideLeft" className="text-[4vw] md:text-[1.75vw] font-medium">{time}</TextAnimate>
        <TextAnimate animation="slideLeft" className="text-[3vw] md:text-[1.15vw]">{duration}</TextAnimate>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="hidden md:block md:flex md:justify-center md:gap-[2vw]">
      <div className="flex flex-col  w-[40%] text-[3vw] md:items-center text-black font-medium">
        <p className="text-center mb-[2vw]">Built With</p>
        <Terminal>
          <TypingAnimation>pnpm dlx shadcn@latest init</TypingAnimation>
          <AnimatedSpan>✔ Preflight checks.</AnimatedSpan>
          <AnimatedSpan>✔ Validating Tailwind CSS.</AnimatedSpan>
          <TypingAnimation>Success! Project initialization completed.</TypingAnimation>
        </Terminal>       
        
      </div>
      <div className="flex flex-col bg-black text-white rounded-md pb-[1vw] p-[4vw] md:pl-[2vw] md:pr-[2vw] md:pt-[0.5vw] md:pb-[1.5vw] md:mt-[0vw] md:mb-[0.5vw]">
      <TextAnimate animation="slideLeft" duration={0.5} className="text-[8vw] md:text-[3vw] mb-[2vw] md:mb-[1vw] font-semibold md:font-medium">Projects</TextAnimate>
      <BlockExp role="KahaaniAI - A Conversational Tour Platform." company="React, TypeScript, NodeJS, MongoDB, AWS-S3, AWS-EC2, AWS-Cloudfront" time="6 Months" duration="Jul 25 - Dec 25" />
      <BlockExp role="Sockify - Realtime Chat App with Memory Layer." company="React, Node.js, Socket.io, Redis, WebSockets" time="2 Months" duration="Jun 25 - Jul 25" />
      <BlockExp role="CloudBridge - Microservices Application to deploy Github Repositories." company="Docker, Kubernetes, Node.js, Express, MongoDB, GitHub-API" time="12 Months" duration="Aug 24 - Aug 25" />
      <BlockExp role="Autom8X - A Visual No-code editor for making complex automations" company="React, Zustand, Node.js, MongoDB, Cloudflare-Workers" time="12 Months" duration="Aug 24 - Aug 25" />
    </div>
    </div>
    
  );
}

export default Projects;
