import { ReactNode } from "react"
import {twMerge} from "tailwind-merge";
interface LayoutContainerProps{
    children: ReactNode,
    className?:string
}
export function LayoutContainer({children, className}: LayoutContainerProps){
    return(
        <div className={twMerge("w-full ", className)}>
            {children}
        </div>
    )
}