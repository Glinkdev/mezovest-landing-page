import React from 'react';
import MezovestLogo from "../../../assets/icons/mezovest-white-logo.svg"
//"../assets/images/mezovest-logo.svg";
import Navigator from '../components/Navigator';
import HeroSection from '../components/HeroSection';
import MezHeroImg from "../../../assets/icons/mez-hero-img.svg"
import EmailIcon from "../../../assets/icons/email-icon.svg";
import CallIcon from "../../../assets/icons/call-icon.svg";


function GrowSection() {

  return (
    <div className='h-full min-h-screen font-poppins flex flex-col md:flex-row '>
      <div className='py-7 md:pt-11 md:pb-36 px-6 xl:pl-36  !bg-darkGreen w-full md:w-1/2 flex flex-col'>
        <a className='flex justify-between' href="/">
          <img src={MezovestLogo} alt="Mezovest Logo" className='h-[40px]' />
          <div className='hidden md:flex'>
          <a href="mailto:hello@mezovest.com" className='flex cursor-pointer'>
              <img src={EmailIcon} alt="mezovest email icon" />
              <div className='text-white ml-2'>
                <p className='font-semibold'>Email us</p>
                <p className='text-xs'>hello@mezovest.com</p>
              </div>
          </a>
          <a href="tel:+234 812 345 6789" className='flex cursor-pointer ml-6'>
              <img src={CallIcon} alt="mezovest email icon"/>
              <div className='text-white ml-2'>
                <p className='font-semibold'>Call Us</p>
                <p className='text-xs'>09133577245</p>
              </div>
          </a>
        </div>
        </a>
        <Navigator />
        <HeroSection />

      </div>
      <div className="w-full md:w-1/2  bg-no-repeat bg-cover h-[500px] md:h-auto">
        <img src={MezHeroImg} className="h-full w-full object-cover"/>
      </div>

    </div>
     
    
  )
}

export default GrowSection