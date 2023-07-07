import React from 'react'

function CtaSection() {
    return (
        <div className='py-7 md:pt-14 pb-20 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins'>
            <div className='flex flex-col text-center mb-6 max-w-6xl m-auto border border-grey-200 py-9 md:py-20 md:px-16 rounded-3xl bg-[#203035] mt-20'>
                <h1 className='font-liquefier text-[#E2FFF0] text-5xl md:text-7xl  font-normal leading-none'>Ready to take the <span className='text-green'>next step</span></h1>
                <h5 className='font-liquefier text-[#E2FFF0] text-5xl md:text-7xl  font-normal leading-none'> towards your business?</h5>

                <div className='w-full flex mt-6 justify-center'>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="mailto:sales@mezovest.com"
                        className='border border-1 border-white px-10 py-4 max-w-fit self-end cursor-pointer'>
                        <p className='text-base font-normal whitespace-nowrap text-white'>Talk to sales</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CtaSection