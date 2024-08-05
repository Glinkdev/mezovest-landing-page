import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import SmallGreenStroke from "../../../assets/icons/short-green-stroke.svg";
import MerchantImage from "../../../assets/images/mezo-business-image.svg";
import PosImage from "../../../assets/images/terminal-image.svg";
import ArrrowIcon from "../../../assets/images/long-arrow.svg";

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
            <div className='font-liquefier mt-6 flex flex-col'>
                <span className='text-black text-6xl md:text-7xl md:text-[100px] font-normal  !leading-[3.75rem]'>Compatible with <span className='text-black'>Mezopay</span></span>
                <br />
                <span className='text-black text-6xl md:text-7xl md:text-[100px] font-normal !leading-[3.75rem]'><span className='text-green'>Business</span> to power your </span>
                <br/>
                <span className='text-black text-6xl md:text-7xl md:text-[100px] font-normal !leading-[3.75rem]'>whole business</span>
            </div>
            <div className='flex flex-col lg:flex-row w-full mt-20 md:gap-20 justify-between'>
                <div className='md:w-4/7 mt-10 md:mt-0 flex justify-center '>
                     <LazyLoadImage height={"100%"} width={"100%"} effect="blur"  src={MerchantImage} alt="mezo pay terminal" />
                </div>
                <div className='md:w-3/7 flex justify-center'>
                     <LazyLoadImage height={"100%"} width={"100%"} effect="blur"  src={PosImage} alt="mezo pay terminal" />
                </div>

            </div>
            <div className='hidden md:flex '>
                <p className='font-bold mr-10'>Transform your business from this</p>  <LazyLoadImage height={"100%"} width={"100%"} effect="blur"  src={ArrrowIcon}/><p className='font-bold  ml-10'>to this</p>
            </div>
        </div>
    )
}

export default OnlineSection