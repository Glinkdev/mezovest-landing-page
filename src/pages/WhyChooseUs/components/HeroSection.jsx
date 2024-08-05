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
import PaymentImage from "../../../assets/images/payment-image.svg"

function HeroSection() {
    const PaymentLogos = [SSlogo, Tlogo, Tasteelogo, Pearllogo, RollingGrilllogo, Jaylogo, GeorgeLogo]
    return (
        <div className='flex flex-col md:flex-row  w-full'>
            <div className='flex flex-col lg:flex-row mt-10  justify-between relative w-full '>
                <div className='flex-col w-full'>
                    {/* <div className='flex'>
                         <LazyLoadImage src={GreenStroke} alt="green stroke" />
                        <p className='ml-6 font-normal md:text-xl text-white'>We want you to succeed</p>
                    </div> */}
                    <div className='font-liquefier mt-6'>
                        <span className='text-green text-6xl md:text-7xl md:text-[100px] font-normal leading-16 md:whitespace-nowrap'>Why Choose Us?</span>
                    </div>
                    <p className='font-normal md:text-xl text-white mt-6 leading-[2rem]'>
                        {"Looking for a game-changer in the commerce solution and energy sector? Look no further! Mezovest stands tall as the foremost player in revolutionizing LPG (cooking gas) and CNG businesses."}
                    </p>

                </div>
                

            </div>
           
        
        </div>

    )
}

export default HeroSection