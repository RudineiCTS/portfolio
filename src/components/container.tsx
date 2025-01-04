import { ReactNode } from "react"
import {twMerge} from 'tailwind-merge'
interface ContainerProps{
    children: ReactNode,
    className?: string,
}

export function Container({children, className }:ContainerProps){
    return (
        <div className={twMerge(['flex flex-col md: max-w-full max-h-full py-10 items-center', className])}>
            {children}
        </div>
    )
}