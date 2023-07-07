import React from 'react';
import TwitterIcon from "../../../assets/icons/twitter-icon.svg";
import InstagramIcon from "../../../assets/icons/instagram-icon.svg";
import FacebookIcon from "../../../assets/icons/facebook-icon.svg";
import LinkedInIcon from "../../../assets/icons/linkedin-icon.svg";


function Footer() {
    var dt = new Date()
    const socials = [
        {
            icon: TwitterIcon,
            link: "https://twitter.com/mezovest",
        },
        {
            icon: InstagramIcon,
            link: "https://instagram.com/mezovest",
        },

        {
            icon: FacebookIcon,
            link: "https://facebook.com/mezovest",
        },
        {
            icon: LinkedInIcon,
            link: "https://www.linkedin.com/company/mezovestinc/",
        },
    ]
    return (
        <div className='py-7 px-6 xl:px-36 !bg-black h-full min-h-fit font-poppins flex flex-col md:flex-row justify-center text-white'>
            <div className='flex justify-center '>
                <p className='text-xs md:text-sm col-span-1'>© {dt.getFullYear()} Mezovest Limited (Company No.1685627). All rights reserved. </p>
                {/* <p className='text-xs md:text-sm col-span-1'>Terms of service </p>
                <p className='text-xs md:text-sm col-span-1'> Privacy Policy</p> */}
            </div>
            {/* <div className='mt-4 md:mt-0 grid grid-cols-4 gap-2 min-w-[300px] md: max-w-full items-center  flex justify-center'>
                {socials.map((item, index) => (
                    <a
                        key = { index }
                        target = "_blank"
                        rel = "noopener noreferrer"
                        href = { item?.link}
                    >
                        <img src={item.icon} className="col-span-1 ml-4 " />
                    </a>
                ))}
        </div> */}
        </div >
    )
}

export default Footer