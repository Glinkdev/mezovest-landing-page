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
import PaymentImage from "../../../assets/images/supply-image.svg"

function HeroSection() {
    const PaymentLogos = [SSlogo, Tlogo, Tasteelogo, Pearllogo, RollingGrilllogo, Jaylogo, GeorgeLogo]
    return (
        <div className='flex flex-col md:flex-row  w-full'>
            <div className='flex flex-col lg:flex-row mt-10 md:mt-14 justify-between relative w-full'>
                <div className='flex-col w-full '>
                    <div className='flex'>
                         <LazyLoadImage src={GreenStroke} alt="green stroke" />
                        <p className='ml-6 font-normal md:text-xl text-white'>Eliminate your logistics hassles with our</p>
                    </div>
                    <div className='font-liquefier mt-6'>
                        <span className='text-green text-6xl md:text-7xl md:text-[100px] font-normal leading-16 md:whitespace-nowrap'>Prompt  deliveries</span>
                        <br />
                        <span className='text-white text-6xl md:text-7xl md:text-[100px] font-normal leading-16'> nationwide</span>
                    </div>
                    <p className='font-normal md:text-xl text-white mt-6 leading-[2rem]'>
                        {"Streamline your business operations with our logistics solution. Say goodbye to logistics hassles and effortlessly deliver your products to your customers. Experience seamless efficiency and focus on growing your business with ease."}
                    </p>
                    <div className='flex gap-4 w-full'>
                        <a
                            // target="_blank"
                            // rel="noopener noreferrer"
                            href="https://spatchng.com"
                            className='hidden md:flex p-4 md:px-8 justify-center items-center  bg-green mt-6 cursor-pointer'>
                            <p className='whitespace-nowrap'>Download Spatch</p>
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:sales@mezovest.com"
                            className='flex p-4 md:px-8 justify-center items-center text-white mt-6 cursor-pointer border-2 border-white'>
                            <p className='whitespace-nowrap'>Talk to Sales</p>
                        </a>
                    </div>
                    <div className='flex justify-between w-full overflow-x-scroll mt-10'>
                        {PaymentLogos.map((item, index) => (
                             <LazyLoadImage height={"100%"} effect="blur" className="h-20" key={index} src={item}/>
                        ))}
                    </div>


                </div>

                <div className='hidden mt-10 md:mt-0 justify-center md:justify-end md:w-1/2  max-h-[400px] md:max-h-full  relative'>

                     <LazyLoadImage height={"100%"} width={"100%"} effect="blur"  src={PaymentImage} alt="payment image" className='flex md:-right-20 md:absolute md:-right-36' />
                </div>
                

            </div>
           
        
        </div>

    )
}

export default HeroSection