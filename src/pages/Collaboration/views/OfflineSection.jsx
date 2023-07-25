import React from 'react'
import GreenStroke from "../../../assets/icons/green-stroke.svg";
import OfflineImage from "../../../assets/images/efficient-network-image.svg";


function OfflineSection() {

    return (
        <div className='py-7 md:pt-14 pb-20 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins'>
            <div className='flex flex-col lg:flex-row w-full gap-10'>
                <div className='flex flex-col md:w-1/2'>
                    <div className='flex'>
                        <img src={GreenStroke} alt="black stroke" />
                        <p className='ml-2 text-xl font-normal'>Leverage our strategic and</p>
                    </div>
                    <div className='font-liquefier mt-7'>
                        <span className='text-green text-5xl md:text-7xl md:text-[100px] font-normal md:!leading-[5rem]'>Efficient</span>
                        <br />
                        <span className='text-black text-5xl md:text-7xl md:text-[100px] font-normal md:!leading-[5rem]'> Distribution <br/> Network </span>
                        <br />
                    </div>
                    <div className='mt-6'>
                        <p>With strategically located micro distribution centres and optimised logistics operations, we ensure prompt and efficient delivery of goods to our customers. Our streamlined distribution network enhances supply chain efficiency, reduces lead times, and ensures a seamless delivery of goods from business to end-users.</p>
                    </div>
                </div>
                <div className='flex md:w-1/2  md:flex justify-end relative'>
                   <img src={OfflineImage} alt="Mezo Energy Image" />
                </div>

            </div>

        </div>

    )
}

export default OfflineSection