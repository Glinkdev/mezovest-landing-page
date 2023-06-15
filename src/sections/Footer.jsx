import React from 'react';
import TwitterIcon from "../assets/icons/twitter-icon.svg";
import InstagramIcon from "../assets/icons/instagram-icon.svg";
import FacebookIcon from "../assets/icons/facebook-icon.svg";
import LinkedInIcon from "../assets/icons/linkedin-icon.svg";


function Footer() {
  return (
    <div className='py-7 px-6 xl:px-36 !bg-black h-full min-h-fit font-poppins flex flex-col md:flex-row justify-between text-white'>
        <div className='grid grid-cols-3 gap-4'>
            <p className='text-xs md:text-sm col-span-1'>© Mezovest 2023 </p>
            <p className='text-xs md:text-sm col-span-1'>Terms of service </p>
            <p className='text-xs md:text-sm col-span-1'> Privacy Policy</p>
        </div>
        <div className='mt-4 md:mt-0 grid grid-cols-4 gap-2 min-w-[300px] md: max-w-full items-center  flex justify-center'>
            <img src={TwitterIcon} className="col-span-1 ml-4 "/>
            <img src={InstagramIcon} className="col-span-1 ml-4"/>
            <img src={FacebookIcon} className="col-span-1 ml-4"/>
            <img src={LinkedInIcon} className="col-span-1 ml-4"/>
        </div>
    </div>
  )
}

export default Footer