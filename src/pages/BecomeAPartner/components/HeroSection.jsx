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

function HeroSection() {
    const PaymentLogos = [SSlogo, Tlogo, Tasteelogo, Pearllogo, RollingGrilllogo, Jaylogo, GeorgeLogo]
    return (
        <div className='flex flex-col md:flex-row  w-full'>
            <div className='flex flex-col lg:flex-row mt-10  justify-between relative w-full '>
                <div className='flex-col w-full'>
                    <div className='flex justify-center'>
                         <LazyLoadImage src={GreenStroke} alt="green stroke" />
                        <p className='ml-6 font-normal md:text-xl text-white'>Join forces with Mezovest as a valued partner</p>
                    </div>
                    <div className='font-liquefier mt-6 flex justify-center'>
                        <span className='text-white text-7xl md:text-6xl md:text-[100px] font-normal leading-16 md:whitespace-nowrap text-center'>Become a Partner</span>
                    </div>

                </div>
                

            </div>
           
        
        </div>

    )
}

export default HeroSection