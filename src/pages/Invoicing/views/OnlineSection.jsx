import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import SmallGreenStroke from "../../../assets/icons/short-green-stroke.svg";
import MerchantImage from "../../../assets/images/bill-process-image.svg";
import RightArrowIcon from "../../../assets/icons/right-arrow-icon.svg"

function OnlineSection() {
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
            title: "Mezogateway",
            description: "to reach your online customers",
            link: ""
        },
        {
            title: "Create storefront",
            description: " to reach your online customers",
            link: ""
        }
    ]
    return (
        <div className='py-7 md:pt-20 pb-20 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins'>
            <div className='flex flex-col-reverse flex-col lg:flex-row w-full mt-20 gap-20'>
                <div className='md:w-1/2 mt-10 md:mt-0 flex '>
                    <LazyLoadImage src={MerchantImage} alt="mezo pay terminal" />
                </div>
                <div className='md:w-1/2'>
                    <div className='flex'>
                        <LazyLoadImage src={SmallGreenStroke} />
                        <p className='ml-3'>Stay in profits with our eccentric</p>
                    </div>
                    <div className='flex flex-col mt-6 leading-snug'>
                        <h5 className='font-liquefier text-black text-5xl md:text-7xl md:text-[100px] font-normal  text-green !leading-[5rem]'>Streamlined </h5>
                        <h5 className='font-liquefier text-black text-5xl md:text-7xl md:text-[100px] font-normal !leading-[5rem]'>Billing Process</h5>
                    </div>
                    <p className='text-md leading-[2rem] mt-8'>Simplify your billing process and save time with our streamlined invoicing system. Generate and send professional invoices in just a few clicks, eliminating manual paperwork and reducing errors.</p>
                    {/* <div className='w-full flex mt-10 md:mt-10'>
                        <a
                            // target="_blank"
                            // rel="noopener noreferrer"
                            // href="mailto:sales@mezovest.com"
                            className='border border-2 border-black px-14 py-6 max-w-fit self-end'>
                            <p className='text-lg font-normal whitespace-nowrap'>Coming Soon</p>
                        </a>
                    </div> */}

                </div>


            </div>
        </div>
    )
}

export default OnlineSection