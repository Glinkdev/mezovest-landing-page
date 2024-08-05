import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import PaymentImage from "../../../assets/images/payment-image.svg"
import GreenStroke from "../../../assets/icons/green-stroke.svg"

function HeroSection() {
    return (
        <div className='flex-col'>
            <div className='flex flex-col md:flex-row mt-10 md:mt-14 justify-between'>
                <div className='flex-col w-full'>
                    <div className='flex'>
                         <LazyLoadImage src={GreenStroke} alt="green stroke" />
                        <p className='ml-6 font-normal md:text-xl text-white'>Because we deliver our promise</p>
                    </div>
                    <div className='font-liquefier mt-6'>
                        <span className='text-green text-6xl md:text-7xl md:text-[100px] font-normal leading-16'>Here’s what our </span>
                        <br />
                        <span className='text-white text-6xl md:text-7xl md:text-[100px] font-normal leading-16'>Customers say about us</span>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default HeroSection