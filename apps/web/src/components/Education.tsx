import { TextAnimate } from './ui/text-animate'

interface IExperience {
    role: string;
    company: string;
    time: string;
    duration: string;
}

function BlockExp({role, company, time, duration}: IExperience) {
    return(
        <div className="border border-gray-500 border-[0.1vw] md:border md:border-[0.05vw] md:border-gray-600 flex font-semibold items-center md:font-medium mb-[3vw] pt-[3vw] pb-[3vw] pl-[3vw] pr-[4vw] md:mt-[1vw] md:mb-[0.5vw] justify-between rounded-md md:pb-[1.25vw] bg-[#2b2b2b] text-white md:p-[1vw]">
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
function Education() {
  return (
    <div className="md:flex">
        <div className="border border-gray-500 border-[0.1vw] md:border md:border-[0.05vw] md:border-gray-600 flex flex-col w-full mb-[3vw] font-semibold pl-[4vw] pt-[1vw] pr-[4vw]  pb-[1vw] md:w-[full] md:font-medium rounded-md md:mt-[0.5vw] md:mb-[1vw] md:pl-[2vw] md:pr-[2vw] md:pt-[0.5vw] md:pb-[1.5vw] bg-black text-white">
            <TextAnimate animation='blurIn' duration={0.5} className="text-[8vw] md:text-[3vw]">Education</TextAnimate>
            <div className="mt-[1vw] md:mt-[0vw]">
                <BlockExp role='Maharashtra SSC Board' company='Symbiosis Primary & Secondary School, Pune' time='83.20 %' duration='2010&nbsp; - &nbsp;2020' />
                <BlockExp role='Maharashtra HSC Board' company='Arham Junior College, Pune' time='77.77 %' duration='2020&nbsp; - &nbsp;2022' />
                <BlockExp role='B.Tech Electronics Engineering (Specialization. AI & ML)' company='MIT World Peace Univeristy, Pune' time='8.32' duration='2022&nbsp; - &nbsp;2026' />
            </div>
        </div>
    </div>
  )
}


export default Education;