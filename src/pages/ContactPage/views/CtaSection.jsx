import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import PhoneImage from "../../../assets/images/short-phone-mockup.png"

function CtaSection() {
    return (
        <div className='py-7 md:pt-14 pb-20 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins'>
            <div className='flex text-center mb-6 max-w-6xl m-auto border border-grey-200 py-9 md:py-14 md:px-12 rounded-3xl bg-[#203035] mt-20 overflow-hidden relative'>
                <div className='w-full '>
                    <h1 className='font-liquefier text-[#E2FFF0] text-5xl md:text-7xl  font-normal leading-none'>Ready to take the <span className='text-green'>next step</span></h1>
                    <h5 className='font-liquefier text-[#E2FFF0] text-5xl md:text-7xl  font-normal leading-none'> towards your business?</h5>

                    <div className='w-full flex mt-6 justify-center'>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:sales@mezovest.com"
                            className='bg-green px-10 py-4 max-w-fit self-end cursor-pointer'>
                            <p className='text-base font-normal whitespace-nowrap text-black'>TALK TO SALES</p>
                        </a>
                    </div>
                </div>
                {/* <div className='hidden md:flex absolute right-0 top-0'>
                     <LazyLoadImage height={"100%"} width={"100%"} effect="blur"  src={PhoneImage}/>
                </div> */}
            </div>
           
        </div>
    )
}

export default CtaSection