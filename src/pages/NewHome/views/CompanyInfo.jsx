import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components"
import MezoVestLogo from "../../../assets/icons/mezovest-black-logo.svg";
import TwitterIcon from "../../../assets/icons/twitter-black-icon.svg";
import InstagramIcon from "../../../assets/icons/instagram-black-icon.svg";
import FacebookIcon from "../../../assets/icons/facebook-black-icon.svg";
import LinkedInIcon from "../../../assets/icons/linkedin-black-icon.svg";

function CompanyInfo() {
    const navigate = useNavigate()
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
        <div className='py-7 md:pt-14 pb-20 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins flex md:flex-row flex-col justify-between md:gap-28 max-w-[1400px] m-auto'>
            <div className='flex flex-col md:w-1/5'>
                <a href='/'>
                    <img src={MezoVestLogo} className="max-w-[200px] cursor-pointer" />
                </a>
                <p className='mt-10 md:text-sm whitespace-nowrap'>Sales: 09133577245</p>
                <p className='mt-2 md:text-sm whitespace-nowrap'>Help Desk: 09133577245</p>
                <p className='mt-2 md:text-sm'>No 36 Turnbull Road, Ikoyi, Lagos, Nigeria. </p>
                <div className='hidden md:flex mt-6'>
                    <div className='mt-4 md:mt-0 grid grid-cols-4 gap-4 items-center  flex justify-center'>
                        {socials.map((item, index) => (
                            <a
                                key={index}
                                target="_blank"
                                rel="noopener noreferrer"
                                href={item?.link}
                            >
                                <img src={item.icon} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex mt-8 md:mt-0 w-full justify-between md:w-2/5'>
                <div className='w-1/3 flex-col flex'>
                    <p className='font-bold text-md '>Products</p>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://mezopay.com"
                        className='text-sm mt-6'
                    >Mezopay</a>
                    <a
                        // target="_blank"
                        // rel="noopener noreferrer"
                        // href="https://mezopay.mezovest.com/appdownloads"
                        className='mt-4 text-sm whitespace-nowrap opacity-10'
                    >Mezopay Business</a>
                    <a
                        // target="_blank"
                        // rel="noopener noreferrer"
                        // href="https://mezopay.mezovest.com/appdownloads"
                        className='mt-4 text-sm opacity-10'
                    >Mezogateway</a>
                    <a
                        href="/storefront"
                        className='mt-4 text-sm'
                    >Storefront</a>
                    <a
                        href="/pos"
                        className='mt-4 text-sm'
                    >POS Terminals</a>
                </div>

                <div className='w-1/3'>
                    <p className='font-bold text-md'>Mezovest</p>
                    <a 
                        href='https://mezoenergy.com'
                        className='mt-6 text-sm'>Mezo Energy</a>
                    <a 
                        href='https://spatchng.com'
                        className='mt-4 text-sm'>Spatch</a>
                    <p className='font-bold text-sm mt-6 opacity-10'>Developers</p>
                    <p className='mt-6 text-sm whitespace-nowrap opacity-10'>API Documentation</p>
                    <p className='mt-4 text-sm opacity-10'>API Integrations</p>
                </div>
            </div>
            <div className='flex mt-8 md:mt-0 w-full justify-between md:w-2/5'>

                <div className='w-1/3 flex flex-col'>
                    <p className='font-bold text-md whitespace-nowrap'>Why Mezovest</p>
                    <a
                        href="/why-choose-us"
                        className='mt-6 text-sm whitespace-nowrap'
                    >Why choose Mezovest</a>
                    <a
                        href="/testimonials"
                        className='mt-4 text-sm'>Testimonials</a>
                    <a
                        // href="/testimonials"
                        className='mt-4 text-sm'>For Restaurants</a>
                    <a
                        // href="/testimonials" 
                        className='mt-4 text-sm'>For Cooking Gas Vendors</a>
                </div>

                <div className='w-1/3 flex flex-col'>
                    <p className='font-bold text-md'>Company</p>
                    <a
                        href="/about-us" 
                        className='mt-6 text-sm'>About Us</a>
                    <a
                        href="https://blog.mezovest.com" 
                        className='mt-4 text-sm'>Blog</a>
                    <a
                        // href="/testimonials" 
                        className='mt-4 text-sm opacity-10 whitespace-nowrap'>Become a partner</a>
                    <a
                        // href="/testimonials" 
                        className='mt-4 text-sm opacity-10'>Careers</a>
                </div>

            </div>




        </div>
    )
}

export default CompanyInfo

