import { TextAnimate } from './ui/text-animate'

interface IExperience {
    role: string;
    company: string;
    time: string;
    duration: string;
}

function BlockExp({role, company, time, duration}: IExperience) {
    return(
        <div className="flex md:mt-[0.5vw] md:mb-[0.5vw] justify-between rounded-md md:pb-[1.25vw] bg-[#2b2b2b] text-white md:p-[1vw]">
            <div className="flex flex-col">
                <TextAnimate animation='slideLeft' className='text-[1.75vw]'>{role}</TextAnimate>
                <TextAnimate animation='slideLeft'>{company}</TextAnimate>
            </div>
            <div className="flex flex-col text-end">
                <TextAnimate animation='slideLeft' className='text-[1.75vw]'>{time}</TextAnimate>
                <TextAnimate animation='slideLeft'>{duration}</TextAnimate>
            </div>
        </div>
    )
}
function Experience() {
  return (
    <div className="flex flex-col md:font-medium rounded-md md:mt-[0.5vw] md:mb-[1vw] md:pl-[2vw] md:pr-[2vw] md:pt-[0.5vw] md:pb-[1.5vw] bg-black text-white">
        <TextAnimate animation='slideLeft' duration={0.5} className="md:text-[3vw] ">Experience</TextAnimate>
        <BlockExp role='Software Developer Intern' company='NComputing India Pvt Ltd, Pune' time='6 Months' duration='Jul 25 - Dec 25' />
        <BlockExp role='Advance AI Instructor' company='RanchoLabs, IIT-Delhi (Remote)' time='2 Months' duration='Jun 25 - Jul 25' />
        <BlockExp role='Software Developer' company='Innovators Hub, MITWPU-Pune' time='12 Months' duration='Aug 24 - Aug 25' />
    </div>
  )
}


export default Experience