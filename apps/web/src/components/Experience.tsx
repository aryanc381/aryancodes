import { PixelatedCanvasDemo } from './PixelatedCanvas';
import { TextAnimate } from './ui/text-animate'

interface IExperience {
    role: string;
    company: string;
    time: string;
    duration: string;
}

function BlockExp({role, company, time, duration}: IExperience) {
    return(
        <div className="flex font-semibold items-center md:font-medium mb-[3vw] pt-[3vw] pb-[3vw] pl-[3vw] pr-[4vw] md:mt-[1vw] md:mb-[0.5vw] justify-between rounded-md md:pb-[1.25vw] bg-[#2b2b2b] text-white md:p-[1vw]">
            <div className="flex flex-col">
                <TextAnimate animation='blurIn' className='text-[4vw] md:text-[1.75vw]'>{role}</TextAnimate>
                <TextAnimate animation='blurIn' className='text-[3vw] md:text-[2vw]'>{company}</TextAnimate>
            </div>
            <div className="flex flex-col text-end">
                <TextAnimate animation='blurIn' className='md:text-[1.75vw]'>{time}</TextAnimate>
                <TextAnimate animation='blurIn' className='text-[3vw] md:text-[1.15vw]'>{duration}</TextAnimate>
            </div>
        </div>
    )
}
function Experience() {
  return (
    <div className="md:flex">
        <div className="flex flex-col w-full mb-[3vw] font-semibold pl-[4vw] pt-[1vw] pr-[4vw]  pb-[1vw] md:w-[full] md:font-medium rounded-md md:mt-[0.5vw] md:mb-[1vw] md:pl-[2vw] md:pr-[2vw] md:pt-[0.5vw] md:pb-[1.5vw] bg-black text-white">
            <TextAnimate animation='blurIn' duration={0.5} className="text-[8vw] md:text-[3vw]">Experience</TextAnimate>
            <div className="mt-[1vw] md:mt-[0vw]">
                <BlockExp role='Software Developer Intern' company='NComputing India Pvt Ltd, Pune' time='6 Months' duration='Jul 25 - Dec 25' />
                <BlockExp role='Advance AI Instructor' company='RanchoLabs, IIT-Delhi (Remote)' time='2 Months' duration='Jun 25 - Jul 25' />
                <BlockExp role='Software Developer' company='Innovators Hub, MITWPU-Pune' time='12 Months' duration='Aug 24 - Aug 25' />
            </div>
        </div>
        <div className="hidden mb-[1vw] md:flex md:justify-center md:w-[50%] ">
            <PixelatedCanvasDemo />
        </div>
    </div>
  )
}


export default Experience