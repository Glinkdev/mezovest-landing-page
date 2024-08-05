import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import GreenStroke from "../../../assets/icons/green-stroke.svg";
import OfflineImage from "../../../assets/images/distribution-network-image.svg";
import LocationTable from "../../../assets/images/location-table.svg";


function OfflineSection() {

    return (
        <div className='py-7 md:pt-14 pb-10 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins'>
            <div className='flex flex-col lg:flex-row w-full gap-10'>
                <div className='flex flex-col md:w-1/2'>
                    <div className='flex'>
                         <LazyLoadImage src={GreenStroke} alt="black stroke" />
                        <p className='ml-2 text-xl font-normal'>Leverage our strategic and</p>
                    </div>
                    <div className='font-liquefier mt-7'>
                        <span className='text-green text-5xl md:text-7xl md:text-[100px] font-normal md:!leading-[5rem]'>Efficient</span>
                        <br />
                        <span className='text-black text-5xl md:text-7xl md:text-[100px] font-normal md:!leading-[5rem]'> Distribution <br/> Network </span>
                        <br />
                    </div>
                    <div className='mt-6 leading-[2rem] text-md'>
                        <p>With strategically located micro distribution centres and optimised logistics operations, we ensure prompt and efficient delivery of goods to our customers. Our streamlined distribution network enhances supply chain efficiency, reduces lead times, and ensures a seamless delivery of goods from business to end-users.</p>
                    </div>
                </div>
                <div className='flex md:w-1/2  md:flex justify-end relative'>
                    <LazyLoadImage height={"100%"} width={"100%"} effect="blur"  src={OfflineImage} alt="Mezo Energy Image" />
                </div>

            </div>
            <div className='flex flex-col justify-center mt-36'>
                <div className='font-liquefier mt-7 md:text-center'>
                    <span className='text-green text-5xl md:text-7xl md:text-[100px] font-normal md:!leading-[5rem]'>Locations of </span>
                    <br />
                    <span className='text-black text-5xl md:text-7xl md:text-[100px] font-normal md:!leading-[5rem] '> Micro Distribution Centres   <br/><span className='whitespace-nowrap'>MDC’s Nationwide</span>  </span>
                    <br />
                </div>

                <div className='mt-14 overflow-x-scroll'>
                     <LazyLoadImage height={"100%"} width={"100%"} effect="blur"  src={LocationTable} alt="location table" className='min-w-[600px]'/> 
                </div>
            </div>

        </div>

    )
}

export default OfflineSection