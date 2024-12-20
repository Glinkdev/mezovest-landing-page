import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import SmallGreenStroke from "../../../assets/icons/short-green-stroke.svg";
import MerchantImage from "../../../assets/images/accept-payment-online-image.svg";
import RightArrowIcon from "../../../assets/icons/right-arrow-icon.svg"

function OnlineSection() {
    const features = [
        // {
        //     title: "Accept Payments",
        //     description: "from your customers",
        //     link: "/payment"
        // },
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
        {
            title: "Mezogateway",
            description: "to reach your online customers",
            link: "http://mezovest.com/mezogateway"
        },
        // {
        //     title: "Create storefront",
        //     description: " to reach your online customers",
        //     link: ""
        // }
    ]
    return (
        <div className='py-7 md:pt-20 pb-20 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins'>
            <div className='flex flex-col lg:flex-row w-full mt-20 gap-20'>
                <div className='md:w-1/2 mt-10 md:mt-0 flex '>
                     <LazyLoadImage height={"100%"} width={"100%"} effect="blur"  src={MerchantImage} alt="mezo pay terminal" />
                </div>
                <div className='md:w-1/2'>
                    <div className='flex'>
                         <LazyLoadImage src={SmallGreenStroke} />
                        <p className='ml-3'>Also accept payments</p>
                    </div>
                    <div className='flex flex-col mt-6 md:mt-10'>
                        <h5 className='font-liquefier text-black text-5xl md:text-7xl md:text-[100px] font-normal leading-none'>From <span className='text-green'>Online</span></h5>
                        <h5 className='font-liquefier text-black text-5xl md:text-7xl md:text-[100px] font-normal leading-none '>Customers</h5>
                    </div>
                    <p className='text-md mt-8 leading-[2rem]'>Solutions that lets you sell wherever your customers are — online, anywhere nationwide, and everywhere in-between.</p>

                    <div className='flex flex-col mt-10 gap-14'>
                        {features.map((item, index) => (
                            <div className='flex  align-center' key={index}>
                                 <LazyLoadImage src={RightArrowIcon} alt="right arrow icon" />
                                <div className='flex whitespace-break-spaces justify-center'>
                                    <a href={item.link} className='text-xs md:text-sm justify-center items-center font-bold text-green text-underline ml-2 underline-offset-2 cursor-pointer underline whitespace-nowrap float-left'>{item?.title}</a>
                                    <span className='hidden md:flex text-xs md:text-sm ml-2 text-black font-normal !no-underline underline-offset-0'>{item?.description}</span>
                                    <br />
                                    <span className='flex md:hidden text-xs md:text-sm ml-2 text-black font-normal !no-underline underline-offset-0'>{item?.description}</span>
                                </div>

                            </div>
                        ))}

                    </div>

                    <div className='w-full flex mt-10 md:mt-36'>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:sales@mezovest.com"
                            className='border border-2 border-black px-10 py-4 max-w-fit self-end'>
                            <p className='text-lg font-normal whitespace-nowrap'>Talk to sales</p>
                        </a>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default OnlineSection