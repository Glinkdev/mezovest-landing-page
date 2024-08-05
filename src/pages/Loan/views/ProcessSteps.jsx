import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import ProcessStepImage from "../../../assets/images/loan-money-process-steps.svg";

function ProcessSteps() {
    return (
        <>
            <div className='pt-7 md:pt-20 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins '>
                <div className='font-liquefier mt-6 flex flex-col'>
                    <span className='text-green text-6xl md:text-7xl md:text-[100px] font-normal leading-16 lg:whitespace-nowrap'>Make Credit Loan Request</span>
                    <br />
                    <span className='text-black text-6xl md:text-7xl md:text-[100px] font-normal leading-16'>In These Easy Steps</span>
                </div>

            </div>
            <div className='py-7 md:pt-20 pb-20 pl-6 xl:pl-36 !bg-white h-full min-h-fit font-poppins overflow-x-scroll max-w-screen'>

                 <LazyLoadImage height={"100%"} width={"100%"} effect="blur"  src={ProcessStepImage} className="w-full min-w-[800px]  " />

            </div>
        </>
    )
}

export default ProcessSteps