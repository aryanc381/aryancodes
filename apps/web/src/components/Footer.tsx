import { FaWhatsapp, FaLinkedinIn, FaGithub, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

function Footer() {
  return (
    <div className="w-full text-white border border-[0.11vw] bg-[#121212] rounded-md 
                    p-[6vw] md:pb-[7vw] md:p-[2vw] mt-[3vw] md:mt-[2vw]">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start 
                      gap-[10vw] md:gap-[3vw]">
        <div className="flex flex-col md:w-[40%] mb-[0vw] md:mb-0">
          <p className="text-[7vw] md:text-[3vw] font-semibold leading-tight">
            Aryan Chauhan
          </p>
          <p className="text-[4vw] md:text-[1.1vw] text-gray-400 mt-[1.5vw] md:mt-[0.5vw]">Optimized for laptops and desktops for a richer viewing experience.</p>
        </div>
        <div className="flex flex-col md:flex-row md:gap-[4vw] w-full md:w-auto">
          <div className="flex flex-col mb-[8vw] md:mb-0">
            <p className="text-[4.5vw] md:text-[1.2vw] font-semibold mb-[3vw] md:mb-[1vw]">
              Connect
            </p>

            <div className="flex items-center gap-[6vw] md:gap-[1.3vw]">
              <a href="#" className="active:scale-90"><FaLinkedinIn className="size-[7vw] md:size-[1.8vw]" /></a>
              <a href="#" className="active:scale-90"><FaGithub className="size-[7vw] md:size-[1.8vw]" /></a>
              <a href="#" className="active:scale-90"><FaXTwitter className="size-[7vw] md:size-[1.8vw]" /></a>
              <a href="#" className="active:scale-90"><FaWhatsapp className="size-[7vw] md:size-[1.8vw]" /></a>
            </div>
          </div>
          <div className="flex flex-col md:w-[40%]">
            <p className="text-[4.5vw] md:text-[1.2vw] font-semibold mb-[3vw] md:mb-[1vw]">
              Contact
            </p>

            <div className="flex flex-col md:w-[15vw] gap-[3.5vw] md:gap-[0.9vw]">
              <div className="flex items-center gap-[3vw] md:gap-[0.6vw]">
                <FaPhone className="size-[6vw] md:size-[1.5vw]" />
                <p className="text-[4vw] md:text-[1vw]">+91 90491 22622</p>
              </div>
              <div className="flex items-center gap-[3vw] md:gap-[0.6vw]">
                <MdOutlineMail className="size-[6vw] md:size-[1.6vw]" />
                <p className="text-[4vw] md:text-[1vw]">aryanc381.work@gmail.com</p>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Footer;