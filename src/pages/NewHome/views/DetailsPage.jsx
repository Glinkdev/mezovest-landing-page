import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import GreenStroke from "../../../assets/icons/green-stroke.svg"
import MezoPayTerminal from "../../../assets/images/mezopay-terminal-image.svg";
import SmallGreenStroke from "../../../assets/icons/short-green-stroke.svg";
import MerchantImage from "../../../assets/images/merchant-image.svg";
import RightArrowIcon from "../../../assets/icons/right-arrow-icon.svg";
import GreenUnderline from "../../../assets/icons/green-underline.svg"
import Vanguard from "../../../assets/icons/vanguard.svg";
import ThisDay from "../../../assets/icons/thisday.svg";
import BusinessDay from "../../../assets/icons/business-day.svg"
import AriseNews from "../../../assets/icons/arisenews-icon.svg"


function DetailsPage() {
    const features = [
        {
            title: "Accept Payments",
            description: "from your customers",
            link: "/payment"
        },
        {
            title: "Send money",
            description: "to over 1 million mezopay users and other banks",
            link: "/send"
        },
        {
            title: "Create a payment link",
            description: "for your customers to pay you with a single click",
            link: "/payment-link"
        },
        // {
        //     title: "Create storefront",
        //     description: " to reach your online customers",
        //     link: ""
        // }
    ]
    const media = [
        {
            id: 1,
            icon: BusinessDay
        },
        {
            id: 2,
            icon: Vanguard
        },
        {
            id: 3,
            icon: ThisDay
        },
        {
            id: 4,
            icon: AriseNews
        },
        // {
        //     id: 5,
        //     icon: BusinessDay
        // }
    ]
    return (
        <div className='py-7 md:pt-14 pb-4 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins'>
            <div className='flex flex-col text-center mb-6 max-w-6xl m-auto border border-grey-200 py-9 md:py-14 rounded-3xl'>
                <h5 className='font-liquefier text-black text-5xl md:text-7xl md:text-[100px] font-normal leading-none'>All-in-one Commerce</h5>
                <h5 className='font-liquefier text-green text-5xl md:text-7xl md:text-[100px] font-normal leading-none'>Ecosystem</h5>
            </div>
            <div className='flex flex-col md:flex-row w-full mt-20 flex-col-reverse'>
                <div className='md:w-3/5 mt-10 md:mt-0'>
                    <LazyLoadImage src={MezoPayTerminal} alt="mezo pay terminal" />
                </div>
                <div className='md:w-2/5'>
                    <div className='flex'>
                        <LazyLoadImage src={SmallGreenStroke} />
                        <p className='ml-3'>Seamless & Profitable Sales</p>
                    </div>
                    <div className='flex flex-col mt-6 md:mt-10'>
                        <h5 className='font-liquefier text-black text-5xl md:text-7xl md:text-[100px] font-normal md:!leading-[5rem]'> <span className='text-green'>For Offline</span></h5>
                        <h5 className='font-liquefier text-black text-5xl md:text-7xl md:text-[100px] font-normal md:!leading-[5rem]'>Merchants</h5>
                    </div>
                    <p className='text-sm mt-8 leading-[2rem]'>
                        Experience the power of our secure and user-friendly POS terminal. Seamlessly sell to your customers, process card payments, generate invoices, and even purchase cooking gas. Unlock a world of possibilities with our versatile solution.
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
                        <LazyLoadImage src={SmallGreenStroke} />
                        <p className='ml-3'>Discover Boundless Possibilities</p>
                    </div>
                    <div className='flex flex-col mt-6 md:mt-10'>
                        <h5 className='font-liquefier text-black text-5xl md:text-7xl md:text-[100px] font-normal md:!leading-[5rem]'> <span className='text-green'>For Online</span></h5>
                        <h5 className='font-liquefier text-black text-5xl md:text-7xl md:text-[100px] font-normal  md:!leading-[5rem] '>Merchants</h5>
                    </div>
                    <p className='text-sm mt-8 leading-[2rem]'>With our robust - yet easy to use platform that lets you sell wherever your customers are — online, anywhere in the world.</p>

                    <div className='flex flex-col mt-6'>
                        {features.map((item, index) => (
                            <div className='flex mt-6 align-center' key={index}>
                                <LazyLoadImage src={RightArrowIcon} alt="right arrow icon" />
                                <div className='flex flex-col sm:flex-row whitespace-break-spaces justify-center align-center'>
                                    <a href={item.link} className='text-xs md:text-sm justify-center items-center font-bold text-green text-underline ml-2 underline-offset-2 cursor-pointer underline whitespace-nowrap float-left'>{item?.title}</a>
                                    <span className='flex text-xs md:text-sm ml-2 text-black font-normal !no-underline underline-offset-0'>{item?.description}</span>
                                </div>

                            </div>
                        ))}

                    </div>

                    <div className='w-full flex mt-8'>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:sales@mezovest.com"
                            className='border border-1 border-black px-10 py-4 max-w-fit self-end'>
                            <p className='text-base font-normal whitespace-nowrap'>Contact us</p>
                        </a>
                    </div>

                </div>
                <div className='md:w-1/2 mt-10 md:mt-0 flex justify-end'>
                    <LazyLoadImage src={MerchantImage} alt="mezo pay terminal" />
                </div>

            </div>
            <div className='flex flex-col w-full mt-20'>
                <div className='w-full justify-center' >
                    <h5 className='font-liquefier text-grey text-5xl md:text-7xl font-normal md:!leading-[5rem] text-center'>As seen in the media</h5>
                    <LazyLoadImage src={GreenUnderline} className="m-auto" />
                </div>
                <div className='mt-10 grid grid-cols-3 gap-2 md:flex justify-between items-center max-w-[700px] w-full m-auto'>
                    {media.map((item) => (
                        <LazyLoadImage key={item.id}src={item.icon} alt={"media"} className={"h-[69px] md:h-full"}/>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default DetailsPage