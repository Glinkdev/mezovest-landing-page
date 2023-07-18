import React from 'react'
import GreenStroke from "../../../assets/icons/green-stroke.svg"
import OfflineImage from "../../../assets/images/fast-reliable-image.svg";
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
        <div className='py-7 md:pt-12 pb-20 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins'>
            <div className='flex flex-col lg:flex-row w-full gap-10'>
                <div className='flex flex-col md:w-1/2'>
                    {/* <div className='flex'>
                        <img src={GreenStroke} alt="black stroke" />
                        <p className='ml-2 text-xl font-normal'>We make sending money</p>
                    </div> */}
                    <div className='mt-7'>
                        <span className='text-green text-3xl md:text-[40px] font-semibold leading-16'>Battery or plug-in <span className='text-black'>operation</span></span>
                        <br />
                    </div>
                    <div className='mt-2'>
                        <p>Mezovest Point of sale (POS) packs a powerful battery to ensure reliability and more profit in sales.</p>
                    </div>

                    <div className='mt-10'>
                        <span className='text-green text-3xl md:text-[40px] font-semibold leading-16'>Fast & Secure <span className='text-black'>Payment</span></span>
                        <br />
                    </div>
                    <div className='mt-2 text-md'>
                        <p>Mezovest Point of sale (POS) offers safe and secure payments through debit cards, and payment with mezopay while ensuring data security through end-to-end encryption.</p>
                    </div>
                    
                   
                </div>
                <div className='flex md:w-1/2  md:flex justify-end relative'>
                   {/* <img src={OfflineImage} alt="Mezo Energy Image" /> */}
                </div>

            </div>

        </div>

    )
}

export default OfflineSection