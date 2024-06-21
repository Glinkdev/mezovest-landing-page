import React from 'react';
import { Helmet } from 'react-helmet';
import PaymentImage from "../../../assets/images/gaas-hero-image.svg";
import GreenStroke from "../../../assets/icons/green-stroke.svg";

function HeroSection() {
    return (
        <div className='flex flex-col md:flex-row  w-full pb-10'>
            <Helmet>
                <title>Gas as a service</title>
                <meta name="description" content="Ignite the growth of your energy business with tailored solutions. Expand your reach, maximize profits, and become a key player in the LPG and CNG industry." />
            </Helmet>
            <div className='flex flex-col lg:flex-row mt-10 md:mt-14 relative w-full gap-10 p-6 md:p-0 items-center justify-center'>
                <div className='flex-col w-full md:w-1/2 md:ml-40'>
                    <div className='flex'>
                        <img src={GreenStroke} alt="Green Stroke Largest LPG Distribution" />
                        <p className='ml-6 font-normal text-[20px] md:text-xl text-white tracking-wide'>Introducing</p>
                    </div>
                    <div className='font-poppins mt-6'>
                        <span className='text-white text-[80px] md:text-[170px] font-bold leading-16'>G <span className='text-green'>a a</span> s </span>
                    </div>
                    <p className='font-bold text-[20px] md:text-[35px] text-white  tracking-wide leading-16'>
                        Gas as a service
                    </p>
                    <p className='text-white py-4'>
                        Our Gas as a Service (GaaS) solution offers a range of services aimed at providing reliable and efficient access to gas for various uses
                    </p>
                    <div className='flex gap-4 w-full'>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:sales@mezovest.com"
                            className='flex p-4 md:px-8 justify-center items-center  bg-green mt-6 cursor-pointer'>
                            <p className='whitespace-nowrap text-md'>Talk to support</p>
                        </a>
                        <a
                            href="#products"
                            className='flex p-4 md:px-8 justify-center items-center text-white mt-6 cursor-pointer border-2 border-white'>
                            <p className='whitespace-nowrap text-md'>Coming soon...</p>
                        </a>
                    </div>
                </div>
                <div className='md:flex mt-20 md:mt-0 justify-end md:w-1/2 overflow-hidden max-h-[400px] md:max-h-full overflow-hidden '>
                    <img src={PaymentImage} alt="Payment Image Largest LPG Distribution" className='flex md:h-[596px] w-full' />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
