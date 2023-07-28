import React from 'react'
import GreenStroke from "../../../assets/icons/green-stroke.svg"
import OfflineImage from "../../../assets/images/fast-reliable-image.svg";
import MezoBagImage from "../../../assets/images/mez-shopbag-img.png";
import CustomInvoiceImage from "../../../assets/images/custom-invoice-image.svg";


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
                <div className='flex flex-col md:w-1/2'>
                    <div className='flex'>
                        <img src={GreenStroke} alt="black stroke" />
                        <p className='ml-2 text-xl font-normal'>We make sending money</p>
                    </div>
                    <div className='font-liquefier mt-7'>
                        <span className='text-green text-5xl md:text-7xl md:text-[100px] font-normal !leading-[5rem]'>Custom <br /> Invoice </span>
                        <br />
                        <span className='text-black text-5xl md:text-7xl md:text-[100px] font-normal !leading-[5rem]'>Templates</span>
                        <br />
                    </div>
                    <div className='mt-6 leading-[2rem] text-md'>
                        <p>Elevate your brand with fully customizable invoice templates tailored to your business. Stand out from the crowd with personalized designs that reflect your unique style and professionalism. Easily add your logo, colors, and fonts to create visually stunning invoices that leave a lasting impression on your clients.</p>
                    </div>
                    <div className='flex gap-4 w-full mt-4'>
                       
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:sales@mezovest.com"
                            className='flex py-5 px-10 justify-center items-center text-black mt-6 cursor-pointer border-2 border-black'>
                            <p>Coming Soon</p>
                        </a>
                    </div>
                </div>
                <div className='flex md:w-1/2  md:flex justify-end relative'>
                   <img src={CustomInvoiceImage} alt="Mezo Energy Image" />
                </div>

            </div>

        </div>

    )
}

export default OfflineSection