import React, { useCallback } from 'react'
import BlackStroke from "../assets/icons/black-stroke.svg";
import MezoEnergyImage from "../assets/images/mezo-energy.svg";
import RelaiabilityIcon from "../assets/icons/reliability-icon.svg";
import SafetyIcon from "../assets/icons/safety-icon.svg";
import TechnologyIcon from "../assets/icons/technology-icon.svg";
import QualityIcon from "../assets/icons/safety-icon.svg";
import GreenArrowIcon from "../assets/icons/green-arrow-icon.svg";
import PearlRestaurantImage from "../assets/images/pearl-restaurant-image.svg";
import PearlLogo from "../assets/images/pearl-logo.svg";
import ClientSlider from './ClientSlider';

function MezoEnergy() {

    const qualities = [
        {
            title: "Reliability",
            icon: RelaiabilityIcon,
        },
        {
            title: "Safety",
            icon: SafetyIcon,
        },
        {
            title: "Technology",
            icon: TechnologyIcon,
        },
        {
            title: "Quality",
            icon: QualityIcon,
        }
    ]
    return (
        <>

            <div className='flex flex-col md:flex-row w-full'>
                <div className='flex flex-col md:w-3/5'>
                    <div className='flex'>
                        <img src={BlackStroke} alt="black stroke" />
                        <p className='ml-2 text-xl font-normal'>Biggest players in the LPG sector</p>
                    </div>
                    <div className='font-liquefier mt-7'>
                        <span className='text-green text-5xl md:text-7xl md:text-[100px] font-normal leading-16'>Mezo Energy</span>
                        <br />
                        <span className='text-black text-5xl md:text-7xl md:text-[100px] font-normal leading-16'>Trading Limited</span>
                        <br />
                        <span className='text-2xl md:text-4xl'>(METL)</span>
                    </div>
                    <p className='mt-7 text-lg font-medium'>
                        Mezoenergy trading limited is an energy company that has a big reputation in
                        gas trading with supply chains across the country. The company was established
                        in 2021 and is positioned to be the fastest growing gas trading company in Nigeria.
                        We have an unmatched reputation for our commitment to our excellence and dedication to
                        quality, safety and use of technology makes us the most reliable partner for most businesses.
                        With our beautiful and innovative composite gas cylinder, we have also been able to win
                        the trust of end-users who share the same core values as we do.
                    </p>
                    <p className='mt-4 text-lg font-medium'>
                        In partnership with mezovest, we provide gas financing where we deliver high
                        quality cooking gas to our vendors. Hundreds of small businesses have leveraged
                        this credit system to grow their business as well as several stakeholders in the
                        LPG value chain.
                    </p>


                </div>
                <div className=' md:w-2/5 mt-10 md:mt-0 flex'>
                    <img src={MezoEnergyImage} alt="Mezo Energy Image" className='md:w-[834px]' />
                </div>

            </div>
            <div className='flex align-center md:w-3/5 justify-between mt-9'>
                {qualities.map((item, index) => (
                    <div className='flex flex-col' key={index}>
                        <img src={item.icon} className="h-9" />
                        <p className='text-sm mt-1'>{item.title}</p>
                    </div>
                ))}
            </div>
            <div className='w-full flex flex-col md:flex-row mt-12'>
                <span>Discover how Mezoenergy helped businesses in the food industry.</span>
                
            </div>
            <div className='w-full flex flex-col md:flex-row mt-12'>
                <div className='md:w-3/5 flex flex-col md:flex-row justify-center relative align-center'>
                    <img className='w-full md:w-[435px]' src={PearlRestaurantImage} />
                    <img className='md:w-[285px] z-10 absolute-centering absolute ' src={PearlLogo} />


                </div>
                <div className='md:w-2/5 flex-col md:ml-24 mt-4 md:mt-0'>
                    <p className='text-lg font-medium'>
                        With its scalable yet robust platform, Mezovest and its supporting partners
                        created a custom-made solution that simplifies backend complexities, showcases our
                        high-end product offering and enhances the customer journey as we continue to expand.
                    </p>
                    <p className='text-lg font-medium mt-10'><span className='font-bold'>-Emeka Igwe </span>{" "}Co-Founder</p>
                    <p className='text-lg font-medium'>Pearl Restaurant</p>
                </div>

            </div>
            <div className='my-10 md:my-20'>
                <ClientSlider />
            </div>
        </>

    )
}

export default MezoEnergy