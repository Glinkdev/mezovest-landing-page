import React from 'react';
import ProcessStepImage from "../../../assets/images/supply-process-steps.svg";

function ProcessSteps() {
    return (
        <>
            <div className='pt-7 md:pt-20 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins '>
                <div className='font-liquefier mt-6 flex flex-col'>
                    <span className='text-green text-6xl md:text-7xl md:text-[100px] font-normal md:leading-[5rem] lg:whitespace-nowrap'>Leverage our. logistic service</span>
                    <br />
                    <span className='text-black text-6xl md:text-7xl md:text-[100px] font-normal md:leading-[5rem]'>In These Easy Steps</span>
                </div>

            </div>
            <div className='py-7 md:pt-20 pb-20 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins overflow-x-scroll max-w-screen'>
                <div className='gap-10 flex'>
                    <div className='w-[359px] h-[343px] rounded-xl py-9 px-5 border border-black'>
                        <div className='w-full flex pb-5 border-b border-black'>
                            <h1 className='text-green text-xl font-bold whitespace-nowrap '>Step 1:</h1>
                            <h1 className='text-black text-xl font-bold ml-2 '>Create a Mezovest Account</h1>
                        </div>
                        <div className='pt-5'>
                            <p className=' text-base font-normal'>You can download the Spatch app for your device by visiting the Spatch website or simply searching on appstore or playstore</p>
                        </div>
                        <div className='mt-10'>
                            <p className='text-xs italic'>follow the link below to download</p>
                            <a href="https://www.spatchng.com" className='font-bold text-xs underline'>www.spatchng.com</a>
                        </div>
                    </div>
                    <div className='w-[359px] h-[343px] rounded-xl py-9 px-5 border border-black'>
                        <div className='w-full flex pb-5 border-b border-black'>
                            <h1 className='text-green text-xl font-bold whitespace-nowrap '>Step 2:</h1>
                            <h1 className='text-black text-xl font-bold ml-2 '>Create a Spatch  account</h1>
                        </div>
                        <div className='pt-5'>
                            <p className=' text-base font-normal'>Supply your first name last name, telephone to create an account.</p>
                        </div>
                    
                    </div>
                    <div className='w-[359px] h-[343px] rounded-xl py-9 px-5 border border-black'>
                        <div className='w-full flex pb-5 border-b border-black'>
                            <h1 className='text-green text-xl font-bold whitespace-nowrap '>Step 3:</h1>
                            <h1 className='text-black text-xl font-bold ml-2 '>Request Order Delivery and Track Delivery</h1>
                        </div>
                        <div className='pt-5'>
                            <p className=' text-base font-normal'>Supply pickup and dropoff address and have your items delivered to your customers. You can also track delivery of  items via the app</p>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default ProcessSteps