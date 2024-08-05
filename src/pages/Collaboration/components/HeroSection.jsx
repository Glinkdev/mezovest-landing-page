import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import GreenStroke from "../../../assets/icons/green-stroke.svg";
import SSlogo from "../../../assets/icons/ss-logo-white.svg";
import Tlogo from "../../../assets/icons/t-white-icon.svg";
import Tasteelogo from "../../../assets/icons/tastee-logo.svg";
import Pearllogo from "../../../assets/icons/pearl-logo-white.svg";
import RollingGrilllogo from "../../../assets/icons/rolling-gril-white.svg";
import Jaylogo from "../../../assets/icons/jay-white-icon.svg";
import GeorgeLogo from "../../../assets/icons/george-white-icon.svg";
import PaymentImage from "../../../assets/images/connection-image.svg"

function HeroSection() {
    const PaymentLogos = [SSlogo, Tlogo, Tasteelogo, Pearllogo, RollingGrilllogo, Jaylogo, GeorgeLogo]
    return (
        <div className='flex flex-col md:flex-row w-full'>
            <div className='flex flex-col lg:flex-row mt-10  xl:mt-14 justify-between relative w-full items-center'>
                <div className='flex-col w-full md:w-1/2'>
                    <div className='flex'>
                         <LazyLoadImage src={GreenStroke} alt="green stroke" />
                        <p className='ml-6 font-normal md:text-xl text-white'>Keep your business ahead with</p>
                    </div>
                    <div className='font-liquefier mt-6'>
                        <span className='text-green text-6xl md:text-7xl md:text-[100px] font-normal md:!leading-[5rem] md:whitespace-nowrap'>Effective Supplier </span>
                        <br />
                        <span className='text-white text-6xl md:text-7xl md:text-[100px] font-normal md:!leading-[5rem]'>Collaboration</span>
                    </div>
                    <p className='font-normal md:text-md text-white mt-6 leading-[2rem]'>
                        {"Enhance your supply chain collaboration through our extensive network of Micro Distribution Center (MDCs) in Lagos and Abuja, enabling us to meet your demand consistently as well as customer satisfaction."}
                    </p>
                    <div className='flex gap-4 w-full'>
                        <a
                            // target="_blank"
                            // rel="noopener noreferrer"
                            // href="mailto:sales@mezovest.com"
                            className='hidden md:flex p-4 md:px-8 justify-center items-center  bg-green mt-6 cursor-pointer'>
                            <p className='whitespace-nowrap'>Coming Soon</p>
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:sales@mezovest.com"
                            className='flex p-4 md:px-8 justify-center items-center text-white mt-6 cursor-pointer border-2 border-white'>
                            <p className='whitespace-nowrap'>Talk to Sales</p>
                        </a>
                    </div>
                    <div className='flex gap-10 w-full overflow-x-scroll mt-10'>
                        {PaymentLogos.map((item, index) => (
                             <LazyLoadImage height={"100%"} width={"100%"} effect="blur"  key={index} src={item}/>
                        ))}
                    </div>


                </div>

                <div className='flex mt-20 md:mt-0 justify-center md:justify-start md:w-1/2 overflow-hidden overflow-hidden md:absolute -right-36'>

                     <LazyLoadImage height={"100%"} width={"100%"} effect="blur"  src={PaymentImage} alt="payment image" className='flex h-full md:-right-20' />
                </div>
                

            </div>
           
        
        </div>

    )
}

export default HeroSection