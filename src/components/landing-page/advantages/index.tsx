import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { Check } from 'react-bootstrap-icons'
import { GiTick } from 'react-icons/gi'
export interface AdvantagesProps {
    advantagesTitle?: string,
    advantagesExplaination?: string,
    advantagesImage?: StaticImageData; 
    className?: string , 
    advantagesTag?:string
}
const Advantages = (props: AdvantagesProps) => {
    return (
        <>
            <div className={`lg:flex  mt-5 lg:space-x-3 md:space-x-3  space-y-5 md:flex ${props?.className}`}>
                <div className='lg:w-1/2 md:w-1/2 w-full  lg:px-5 xl:px-5 2xl:px-5 px-3' >
                    <div className=' bg-[#ebecff] text-[#5236ff] inline-block text-sx rounded-xl px-3 font-semibold '>{props?.advantagesTag}</div>
                    <div className="mt-2 text-4xl font-bold text-black">
                        {props?.advantagesTitle}
                    </div>
                    <div className='text-gray-400 mt-3'>
                        {props?.advantagesExplaination}
                    </div>
                    <hr className='bg-gray-500 my-4' />
                    <div className="flex mt-2">
                        <div className='w-1/2 flex items-center text-sm font-semibold text-gray-700'><Check className='text-blue-500 text-3xl inline-block' />
                            Organize your data
                        </div>
                        <div className='w-1/2 flex items-center text-sm font-semibold text-gray-700 '> <Check className='text-blue-500 text-3xl inline-block' />Always in sync</div>
                    </div>
                    <div className="flex mt-2">
                        <div className='w-1/2 flex items-center text-sm font-semibold text-gray-700 '> <Check className='text-blue-500 text-3xl inline-block' />Work with any team</div>
                        <div className='w-1/2 flex items-center text-sm font-semibold text-gray-700 '> <Check className='text-blue-500 text-3xl inline-block' />Embedded analytics</div>
                    </div>
                </div>
                <div className='lg:w-1/2 md:w-1/2 w-full lg:px-5 2xl:px-5 xl:px-5 px-3'>
                   {props?.advantagesImage && 
                    <Image className='w-100' src={props?.advantagesImage}  alt='' />
                   }
                </div>
            </div>

        </>
    )
}

export default Advantages