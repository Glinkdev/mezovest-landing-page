import React from 'react';
import styled from "styled-components"
import MezoVestLogo from "../../../assets/icons/mezovest-black-logo.svg";
import TwitterIcon from "../../../assets/icons/twitter-black-icon.svg";
import InstagramIcon from "../../../assets/icons/instagram-black-icon.svg";
import FacebookIcon from "../../../assets/icons/facebook-black-icon.svg";
import LinkedInIcon from "../../../assets/icons/linkedin-black-icon.svg";

function CompanyInfo() {
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
        <div className='py-7 md:pt-14 pb-20 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins flex md:flex-row flex-col justify-between md:gap-28'>
            <div className='flex flex-col md:w-1/5'>
                <img src={MezoVestLogo} className="max-w-[200px]" />
                <p className='mt-4 text-sm'>Sales: +234 706 323 1603</p>
                <p className='mt-2 text-sm'>Help Desk: +234 902 447 2417</p>
                <p className='mt-2 text-sm'>No 36 Turnbull Road, Ikoyi, Lagos, Nigeria. </p>
                <div className='hidden md:flex mt-6'>
                    <div className='mt-4 md:mt-0 grid grid-cols-4 gap-2 items-center  flex justify-center'>
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
                <div className='w-1/3'>
                    <p className='font-bold text-sm '>Products</p>
                    <p className='mt-2 text-sm'>Mezopay</p>
                    <p className='mt-2 text-sm'>Mezopay Business</p>
                    <p className='mt-2 text-sm'>Mezogateway</p>
                    <p className='mt-2 text-sm'>Storefront</p>
                    <p className='mt-2 text-sm'>POS Terminals</p>
                </div>

                <div className='w-1/3'>
                    <p className='font-bold text-sm'>Mezovest</p>
                    <p className='mt-2 text-sm'>Mezo Energy</p>
                    <p className='mt-2 text-sm'>Spatch</p>
                    <p className='font-bold text-sm mt-6'>Developers</p>
                    <p className='mt-2 text-sm'>API Documentation</p>
                    <p className='mt-2 text-sm'>API Integrations</p>
                </div>
            </div>
            <div className='flex mt-8 md:mt-0 w-full justify-between md:w-2/5'>

                <div className='w-1/3'>
                    <p className='font-bold text-sm'>Industry Plays</p>
                    <p className='mt-2 text-sm'>Transportation</p>
                    <p className='mt-2 text-sm'>Energy - LPG</p>
                    <p className='mt-2 text-sm'>Food & Beaverage</p>
                    <p className='mt-2 text-sm'>Finance</p>
                </div>

                <div className='w-1/3'>
                    <p className='font-bold text-sm'>Company</p>
                    <p className='mt-2 text-sm'>About Us</p>
                    <p className='mt-2 text-sm'>News</p>
                    <p className='mt-2 text-sm'>Community</p>
                    <p className='mt-2 text-sm'>Leadership</p>
                    <p className='mt-2 text-sm'>Careers</p>
                </div>

            </div>




        </div>
    )
}

export default CompanyInfo

