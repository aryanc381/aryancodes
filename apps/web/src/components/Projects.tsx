import { FaGithub } from "react-icons/fa";
import { LuLink } from "react-icons/lu";

import { TextAnimate } from "./ui/text-animate";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal"

interface IExperience {
  role: string;
  company: string;
  github: string;
  live: string;
}

function BlockExp({ role, company, github, live }: IExperience) {
  const companyItems = company.split(",").map((item) => item.trim());

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between bg-[#2b2b2b] text-white rounded-md p-[4vw] md:p-[1vw] mb-[4vw] md:mb-[0.75vw]">
      <div className="flex flex-col md:w-[60%]">
        <TextAnimate animation="blurIn" className="text-[5vw] md:text-[1.75vw] font-semibold">{role}</TextAnimate>

        <div className="flex flex-wrap gap-[1vw] md:gap-[0.5vw] mt-[2vw] md:mt-[0.5vw]">
          {companyItems.map((item, index) => (
            <TextAnimate key={index} animation="blurIn" className="bg-white text-black rounded-md text-[3vw] md:text-[1vw] pt-[0.5vw] pb-[0.5vw] pl-[1vw] pr-[1vw] md:pt-[0.25vw] md:pb-[0.25vw] md:pl-[0.5vw] md:pr-[0.5vw]">
              {item}
            </TextAnimate>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center mt-[4vw] md:text-right md:mt-0 md:gap-[1vw] md:pr-[1vw]">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="md:size-[2vw] cursor-pointer" />
        </a>
        <a href={live} target="_blank" rel="noopener noreferrer">
          <LuLink className="md:size-[2vw] cursor-pointer" />
        </a>
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
        <BlockExp role="KahaaniAI - A Conversational Tour Platform." company="React, TypeScript, NodeJS, MongoDB, AWS-S3, AWS-EC2, AWS-Cloudfront" github="https://google.com" live="Jul 25 - Dec 25" />
        <BlockExp role="Sockify - Realtime Chat App with Memory Layer." company="React, Node.js, Socket.io, Redis, WebSockets" github="2 Months" live="Jun 25 - Jul 25" />
        <BlockExp role="CloudBridge - Microservices Application to deploy Github Repositories." company="Docker, Kubernetes, Node.js, Express, MongoDB, GitHub-API" github="12 Months" live="Aug 24 - Aug 25" />
        <BlockExp role="Autom8X - A Visual No-code editor for making complex automations" company="React, Zustand, Node.js, MongoDB, Cloudflare-Workers" github="12 Months" live="Aug 24 - Aug 25" />
      </div>
    </div>
  );
}

export default Projects;
