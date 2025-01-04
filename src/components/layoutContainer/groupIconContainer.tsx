import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export function GroupIconContainer(){
    return(
        <div className="flex gap-4 mt-5 items-center">
        <FaLinkedin size={25} color={"#fff"} className="cursor-pointer"/>
        <FaInstagram size={25} color={"#fff"} className="cursor-pointer"/>
        <FaGithub size={25} color={"#fff"} className="cursor-pointer" />

        <span className="ml-10 w-auto px-2 py-1 bg-orange-400">email</span>
      </div>
    )
}