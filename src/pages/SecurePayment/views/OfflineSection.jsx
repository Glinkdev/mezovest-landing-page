import React from 'react'
import GreenStroke from "../../../assets/icons/green-stroke.svg"
import RemoteBusinessImage from "../../../assets/images/remote-business-image.png";
import MezoBagImage from "../../../assets/images/mez-shopbag-img.png";
import MezoPhoneImage from "../../../assets/images/mez-phone-img.png";


function OfflineSection() {
    const fitDetails = [
        {
            details:"An Online Vendor?",
            moreDetails: "Receive payments from your customers with ease by simply generating and sending them a payment link via any of our products "
        },
        {
            details: "Recurring payment?",
            moreDetails: "With our scheduled payment function you can pay salaries and other recurring payments."
        },
        {
            details: "Need Donations?",
            moreDetails: "Raise money by creating a payment link and share with your family and friends"
        },

    ]

    return (
        <div className='py-7 md:pt-36 pb-20 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins'>
            <div className='flex flex-col lg:flex-row w-full gap-10'>
                <div className='flex flex-col md:w-1/2'>
                    <div className='flex'>
                        <img src={GreenStroke} alt="black stroke" />
                        <p className='ml-2 text-xl font-normal'>Accept payments for your</p>
                    </div>
                    <div className='font-liquefier mt-7'>
                        <span className='text-green text-5xl md:text-7xl md:text-[100px] font-normal leading-16'>Remote</span>
                        <br />
                        <span className='text-black text-5xl md:text-7xl md:text-[100px] font-normal leading-16'>Business</span>
                        <br />
                    </div>
                    <div className='mt-6 leading-[2rem'>
                        <p>Unleash payment simplicity with our virtual cash register, no website needed. Accept hassle-free payments.</p>
                    </div>
                    <div className='flex gap-4 w-full mt-4'>
                        <p>Are you;</p>
                    </div>
                    <div className='mt-10'>
                        <ul className='text-black list-disc list-inside text-xs xl:text-base' role="list">
                            {fitDetails.map((item, index) => {
                                return (
                                    <li className=' xl:text-base text-black !leading-7 mb-4' key={index}>
                                        <span className=' mr-2 font-bold'>{item.details} <span className='font-normal leading-[2rem'>{item.moreDetails}</span></span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className='flex md:w-1/2  md:flex justify-end relative'>
                   <img src={RemoteBusinessImage} alt="Mezo Energy Image" />
                </div>

            </div>

        </div>

    )
}

export default OfflineSection