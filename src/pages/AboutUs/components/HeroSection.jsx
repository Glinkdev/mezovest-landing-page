import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import GreenStroke from "../../../assets/icons/green-stroke.svg";
import SSlogo from "../../../assets/icons/ss-logo-white.svg";
import Tlogo from "../../../assets/icons/t-white-icon.svg";
import Tasteelogo from "../../../assets/icons/tastee-logo.svg";
import Pearllogo from "../../../assets/icons/pearl-logo-white.svg";
import RollingGrilllogo from "../../../assets/icons/rolling-gril-white.svg";
import Jaylogo from "../../../assets/icons/jay-white-icon.svg";
import GeorgeLogo from "../../../assets/icons/george-white-icon.svg";
import PaymentImage from "../../../assets/images/payment-image.svg"

function HeroSection() {
    const PaymentLogos = [SSlogo, Tlogo, Tasteelogo, Pearllogo, RollingGrilllogo, Jaylogo, GeorgeLogo]
    return (
        <div className='flex flex-col md:flex-row  w-full'>
            <div className='flex flex-col lg:flex-row mt-10 md:mt-20 justify-between relative w-full mb-60'>
                <div className='flex-col w-full'>
                    <div className='flex'>
                         <LazyLoadImage src={GreenStroke} alt="green stroke" />
                        <p className='ml-6 font-normal md:text-xl text-white'>We want you to succeed</p>
                    </div>
                    <div className='font-liquefier mt-6'>
                        <span className='text-green text-6xl md:text-7xl md:text-[100px] font-normal leading-16 md:whitespace-nowrap'>The Mezovest Story -</span>
                        <br />
                        <span className='text-white text-6xl md:text-7xl md:text-[100px] font-normal leading-16'>About Us</span>
                    </div>
                    <p className='font-normal md:text-xl text-white mt-6 leading-[2rem]'>
                        {"At Mezovest, we are on a mission to revolutionize the commerce landscape, and our focus is squarely on the dynamic energy industry, specifically LPG(cooking gas) and CNG. As a leading commerce solution company, we are dedicated to providing innovative, efficient, and seamless solutions that cater to the unique needs of businesses operating in the energy sector(cooking gas). "}
                    </p>
                    <p className='font-normal md:text-xl text-white mt-6 leading-[2rem]'>
                        {"We take pride in our innovative commerce solution model, F.I.T (Finance, Infrastructure, and Technology). Fueled by our passion for progress, we founded Mezo Energy Trading Limited (METL), a sister company that leverages F.I.T to provide cutting-edge solutions and introduce the revolutionary non-corrosive composite gas cylinder for enhanced safety and convenience for our end users. We also founded Spatch, our logistics solution company, dedicated to streamlining supply and distribution."}
                    </p>

                </div>
                

            </div>
           
        
        </div>

    )
}

export default HeroSection