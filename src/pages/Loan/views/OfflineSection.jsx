import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import GreenStroke from "../../../assets/icons/green-stroke.svg"
import OfflineImage from "../../../assets/images/approval-image.svg";
import MezoBagImage from "../../../assets/images/mez-shopbag-img.png";
import MezoPhoneImage from "../../../assets/images/mez-phone-img.png";


function OfflineSection() {

    const fitDetails = [
        {
            details:"One - time payments:",
            moreDetails: " Make instant transfers from Mezopay  to Mezopay, Mezopay to other wallet, and Mezopay to local banks"
        },
        {
            details: "Need Content here:",
            moreDetails: "With our scheduled payment function you can pay salaries and other recurring payments."
        },

    ]

    return (
        <div className='py-7 md:pt-36 pb-20 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins'>
            <div className='flex flex-col lg:flex-row w-full gap-10'>
                <div className='flex flex-col md:w-3/5'>
                    <div className='flex'>
                        <LazyLoadImage src={GreenStroke} alt="black stroke" />
                        <p className='ml-2 text-xl font-normal'>Get it when you need it</p>
                    </div>
                    <div className='font-liquefier mt-7'>
                        <span className='text-green text-5xl md:text-7xl md:text-[100px] font-normal md:!leading[4rem]'>Quick Approval</span>
                        <br />
                        <span className='text-black text-5xl md:text-7xl md:text-[100px] font-normal md:!leading[4rem] md:whitespace-nowrap'>& Disbursement</span>
                        <br />
                    </div>
                    <div className='mt-6 leading-[2rem]'>
                        <p>Experience the convenience of quick and seamless approval for your loan. Our streamlined process ensures that you can access the funds you need when you need them, without unnecessary delays or paperwork. No collateral is required</p>
                    </div>
                </div>
                <div className='flex md:w-2/5  md:flex justify-end relative'>
                   <LazyLoadImage src={OfflineImage} alt="Mezo Energy Image" />
                </div>

            </div>

        </div>

    )
}

export default OfflineSection