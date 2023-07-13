import React from 'react'
import GreenStroke from "../../../assets/icons/green-stroke.svg"
import OfflineImage from "../../../assets/images/stunning-product-image.svg";
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
            <div className='flex  flex-col lg:flex-row w-full gap-10'>
                <div className='flex flex-col md:w-3/5'>
                    <div className='flex'>
                        <img src={GreenStroke} alt="black stroke" />
                        <p className='ml-2 text-xl font-normal'>Thrill your customers with a</p>
                    </div>
                    <div className='font-liquefier mt-7'>
                        <span className='text-green text-5xl md:text-7xl md:text-[100px] font-normal leading-16'>Stunning</span>
                        <br />
                        <span className='text-black text-5xl md:text-7xl md:text-[100px] font-normal leading-16'>Product Display</span>
                        <br />
                    </div>
                    <div className='mt-6'>
                        <p>Showcase your products in captivating style with stunning displays that grab attention, engage customers, and boost sales. </p>
                    </div>
                    <div className='flex gap-4 w-full mt-4'>
                       
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:sales@mezovest.com"
                            className='flex py-5 px-10 justify-center items-center text-black mt-6 cursor-pointer border-2 border-black'>
                            <p>Create your storefront</p>
                        </a>
                    </div>
                </div>
                <div className='md:w-2/5 flex justify-end relative'>
                   <img src={OfflineImage} alt="Mezo Energy Image" />
                </div>

            </div>

        </div>

    )
}

export default OfflineSection