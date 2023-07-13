import React from 'react';
import MezovestLogo from "../../../assets/icons/mezovest-white-logo.svg"
//"../assets/images/mezovest-logo.svg";
import Navigator from '../../NewHome/components/Navigator';
import HeroSection from '../components/HeroSection';


function AcceptPayemntSection() {
  return (
    <div className='py-7 md:pt-11 md:pb-24 px-6 xl:px-36 !bg-darkGreen h-full min-h-screen font-poppins '>
      <a className='flex justify-between' href="/">
        <img src={MezovestLogo} alt="Mezovest Logo" className='h-[40px]' />
      </a>
      <Navigator />
      <HeroSection />

    </div>
  )
}

export default AcceptPayemntSection