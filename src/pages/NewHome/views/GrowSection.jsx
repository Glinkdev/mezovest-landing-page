import React, { useState } from 'react';
import MezovestLogo from "../../../assets/icons/mezovest-white-logo.svg"
import { createModal } from "react-prompt-modal";
import Navigator from '../components/Navigator';
import HeroSection from '../components/HeroSection';
import MezHeroImg from "../../../assets/icons/mez-hero-img.svg"
import EmailIcon from "../../../assets/icons/email-icon.svg";
import CallIcon from "../../../assets/icons/call-icon.svg";
import MenuBar from "../../../assets/icons/mobile-menu-icon.svg";
import MobileMenu from '../../../components/MobileMenu';


function GrowSection() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleAddToCart = () => {
    const modal = createModal({
      component: MobileMenu,
    });
    modal.open();
  };
  return (
    <div className='h-full min-h-screen font-poppins flex flex-col md:flex-row '>
      <div className='py-7 md:pt-11 md:pb-36 px-6 xl:pl-36  !bg-darkGreen w-full md:w-1/2 flex flex-col'>
        <div className='flex justify-between md:absolute top-10 w-full md:w-[90%] left-0 px-6 xl:pl-36 m-auto' >
          <a href="/" className='flex '>
            <img src={MezovestLogo} alt="Mezovest Logo" className='h-[40px]' />
          </a>

          <div className='hidden md:flex'>
            <a href="mailto:hello@mezovest.com" className='flex cursor-pointer'>
              <img src={EmailIcon} alt="mezovest email icon" />
              <div className='text-white ml-2'>
                <p className='font-semibold'>Email us</p>
                <p className='text-xs'>hello@mezovest.com</p>
              </div>
            </a>
            <a href="tel:+234 812 345 6789" className='flex cursor-pointer ml-6'>
              <img src={CallIcon} alt="mezovest email icon" />
              <div className='text-white ml-2'>
                <p className='font-semibold'>Call Us</p>
                <p className='text-xs'>09133577245</p>
              </div>
            </a>
          </div>
          <div className='flex md:hidden' onClick={() => handleAddToCart()}>
            <img src={MenuBar} alt="mezovest email icon" />
          </div>
        </div>
        <div className='mt-2 md:mt-8 md:absolute w-full md:w-[81%]'>
          <Navigator />
        </div>

        <HeroSection />

      </div>
      <div className="w-full md:w-1/2 bg-no-repeat bg-cover h-[500px] md:h-auto">
        <img src={MezHeroImg} className="h-full w-full object-cover" />
      </div>

    </div>


  )
}

export default GrowSection