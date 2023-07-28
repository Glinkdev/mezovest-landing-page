import React from 'react';
import PaymentImage from "../../../assets/animation/metl-cylinder.gif"
import GreenStroke from "../../../assets/icons/green-stroke.svg"

function HeroSection() {
    return (
        <div className='flex flex-col md:flex-row  w-full pb-10'>
            <div className='flex flex-col lg:flex-row mt-10 md:mt-14 justify-between relative w-full'>
                <div className='flex-col w-full md:w-1/2'>
                    <div className='flex'>
                        <img src={GreenStroke} alt="green stroke" />
                        <p className='ml-6 font-normal md:text-xl text-white'>We want you to succeed</p>
                    </div>
                    <div className='font-liquefier mt-6'>
                        <span className='text-green text-6xl md:text-7xl md:text-[100px] font-normal leading-16 md:whitespace-nowrap'>Grow your</span>
                        <br />
                        <span className='text-white text-6xl md:text-7xl md:text-[100px] font-normal leading-16'>Energy  <br /> Business</span>
                    </div>
                    <p className='font-normal md:text-xl text-white mt-6 leading-[2rem]'>
                        {"Ignite the growth of your business in the energy sector. With our tailored solutions. Tap into the immense potential of these booming markets. Expand your reach, maximise profits, and become a key player in the LPG and CNG industry."}
                    </p>
                    <div className='flex gap-4 w-full'>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:sales@mezovest.com"
                            className='hidden md:flex p-4 md:px-8 justify-center items-center  bg-green mt-6 cursor-pointer'>
                            <p className='whitespace-nowrap'>Talk to Sales</p>
                        </a>
                        <a
                            
                            href="#products"
                            className='flex p-4 md:px-8 justify-center items-center text-white mt-6 cursor-pointer border-2 border-white'>
                            <p className='whitespace-nowrap'>Explore Solutions</p>
                        </a>
                    </div>



                </div>

                <div className='hidden md:flex mt-20 md:mt-0 justify-end md:w-1/2 overflow-hidden max-h-[400px] md:max-h-full overflow-hidden'>
                    <img src={PaymentImage} alt="payment image" className='flex h-full' />
                </div>


            </div>


        </div>



    )
}

export default HeroSection