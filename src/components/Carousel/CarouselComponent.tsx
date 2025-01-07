'use client'

import { ReactNode, useState } from "react";

interface CarouselComponentProps{
    list:ReactNode[];
}

export function CarouselComponent({list}:CarouselComponentProps){
    const [index, setIndex]= useState(1);
    // const [lengthWeight, setLengthWeight]= useState(1)

    return (
        <div className="flex justify-between items-center ">
        <button className="text-white">anterior</button>
        <div  className="grid grid-cols-3 gap-8 my-10 overflow-hidden w-full h-full">

        </div>
        <button  className="text-white" >proximo</button>
        </div>
    )
}