import React from 'react';
import GreenStroke from "../../../assets/icons/green-stroke.svg";
import SSlogo from "../../../assets/icons/ss-logo-white.svg";
import Tlogo from "../../../assets/icons/t-white-icon.svg";
import Tasteelogo from "../../../assets/icons/tastee-logo.svg";
import Pearllogo from "../../../assets/icons/pearl-logo-white.svg";
import RollingGrilllogo from "../../../assets/icons/rolling-gril-white.svg";
import Jaylogo from "../../../assets/icons/jay-white-icon.svg";
import GeorgeLogo from "../../../assets/icons/george-white-icon.svg";
import PaymentImage from "../../../assets/images/pos.svg"

function HeroSection() {
    const PaymentLogos = [SSlogo, Tlogo, Tasteelogo, Pearllogo, RollingGrilllogo, Jaylogo, GeorgeLogo]
    return (
        <div className='flex flex-col md:flex-row  w-full'>
            <div className='flex flex-col lg:flex-row mt-10 md:mt-14 justify-between relative w-full'>
                <div className='flex-col w-full md:w-1/2'>
                    <div className='flex'>
                        <img src={GreenStroke} alt="green stroke" />
                        <p className='ml-6 font-normal md:text-xl text-white'>Cards and QR code payments with</p>
                    </div>
                    <div className='font-liquefier mt-6'>
                        <span className='text-green text-6xl md:text-7xl md:text-[100px] font-normal md:!leading-[5rem] md:whitespace-nowrap'>Mezovest</span>
                        <br />
                        <span className='text-white text-6xl md:text-7xl md:text-[100px] font-normal md:!leading-[5rem]'>Point of Sale <br/> (P.O.S)</span>
                    </div>
                    
                    <div className='flex gap-4 w-full md:mt-20'>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:sales@mezovest.com"
                            className='w-full md:w-fit flex p-4 md:px-8 justify-center items-center  bg-green mt-6 cursor-pointer'>
                            <p className='whitespace-nowrap'>Request a POS terminal</p>
                        </a>
                    </div>
                </div>

                <div className='flex mt-20 md:mt-0 justify-center md:justify-end md:w-1/2 max-h-[400px] md:max-h-full right-0 md:absolute '>

                    <img src={PaymentImage} alt="payment image" className='flex h-full md:-right-20' />
                </div>
                

            </div>
           
        
        </div>

    )
}

export default HeroSection