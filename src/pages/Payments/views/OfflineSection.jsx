import React from 'react'
import GreenStroke from "../../../assets/icons/green-stroke.svg"
import OfflineImage from "../../../assets/images/offline-image.png";
import MezoBagImage from "../../../assets/images/mez-shopbag-img.png";
import MezoPhoneImage from "../../../assets/images/mez-phone-img.png";


function OfflineSection() {

    const fitDetails = [
        {
            details:"Battery or plug-in operation",
        },
        {
            details: "Manage all your terminals from the dashboard",
        },
        {
            details: "Accepts EMV chip and QR payments",
        },
        {
            details: "Charging hardware included",
        },
        {
            details: "Hands on support to help with anything you need",
        },

    ]

    return (
        <div className='py-7 md:pt-36 pb-20 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins'>
            <div className='flex flex-col lg:flex-row w-full gap-10'>
                <div className='flex flex-col md:w-1/2'>
                    <div className='flex'>
                        <img src={GreenStroke} alt="black stroke" />
                        <p className='ml-2 text-xl font-normal'>How do we deliver our promise?</p>
                    </div>
                    <div className='font-liquefier mt-7'>
                        <span className='text-green text-5xl md:text-7xl md:text-[100px] font-normal leading-16'>From Offline</span>
                        <br />
                        <span className='text-black text-5xl md:text-7xl md:text-[100px] font-normal leading-16'>Customers</span>
                        <br />
                    </div>
                    <div className='mt-6'>
                        <p>One platform that lets you sell wherever your customers are — online, anywhere in the world, and everywhere in-between. One </p>
                    </div>
                    <div className='mt-10'>
                        <ul className='text-black list-disc list-inside text-xs xl:text-base' role="list">
                            {fitDetails.map((item, index) => {
                                return (
                                    <li className=' xl:text-base text-black !leading-7 mb-4' key={index}>
                                        <span className=' mr-2'>{item.details}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='flex gap-4 w-full mt-14'>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:sales@mezovest.com"
                            className='flex py-4 px-8 justify-center text-white items-center  bg-green mt-6 cursor-pointer'>
                            <p>Learn More</p>
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:sales@mezovest.com"
                            className='flex py-5 px-10 justify-center items-center text-black mt-6 cursor-pointer border-2 border-black'>
                            <p>Request a POS terminal</p>
                        </a>
                    </div>
                </div>
                <div className='hidden md:w-1/2  md:flex justify-end relative'>
                   <img src={OfflineImage} alt="Mezo Energy Image" />
                </div>

            </div>

        </div>

    )
}

export default OfflineSection