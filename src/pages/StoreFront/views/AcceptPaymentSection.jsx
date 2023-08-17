import React from 'react';
import MezovestLogo from "../../../assets/icons/mezovest-white-logo.svg"
import { createModal } from "react-prompt-modal";
import Navigator from '../../NewHome/components/Navigator';
import HeroSection from '../components/HeroSection';
import EmailIcon from "../../../assets/icons/email-icon.svg";
import CallIcon from "../../../assets/icons/call-icon.svg";
import MenuBar from "../../../assets/icons/mobile-menu-icon.svg";
import MobileMenu from '../../../components/MobileMenu';

function AcceptPayemntSection() {
  const handleAddToCart = () => {
    const modal = createModal({
      component: MobileMenu,
    });
    modal.open();
  };
  return (
    <div className='py-7 md:pt-11 md:pb-24 px-6 xl:px-36 !bg-darkGreen h-full min-h-screen font-poppins '>
      <div className='flex justify-between w-full' >
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
          <a href="tel:+2349133577245" className='flex cursor-pointer ml-6'>
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
      <Navigator />
      <HeroSection />

    </div>
  )
}

export default AcceptPayemntSection