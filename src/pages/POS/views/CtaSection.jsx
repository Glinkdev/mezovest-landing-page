import React from 'react';
import PhoneImage from "../../../assets/images/short-phone-mockup.png"

function CtaSection() {
    return (
        <div className='py-7 md:pt-14 pb-20 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins'>
            <div className='flex text-center mb-6 max-w-6xl m-auto border border-grey-200 py-9 md:py-14 md:px-12 rounded-3xl bg-[#203035] mt-20 overflow-hidden relative'>
                <div className='w-full'>
                    <h1 className='font-liquefier text-[#E2FFF0] text-5xl md:text-7xl  font-normal leading-none'>Stay <span className='text-green'>Profitable &</span></h1>
                    <h1 className='font-liquefier text-[#E2FFF0] text-5xl md:text-7xl  font-normal leading-none text-green'>limitless <span className='text-white'>with</span></h1>
                    <h5 className='font-liquefier text-[#E2FFF0] text-5xl md:text-7xl  font-normal leading-none'> Mezovest</h5>

                    <div className='w-full flex mt-6 justify-center'>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:sales@mezovest.com"
                            className='bg-green px-10 py-4 max-w-fit self-end cursor-pointer'>
                            <p className='text-base font-bold whitespace-nowrap text-black'>Request a POS terminal</p>
                        </a>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default CtaSection