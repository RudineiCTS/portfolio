"use client"

import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export function GroupIconContainer(){
  function handleRedirect(e:string){
    switch(e){
      case 'linkedin':
        return window.open('https://www.linkedin.com/in/rudineicts/', '_blank');;
      case 'instagram':
        return window.open('https://www.instagram.com/rudineicts/', '_blank');
      case 'github':
        return window.open('https://github.com/RudineiCTS', '_blank');
    }
  };
  function sendMail(){
    const email = 'costaaugusto177@outlook.com';
    const assunto = 'Contato';
    const corpo = 'Olá, no que posso ajudar?';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
    };
  
    return(
        <div className="flex gap-4 mt-5 items-center">
        <FaLinkedin size={25} color={"#fff"} className="cursor-pointer" onClick={()=> handleRedirect('linkedin')}/>
        <FaInstagram size={25} color={"#fff"} className="cursor-pointer" onClick={()=> handleRedirect('instagram')}/>
        <FaGithub size={25} color={"#fff"} className="cursor-pointer" onClick={()=> handleRedirect('github')}/>

        <span className="ml-10 w-auto px-2 py-1 bg-orange-400 cursor-pointer" onClick={sendMail}>email</span>
      </div>
    )
}