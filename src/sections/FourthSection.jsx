import React from 'react';
import MezoPayTerminal from "../assets/images/mezopay-terminal-image.svg";
import SmallGreenStroke from "../assets/icons/short-green-stroke.svg";
import MerchantImage from "../assets/images/merchant-image.svg";
import RightArrowIcon from "../assets/icons/right-arrow-icon.svg"


function FourthSection() {
    const features = [
        {
            title: "Accept Payments",
            description: "from your customers",
            link: ""
        },
        {
            title: "Send money",
            description: "to over 1 million mezopay users and other banks",
            link: ""
        },
        {
            title: "Create a payment link",
            description: "for your customers to pay you with a single click",
            link: ""
        },
        {
            title: "Create storefront",
            description: " to reach your online customers",
            link: ""
        }
    ]
    return (
        <div className='py-7 md:pt-14 pb-20 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins'>
            <div className='flex flex-col text-center mb-6 max-w-6xl m-auto border border-grey-200 py-9 md:py-14 rounded-3xl'>
                <h5 className='font-liquefier text-black text-5xl md:text-7xl md:text-[100px] font-normal leading-none'>All-in-one Commerce</h5>
                <h5 className='font-liquefier text-green text-5xl md:text-7xl md:text-[100px] font-normal leading-none'>Ecosystem</h5>
            </div>
            <div className='flex flex-col md:flex-row w-full mt-20 flex-col-reverse'>
                <div className='md:w-3/5 mt-10 md:mt-0'>
                    <img src={MezoPayTerminal} alt="mezo pay terminal" />
                </div>
                <div className='md:w-2/5'>
                    <div className='flex'>
                        <img src={SmallGreenStroke} />
                        <p className='ml-3'>Seamless & Profitable Sales</p>
                    </div>
                    <div className='flex flex-col mt-6 md:mt-10'>
                        <h5 className='font-liquefier text-black text-5xl md:text-7xl md:text-[100px] font-normal leading-16'>For <span className='text-green'>Offline</span></h5>
                        <h5 className='font-liquefier text-black text-5xl md:text-7xl md:text-[100px] font-normal leading-16 '>Merchants</h5>
                    </div>
                    <p className='text-sm mt-8'>
                        With our robust - yet easy to use platform that lets you sell wherever your customers are — offline, nationwide, and everywhere in-between. Process payments <span className='font-bold'>offline</span> as well using our super fast and secure <span className='font-bold'>POS Terminal</span>
                    </p>

                    <div className='w-full flex mt-6'>
                        <button className='border border-1 border-black px-10 py-4 max-w-fit self-end'>
                            <p className='text-base font-normal whitespace-nowrap'>Coming Soon</p>
                        </button>
                    </div>

                </div>
            </div>
            <div className='flex flex-col md:flex-row w-full mt-20'>

                <div className='md:w-1/2'>
                    <div className='flex'>
                        <img src={SmallGreenStroke} />
                        <p className='ml-3'>Discover Boundless Possibilities</p>
                    </div>
                    <div className='flex flex-col mt-6 md:mt-10'>
                        <h5 className='font-liquefier text-black text-5xl md:text-7xl md:text-[100px] font-normal leading-none'>For <span className='text-green'>Online</span></h5>
                        <h5 className='font-liquefier text-black text-5xl md:text-7xl md:text-[100px] font-normal leading-none '>Merchants</h5>
                    </div>
                    <p className='text-sm mt-8'>With our robust - yet easy to use platform that lets you sell wherever your customers are — online, anywhere in the world.</p>

                    <div className='flex flex-col mt-6'>
                        {features.map((item, index) => (
                            <div className='flex mt-6 align-center' key={index}>
                                <img src={RightArrowIcon} alt="right arrow icon" />
                                <div className='flex whitespace-break-spaces justify-center'>
                                    <a href="" className='text-xs md:text-sm justify-center items-center font-bold text-green text-underline ml-2 underline-offset-2 cursor-pointer underline whitespace-nowrap float-left'>{item?.title}</a>
                                    <span className='text-xs md:text-sm ml-2 text-black font-normal !no-underline underline-offset-0'>{item?.description}</span>
                                </div>

                            </div>
                        ))}

                    </div>

                    <div className='w-full flex mt-8'>
                        <button className='border border-1 border-black px-10 py-4 max-w-fit self-end'>
                            <p className='text-base font-normal whitespace-nowrap'>Contact us</p>
                        </button>
                    </div>

                </div>
                <div className='md:w-1/2 mt-10 md:mt-0'>
                    <img src={MerchantImage} alt="mezo pay terminal" />
                </div>

            </div>
            <div className='flex flex-col text-center mb-6 max-w-6xl m-auto border border-grey-200 py-9 md:py-20 md:px-16 rounded-3xl bg-[#203035] mt-20'>
                <h1 className='font-liquefier text-[#E2FFF0] text-5xl md:text-7xl  font-normal leading-none'>Ready to take the <span className='text-green'>next step</span></h1>
                <h5 className='font-liquefier text-[#E2FFF0] text-5xl md:text-7xl  font-normal leading-none'> towards your business?</h5>

                <div className='w-full flex mt-6 justify-center'>
                    <button className='border border-1 border-white px-10 py-4 max-w-fit self-end'>
                        <p className='text-base font-normal whitespace-nowrap text-white'>Talk to sales</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FourthSection