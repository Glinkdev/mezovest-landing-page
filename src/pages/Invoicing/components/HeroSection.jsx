import React from 'react';
import GreenStroke from "../../../assets/icons/green-stroke.svg";
import SSlogo from "../../../assets/icons/ss-logo-white.svg";
import Tlogo from "../../../assets/icons/t-white-icon.svg";
import Tasteelogo from "../../../assets/icons/tastee-logo.svg";
import Pearllogo from "../../../assets/icons/pearl-logo-white.svg";
import RollingGrilllogo from "../../../assets/icons/rolling-gril-white.svg";
import Jaylogo from "../../../assets/icons/jay-white-icon.svg";
import GeorgeLogo from "../../../assets/icons/george-white-icon.svg";
import HeroImage from "../../../assets/images/invoicing-hero-image.svg"

function HeroSection() {
    const PaymentLogos = [SSlogo, Tlogo, Tasteelogo, Pearllogo, RollingGrilllogo, Jaylogo, GeorgeLogo]
    return (
        <div className='flex flex-col md:flex-row md:mt-20 w-full'>
            <div className='flex flex-col lg:flex-row mt-10 md:mt-20 xl:mt-36 justify-between relative w-full'>
                <div className='flex-col w-full md:w-1/2'>
                    <div className='flex'>
                        <img src={GreenStroke} alt="green stroke" />
                        <p className='ml-6 font-normal md:text-xl text-white'>Never miss a payment with our</p>
                    </div>
                    <div className='font-liquefier mt-6'>
                        <span className='text-green text-6xl md:text-7xl md:text-[100px] font-normal leading-16 md:whitespace-nowrap'>Get paid </span>
                        <br />
                        <span className='text-white text-6xl md:text-7xl md:text-[100px] font-normal leading-16'>Faster</span>
                    </div>
                    <p className='font-normal md:text-xl text-white mt-6'>
                        {"Use Mezovest e-invoice to track due payments and receive payments for more accurate inventory control, accounting, and more."}
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
                            <p className='whitespace-nowrap'>Explore our products</p>
                        </a>
                    </div>
                    <div className='flex gap-10 w-full overflow-x-scroll mt-10'>
                        {PaymentLogos.map((item, index) => (
                            <img key={index} src={item}/>
                        ))}
                    </div>


                </div>

                <div className='flex mt-20 md:mt-0 justify-start md:w-1/2 overflow-hidden max-h-[400px] md:max-h-full overflow-hidden'>

                    <img src={HeroImage} alt="payment image" className='flex h-full md:-right-20' />
                </div>
                

            </div>
           
        
        </div>

    )
}

export default HeroSection