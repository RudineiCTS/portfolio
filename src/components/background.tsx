import { url } from "inspector";
import { ReactNode } from "react";
import {twMerge} from 'tailwind-merge'
interface BackgroundContainerProps{
    children: ReactNode
    className?: string
}
export default function BackgroundContainer({children, className}: BackgroundContainerProps){
    return (
        <div
        className={twMerge("w-full flex justify-center items-center min-h-screen h-screen", className)}
        style={{
          backgroundImage: `url('./background.png')`,
          backgroundSize: "cover", 
          backgroundPosition: "center", 
        }}
      >
        {children}
      </div>
    )

}