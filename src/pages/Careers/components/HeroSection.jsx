import React from 'react';
import { Helmet } from 'react-helmet';
import PaymentImage from "../../../assets/images/grow-hero-image.svg";
import GreenStroke from "../../../assets/icons/green-stroke.svg";

function HeroSection() {
    return (
        <div>
            <div className='flex flex-col md:flex-row  w-full pb-10'>
                <Helmet>
                    <title>Largest LPG Distribution - Grow Your Energy Business</title>
                    <meta name="description" content="Ignite the growth of your energy business with tailored solutions. Expand your reach, maximize profits, and become a key player in the LPG and CNG industry." />
                </Helmet>
                <div className='flex flex-col lg:flex-row mt-10 md:mt-14 justify-between relative w-full gap-10'>
                    <div className='hidden md:flex mt-20 md:mt-0 justify-end md:w-1/2 overflow-hidden max-h-[400px] md:max-h-full overflow-hidden '>
                        <img src={PaymentImage} alt="Payment Image Largest LPG Distribution" className='flex h-full' />
                    </div>
                    <div className='flex-col w-full md:w-1/2'>
                        <div className='flex'>
                            <img src={GreenStroke} alt="Green Stroke Largest LPG Distribution" />
                            <p className='ml-6 font-normal md:text-xl text-white'>Make your mark. Join our Mission</p>
                        </div>
                        <div className='font-liquefier mt-6'>
                            <span className='text-green text-6xl md:text-7xl md:text-[100px] font-normal leading-16 md:whitespace-nowrap'>Fuel your Potential</span>
                            <br />
                            <span className='text-white text-6xl md:text-7xl md:text-[100px] font-normal leading-16'>Thrive at Mezovest</span>
                        </div>
                        <p className='font-normal md:text-xl text-white mt-6 leading-[2rem]'>
                        We offer more than just a job. Discover a supportive environment, rewarding challenges, and a path to career growth.
                        </p>
                        <div className='flex gap-4 w-full'>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="#"
                                className=' md:flex px-8 py-4 md:px-8 justify-center items-center  bg-green mt-6 cursor-pointer'>
                                <p className='whitespace-nowrap'>Apply Now</p>
                            </a>
                            <a
                                href="#products"
                                className='flex p-4 md:px-8 justify-center items-center text-white mt-6 cursor-pointer border-2 border-white'>
                                <p className='whitespace-nowrap'>View Open Positions</p>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    );
}

export default HeroSection;
