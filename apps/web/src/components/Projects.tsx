import { TextAnimate } from './ui/text-animate'

interface IExperience {
    role: string;
    company: string;
    time: string;
    duration: string;
}


function BlockExp({ role, company, time, duration }: IExperience) {
  const companyItems = company.split(",").map(item => item.trim());

  return (
    <div className="flex md:mt-[0.5vw] md:mb-[0.5vw] justify-between rounded-md items-center bg-[#2b2b2b] text-white md:p-[1vw]">
      <div className="flex flex-col">
        <TextAnimate animation="slideLeft" className="text-[1.75vw]">
          {role}
        </TextAnimate>
        <div className="flex flex-wrap gap-[0.5vw] mt-[0.5vw]">
          {companyItems.map((item, index) => (
            <TextAnimate key={index} animation="slideLeft" className="bg-white text-black rounded-md md:pt-[0.25vw] md:pb-[0.25vw] md:pr-[0.5vw] md:pl-[0.5vw] text-[1vw]">
              {item}
            </TextAnimate>
          ))}
        </div>
      </div>

      <div className="flex flex-col text-end">
        <TextAnimate animation="slideLeft" className="text-[1.75vw]">
          {time}
        </TextAnimate>
        <TextAnimate animation="slideLeft">{duration}</TextAnimate>
      </div>
    </div>
  );
}


function Projects() {
  return (
    <div className="flex flex-col md:font-medium rounded-md md:mt-[0vw] md:mb-[0.5vw] md:pl-[2vw] md:pr-[2vw] md:pt-[0.5vw] md:pb-[1.5vw] bg-black text-white">
        <TextAnimate animation='slideLeft' duration={0.5} className="md:text-[3vw] ">Projects</TextAnimate>
        <BlockExp role='KahaaniAI - A Conversational Tour Platform.' company='React, TypeScript, NodeJS, MongoDB, AWS-S3, AWS-EC2, AWS-Cloudfront' time='6 Months' duration='Jul 25 - Dec 25' />
        <BlockExp role='Sockify - Realtime Chat App with Memory Layer.' company='RanchoLabs, IIT-Delhi (Remote)' time='2 Months' duration='Jun 25 - Jul 25' />
        <BlockExp role='CloudBridge - Microservices Application to deploy Github Repositories.' company='Innovators Hub, MITWPU-Pune' time='12 Months' duration='Aug 24 - Aug 25' />
        <BlockExp role='Autom8X - A Visual No-code editor for making complex automations' company='Innovators Hub, MITWPU-Pune' time='12 Months' duration='Aug 24 - Aug 25' />
    </div>
  )
}

export default Projects