import { FaGithub } from "react-icons/fa";
import { LuLink } from "react-icons/lu";

import { TextAnimate } from "./ui/text-animate";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

interface IExperience {
  role: string;
  company: string;
  github: string;
  live: string;
}

function BlockExp({ role, company, github, live }: IExperience) {
  const companyItems = company.split(",").map((item) => item.trim());

  return (
    <div className="border border-gray-500 border-[0.1vw] 
                    md:border md:border-[0.05vw] md:border-gray-600 
                    flex flex-col md:flex-row md:items-center justify-between 
                    bg-[#2b2b2b] text-white rounded-md 
                    p-[4vw] md:p-[1vw] mb-[4vw] md:mb-[0.75vw]">

      <div className="flex flex-col md:w-[60%] w-full">
        <TextAnimate 
          animation="blurIn" 
          className="text-[4vw] md:text-[1.75vw] font-semibold"
        >
          {role}
        </TextAnimate>

        <div className="flex flex-wrap gap-[1.5vw] md:gap-[0.5vw] mt-[3vw] md:mt-[0.5vw]">
          {companyItems.map((item, index) => (
            <TextAnimate 
              key={index} 
              animation="blurIn"
              className="border border-gray-500 border-[0.1vw] 
                         md:border md:border-[0.05vw] md:border-gray-600
                         bg-white text-black rounded-md 
                         text-[3.5vw] md:text-[1vw]
                         pt-[1vw] pb-[1vw] pl-[2vw] pr-[2vw]
                         md:pt-[0.25vw] md:pb-[0.25vw] 
                         md:pl-[0.5vw] md:pr-[0.5vw]"
            >
              {item}
            </TextAnimate>
          ))}
        </div>
      </div>

      <div className="flex flex-row md:flex-col gap-[4vw] md:gap-[1vw] 
                      items-center justify-left 
                      mt-[7vw] md:mt-0 md:pr-[1vw]">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="size-[6vw] md:size-[2vw] cursor-pointer" />
        </a>
        <a href={live} target="_blank" rel="noopener noreferrer">
          <LuLink className="size-[6vw] md:size-[2vw] cursor-pointer" />
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="flex md:mb-[0vw] mb-[3vw] flex-col md:flex-row md:justify-center md:gap-[2vw]">
      <div className="flex flex-col w-full md:w-[60%] 
                      text-[4vw] md:text-[3vw] 
                      md:items-center text-black font-medium mb-[6vw] md:mb-[1vw]">
        <p className="text-[8vw] md:text-[3vw] text-center mb-[3vw] md:mb-[1.5vw]">Project Features</p>
        <div className="w-full pl-[3vw] pr-[3vw] md:p-[0vw]">
          <Terminal className="w-full md:w-[90%] mx-auto">
            <AnimatedSpan className="text-blue-400">Initialising Projects of Aryan Chauhan.</AnimatedSpan>
            <TypingAnimation>git clone https://github.com/aryanc381/aryancodes</TypingAnimation>
            <TypingAnimation>cd aryancodes</TypingAnimation>
            <TypingAnimation>npm install</TypingAnimation>
            <TypingAnimation>npm run dev</TypingAnimation>
            <AnimatedSpan className="text-blue-500">▶ Project Bootstrapped Successfully.</AnimatedSpan>
            <AnimatedSpan className="text-blue-500">▶ Next.js 15 + React 19 Initialized.</AnimatedSpan>
            <AnimatedSpan className="text-blue-500">▶ TypeScript Strict Mode Enabled.</AnimatedSpan>
            <AnimatedSpan className="text-blue-500">▶ TailwindCSS + Shadcn/UI Loaded.</AnimatedSpan>
            <AnimatedSpan className="text-blue-500">▶ Server Actions & API Routes Activated.</AnimatedSpan>
            <AnimatedSpan className="text-green-500">✔ Turborepo workspace linked.</AnimatedSpan>
            <AnimatedSpan className="text-green-500">✔ Zustand + React Query setup.</AnimatedSpan>
            <AnimatedSpan className="text-green-500">✔ MongoDB & PostgreSQL ready.</AnimatedSpan>
            <AnimatedSpan className="text-green-500">✔ Prisma schema validated.</AnimatedSpan>
            <AnimatedSpan className="text-green-500">✔ Redis caching enabled.</AnimatedSpan>
            <AnimatedSpan className="text-green-500">✔ S3 storage integration available.</AnimatedSpan>
            <AnimatedSpan className="text-green-500">✔ Dockerized environment ready.</AnimatedSpan>
            <AnimatedSpan className="text-green-500">✔ Cloudflare optimizations applied.</AnimatedSpan>
            <AnimatedSpan className="text-green-500">✔ Vector DB (Pinecone) supported.</AnimatedSpan>
            <AnimatedSpan className="text-green-500">✔ Realtime WebSockets enabled.</AnimatedSpan>
            <AnimatedSpan className="text-blue-500">▶ Production-ready Security Layer.</AnimatedSpan>
            <AnimatedSpan className="text-green-500">✔ NextAuth / OAuth available.</AnimatedSpan>
            <AnimatedSpan className="text-green-500">✔ OWASP-safe APIs applied.</AnimatedSpan>
            <TypingAnimation>Ready! Launching your development environment…</TypingAnimation>
          </Terminal>
        </div>
      </div>

      <div className="border border-gray-500 border-[0.1vw] 
                      md:border md:border-[0.05vw] md:border-gray-600 
                      flex flex-col bg-black text-white rounded-md 
                      p-[4vw] pb-[6vw]
                      md:pl-[2vw] md:pr-[2vw] md:pt-[0.5vw] md:pb-[1.5vw]
                      md:mt-[0vw] md:mb-[0.5vw] w-full">

        <TextAnimate 
          animation="slideLeft" 
          duration={0.5} 
          className="text-[9vw] md:text-[3vw] mb-[4vw] md:mb-[1vw] 
                     font-semibold md:font-medium"
        >
          Projects
        </TextAnimate>

        <BlockExp 
          role="KahaaniAI - A Conversational Tour-Guide Platform." 
          company="React, TypeScript, AWS-EC2, AWS-Cloudfront, AWS-S3, NodeJS, Next.js, MongoDB, Express, JWT, Docker" 
          github="https://google.com" 
          live="Jul 25 - Dec 25" 
        />

        <BlockExp 
          role="Sockify - Realtime Chat App with Memory Layer for Early-stage founders." 
          company="React, Node.js, Redis, WebSockets, Next.js, TypeScript, Postgres, Prisma, Docker, Cookies, Express, Langchain" 
          github="2 Months" 
          live="Jun 25 - Jul 25" 
        />

        <BlockExp 
          role="CloudBridge - Microservices Application to deploy Github Repositories for SMBs." 
          company="React, Node.js, Redis, WebSockets, Next.js, TypeScript, Postgres, Prisma, Docker, Cookies, Express, CI/CD" 
          github="12 Months" 
          live="Aug 24 - Aug 25" 
        />

        <BlockExp 
          role="WebSmith - Multiagent orchestrated website builder for SMBs." 
          company="React, Zustand, Node.js, MongoDB, Next.js, Typescript, Langchain, Gemini API, Express, Flask, Python" 
          github="12 Months" 
          live="Aug 24 - Aug 25" 
        />
      </div>
    </div>
  );
}

export default Projects;
