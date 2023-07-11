import React from 'react';
import MezovestLogo from "../../../assets/icons/mezovest-white-logo.svg"
//"../assets/images/mezovest-logo.svg";
import Navigator from '../components/Navigator';
import HeroSection from '../components/HeroSection';
import MezHeroImg from "../../../assets/icons/mez-hero-img.svg"
import MetlLogoIcon from "../../../assets/icons/metl-logo-white.svg";
import MezoPayIcon from "../../../assets/icons/mezo-pay-white.svg";
import MezoPayLimitedIcon from "../../../assets/icons/mezo-pay-limited-icon.svg";
import MezoCoinIcon from "../../../assets/icons/mezocoin-logo-white.svg";


function GrowSection() {

  return (
    <div className='h-full min-h-screen font-poppins flex flex-col md:flex-row '>
      <div className='py-7 md:pt-11 md:pb-36 px-6 xl:pl-36  !bg-darkGreen w-full md:w-1/2 flex flex-col'>
        <div className='flex justify-between'>
          <img src={MezovestLogo} alt="Mezovest Logo" className='h-[40px]' />
        </div>
        <Navigator />
        <HeroSection />

      </div>
      <div className="w-full md:w-1/2  bg-no-repeat bg-cover h-[500px] md:h-auto">
        <img src={MezHeroImg} className="h-full w-full"/>
      </div>

    </div>
     
    
  )
}

export default GrowSection