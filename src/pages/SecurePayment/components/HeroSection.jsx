import React from 'react';
import GreenStroke from "../../../assets/icons/green-stroke.svg";
import SSlogo from "../../../assets/icons/ss-logo-white.svg";
import Tlogo from "../../../assets/icons/t-white-icon.svg";
import Tasteelogo from "../../../assets/icons/tastee-logo.svg";
import Pearllogo from "../../../assets/icons/pearl-logo-white.svg";
import RollingGrilllogo from "../../../assets/icons/rolling-gril-white.svg";
import Jaylogo from "../../../assets/icons/jay-white-icon.svg";
import GeorgeLogo from "../../../assets/icons/george-white-icon.svg";
import PaymentImage from "../../../assets/images/storefront-hero-image.svg";
import LaptopImage from "../../../assets/images/secure-payment-laptop.svg"

function HeroSection() {
    const PaymentLogos = [SSlogo, Tlogo, Tasteelogo, Pearllogo, RollingGrilllogo, Jaylogo, GeorgeLogo]
    return (
        <>
            <div className='flex flex-col md:flex-row  w-full relative'>
                <div className='flex flex-col lg:flex-row mt-10 md:mt-14 justify-between relative w-full gap-8'>
                    <div className='flex-col w-full md:w-3/5'>
                        <div className='flex'>
                            <img src={GreenStroke} alt="green stroke" />
                            <p className='ml-6 font-normal md:text-xl text-white'>contactless payments using</p>
                        </div>
                        <div className='font-liquefier mt-6'>
                            <span className='text-green text-6xl md:text-7xl md:text-[100px] font-normal leading-16 md:whitespace-nowrap'>Secure</span>
                            <br />
                            <span className='text-white text-6xl md:text-7xl md:text-[100px] font-normal leading-16'>Payment links</span>
                        </div>
                        <p className='font-normal md:text-xl text-white mt-6'>
                            {"Unlock the power of convenient and boundless payment processing  with Mezovest's secure payment links."}
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
                                <img key={index} src={item} />
                            ))}
                        </div>


                    </div>

                    <div className='flex w-full mt-10 md:mt-0 md:w-2/5 overflow-hidden max-h-[400px] md:max-h-full overflow-hidden justify-center md:justify-end items-center relative'>
                        <img src={PaymentImage} alt="payment image" className='flex w-[451px] z-10' />
                    </div>

                    <div className='absolute w-full justify-end hidden xl:flex'>
                        <img src={LaptopImage} alt="payment image" className='flex w-[451px] z-0 absolute -right-36' />
                    </div>
                </div>


            </div>

        </>

    )
}

export default HeroSection