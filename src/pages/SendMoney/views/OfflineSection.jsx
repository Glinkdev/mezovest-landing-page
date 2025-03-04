import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import GreenStroke from "../../../assets/icons/green-stroke.svg"
import OfflineImage from "../../../assets/images/fast-reliable-image.svg";
import MezoBagImage from "../../../assets/images/mez-shopbag-img.png";
import MezoPhoneImage from "../../../assets/images/mez-phone-img.png";


function OfflineSection() {

    const fitDetails = [
        {
            details:"One - time payments:",
            moreDetails: "Make instant transfers from Mezopay to Mezopay, Mezopay to other wallet, and Mezopay to local banks "
        },
        {
            details: "Bulk transfers:",
            moreDetails: "Send bulk transfers to multiple local banks at a glance"
        },

    ]

    return (
        <div className='py-7 md:pt-36 pb-20 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins'>
            <div className='flex flex-col lg:flex-row w-full gap-10'>
                <div className='flex flex-col md:w-1/2'>
                    <div className='flex'>
                         <LazyLoadImage src={GreenStroke} alt="black stroke" />
                        <p className='ml-2 text-xl font-normal'>We make sending money</p>
                    </div>
                    <div className='font-liquefier mt-7'>
                        <span className='text-green text-5xl md:text-7xl md:text-[100px] font-normal leading-16'>Fast, Reliable</span>
                        <br />
                        <span className='text-black text-5xl md:text-7xl md:text-[100px] font-normal leading-16'>& Secure </span>
                        <br />
                    </div>
                    <div className='mt-6 leading-[2rem]'>
                        <p>Say goodbye to long queues and complicated processes. We make money transfers a breeze, giving you peace of mind with every transaction.</p>
                    </div>
                    <div className='mt-10'>
                        <ul className='text-black list-disc list-inside text-xs xl:text-base' role="list">
                            {fitDetails.map((item, index) => {
                                return (
                                    <li className=' xl:text-base text-black !leading-7 mb-4' key={index}>
                                        <span className=' mr-2 font-bold leading-[2rem]'>{item.details} <span className='font-normal leading-[2rem]'>{item.moreDetails}</span></span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='flex w-full mt-4'>
                       
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:sales@mezovest.com"
                            className='flex py-5 px-10 justify-center items-center text-black mt-6 cursor-pointer border-2 border-black'>
                            <p>Talk to Sales</p>
                        </a>
                    </div>
                </div>
                <div className='flex md:w-1/2  md:flex justify-end relative'>
                    <LazyLoadImage height={"100%"} width={"100%"} effect="blur"  src={OfflineImage} alt="Mezo Energy Image" />
                </div>

            </div>

        </div>

    )
}

export default OfflineSection