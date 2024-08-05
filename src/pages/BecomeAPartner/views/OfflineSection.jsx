import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import GreenStroke from "../../../assets/icons/green-stroke.svg"
import OfflineImage from "../../../assets/images/fast-reliable-image.svg";
import MezoBagImage from "../../../assets/images/mez-shopbag-img.png";
import PhoneImage from "../../../assets/images/aboutus-phone-image.svg";
import OfficeImage from "../../../assets/images/office-image.svg";
import LightImage from "../../../assets/images/aboutus-light-image.svg";
import ManPhoneImage from "../../../assets/images/aboutus-man-with-phone-image.svg";
import PipeImage from "../../../assets/images/aboutus-pipe-image.svg";
import PassionImage from "../../../assets/images/aboutus-passion-led-us-image.svg";
import BecomeAPartner from "../../../assets/images/become-a-partner-image.svg"
import SmallGreenStroke from "../../../assets/icons/short-green-stroke.svg";
import PearlRestaurantImage from "../../../assets/images/pearl-restaurant-image.svg";
import PearlLogo from "../../../assets/images/pearl-logo.svg";
import ClientSlider from '../../../components/ClientSlider';
import GreenCallIcon from "../../../assets/icons/green-call-icon.svg";
import GreenEmailIcon from "../../../assets/icons/green-email-icon.svg";
import GreenLocationIcon from "../../../assets/icons/green-location-icon.svg";


function OfflineSection() {

    const info = [
        {
            id: 1,
            image: GreenCallIcon,
            heading: "Call us",
            subheading: "+234 913 357 7245",
        },
        {
            id: 2,
            image: GreenEmailIcon,
            heading: "Email Us",
            subheading: "hello@mezovest.com",
        },
        {
            id: 3,
            image: GreenLocationIcon,
            heading: "Ajah",
            subheading: "Ajah Lagos",
        },
    ]

    return (
        <div className='py-7 md:pt-16 pb-20 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins'>
            <div className='flex flex-col flex-col-reverse lg:flex-row w-full gap-10 md:gap-20'>
                <div className='flex flex-col md:w-1/2 '>
                    <div className='md:mt-4 leading-[2rem]'>
                        <p>{"Join forces with Mezovest as a valued partner and unlock new business opportunities. If you have a digital platform, app, or website and seek to expand your offerings, our partnership venture is the perfect match. Become a reseller of our top-quality cooking gas through your platform, providing added convenience to your customers while generating additional revenue streams. With our seamless supply chain and logistics, you can confidently offer a steady and reliable gas supply to your audience. Step into the future of commerce and embark on a rewarding journey with Mezovest as your trusted partner. Together, we'll elevate customer experiences and drive growth for both of our businesses. Let's shape the industry, one partnership at a time"}.</p>

                        <p className='mt-10'>{"Don't miss out on the chance to grow and thrive in the energy sector with Mezovest's support. Become a partner and seize the future of commerce together!"}

                        </p>
                        <div className='w-full flex mt-6 justify-start'>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:sales@mezovest.com"
                            className='bg-green px-10 py-4 max-w-fit self-end cursor-pointer'>
                            <p className='text-base font-normal whitespace-nowrap text-black'>TALK TO SALES</p>
                        </a>
                    </div>
                    </div>
                </div>
                <div className='flex flex-col md:w-1/2 md:relative'>
                    <LazyLoadImage src={BecomeAPartner} className="md:absolute md:-top-32" />
                </div>

            </div>
            <div className='flex flex-col w-full flex justify-center  mt-28 xl:mt-48 '>
                <div className='flex justify-center flex-col col-span-1'>
                    <span className='text-black text-3xl md:text-[40px] font-semibold leading-[3rem] md:whitespace-nowrap text-center'>Have a   <span className='text-green '> question?<br /></span> </span>
                    <div className='mt-2 leading-[2rem] flex justify-center'>
                        <p className='text-center'>Our customer service is always available to reply all queries </p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-10 justify-between mt-10'>
                {info.map((item) => (
                    <div className='mt flex ' key={item.id}>
                        <LazyLoadImage src={item.image} className="w-[50px] h-[50px]"/>
                        <div className='ml-2  justify-center flex flex-col'>
                            <p className='text-md md:text-xl font-medium'>{item?.heading}</p>
                            <p className='text-xs md:text-sm mt-1'>{item?.subheading}</p>
                        </div>
                    </div>
                ))}

                </div>
                
               
            </div>


        </div>

    )
}

export default OfflineSection