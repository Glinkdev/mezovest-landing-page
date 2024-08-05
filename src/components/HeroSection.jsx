import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import PaymentImage from "../assets/images/payment-image.svg"
import GreenStroke from "../assets/icons/green-stroke.svg"

function HeroSection() {
    return (
        <div className='flex-col'>
            <div className='flex flex-col md:flex-row mt-10 md:mt-20 xl:mt-36 justify-between'>
                <div className='flex-col w-full md:max-w-md '>
                    <div className='flex'>
                        <LazyLoadImage src={GreenStroke} alt="green stroke" />
                        <p className='ml-6 font-normal md:text-xl text-white'>We want you to succeed</p>
                    </div>
                    <div className='font-liquefier mt-20'>
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
                <div className='flex mt-20 md:mt-0 justify-center'>
                     <LazyLoadImage height={"100%"} width={"100%"} effect="blur"  src={PaymentImage} alt="payment image" />
                </div>

            </div>
            <div className='flex flex-col w-full mt-40' id="energy">
                <div className='flex'>
                     <LazyLoadImage src={GreenStroke} alt="green stroke" />
                    <p className='ml-6 font-normal md:text-xl text-white'>How do we deliver on our promise?</p>
                </div>
                <div className='font-liquefier mt-6 '>
                    <span className='text-green text-5xl md:text-7xl md:text-[100px] font-normal leading-16'>Finance Infrastructure</span>
                    <br />
                    <span className='text-white text-5xl md:text-7xl md:text-[100px] font-normal leading-16'>Technology<span className='text-2xl md:text-4xl'>(F.I.T)</span></span>
                </div>
            </div>
        </div>

    )
}

export default HeroSection