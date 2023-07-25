import React from 'react'
import GreenStroke from "../../../assets/icons/green-stroke.svg"
import OfflineImage from "../../../assets/images/delivery-image.svg";
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
                <div className='flex flex-col md:w-1/2'>
                    <div className='flex'>
                        <img src={GreenStroke} alt="black stroke" />
                        <p className='ml-2 text-xl font-normal'>Deliver goods to your customers</p>
                    </div>
                    <div className='font-liquefier mt-7'>
                        <span className='text-green text-5xl md:text-7xl md:text-[100px] font-normal md:leading-[5rem]'>Effective </span>
                        <br />
                        <span className='text-black text-5xl md:text-7xl md:text-[100px] font-normal md:leading-[5rem]'>and Timely <br/>Delivery</span>
                        <br />
                    </div>
                    <div className='mt-6'>
                        <p>Experience the power of effective and timely delivery with our logistics solution. We take pride in our reputation for swift and reliable deliveries, ensuring that your customers receive their orders on time, every time. Trust us to handle your logistics needs and exceed your delivery expectations.</p>
                    </div>
                </div>
                <div className='flex md:w-1/2  md:flex justify-end relative'>
                   <img src={OfflineImage} alt="Mezo Energy Image" />
                </div>

            </div>

        </div>

    )
}

export default OfflineSection