import React from 'react';
import PaymentImage from "../../../assets/images/payment-image.svg"
import GreenStroke from "../../../assets/icons/green-stroke.svg"

function HeroSection() {
    return (
        <div className='flex-col md:mt-32 mt-10'>
            <div className='flex flex-col md:flex-row  md:mt-20 xl:mt-36 justify-between'>
                <div className='flex-col w-full'>
                    <div className='flex'>
                        <img src={GreenStroke} alt="green stroke" />
                        <p className='ml-6 font-normal md:text-xl text-white'>We want you to succeed</p>
                    </div>
                    <div className='font-liquefier mt-6'>
                        <span className='text-green text-6xl md:text-7xl md:text-[100px] font-normal leading-16'>Grow your</span>
                        <br />
                        <span className='text-white text-6xl md:text-7xl md:text-[100px] font-normal leading-16'>Business</span>
                    </div>
                    <p className='font-normal md:text-xl text-white mt-6'>
                        Stay Ahead of the Competition with Our State-of-the-Art Commerce Solutions. Empower Your Brand with Our End-to-End Commerce Solutions.
                    </p>
                    <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        href="mailto:sales@mezovest.com"
                        className='flex py-5 justify-center max-w-[187px] bg-green mt-6 cursor-pointer'>
                        <p>Talk to sales</p>
                    </a>

                </div>

            </div>
        </div>

    )
}

export default HeroSection