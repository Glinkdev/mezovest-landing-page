import React from 'react';
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
                <div className='flex-col w-full flex justify-center font-liquefier mt-6'>
                        <span className='text-white text-6xl md:text-7xl md:text-[100px] font-normal leading-16 md:whitespace-nowrap text-center'>Privacy & Usage Policy</span>

                </div>
                

            </div>
           
        
        </div>

    )
}

export default HeroSection