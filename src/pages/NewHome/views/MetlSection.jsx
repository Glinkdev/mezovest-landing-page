import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import BlackStroke from "../../../assets/icons/black-stroke.svg";
import MezoEnergyImage from "../../../assets/images/metl-human-image.svg";
import RelaiabilityIcon from "../../../assets/icons/reliability-icon.svg";
import SafetyIcon from "../../../assets/icons/safety-icon.svg";
import TechnologyIcon from "../../../assets/icons/technology-icon.svg";
import QualityIcon from "../../../assets/icons/safety-icon.svg";
import GreenArrowIcon from "../../../assets/icons/green-arrow-icon.svg";
import PearlRestaurantImage from "../../../assets/images/pearl-restaurant-image.svg";
import PearlLogo from "../../../assets/images/pearl-logo.svg";
import ClientSlider from '../../../components/ClientSlider';

function MetlSection() {
    const navigate = useNavigate()

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
    const moveToReadMore = () => {
        navigate("/testimonials")
    }
    return (
        <div className='py-7 md:pt-36 pb-20 px-6 xl:px-36 h-full min-h-fit font-poppins !bg-[#F1F1F180]'>

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
                    <p className='mt-7  leading-[2rem]'>
                        Mezoenergy trading limited is an energy company that has a big reputation in
                        gas trading with supply chains across the country. The company was established
                        in 2021 and is positioned to be the fastest growing gas trading company in Nigeria.
                    </p>
                    <p className='mt-4 leading-[2rem]'>
                        We have an unmatched reputation for our commitment to our excellence and dedication to
                        quality, safety and use of technology makes us the most reliable partner for most businesses.
                        With our beautiful and innovative composite gas cylinder, we have also been able to win
                        the trust of end-users who share the same core values as we do.
                    </p>
                    <p className='mt-4 leading-[2rem]'>
                        In partnership with mezovest, we provide gas financing where we deliver high
                        quality cooking gas to our vendors. Hundreds of small businesses have leveraged
                        this credit system to grow their business as well as several stakeholders in the
                        LPG value chain.
                    </p>


                </div>
                <div className=' md:w-2/5 mt-10 md:mt-0 flex justify-end md:ml-20'>
                    <img src={MezoEnergyImage} alt="Mezo Energy Image" className='w-full h-full max-w-[1000px]' />
                </div>

            </div>


            <div className='flex align-center justify-between mt-12 md:mt-28 max-w-[800px] m-auto'>
                {qualities.map((item, index) => (
                    <div className='flex flex-col' key={index}>
                        <img src={item.icon} className="h-12 fill-green" />
                        <p className='text-lg font-medium mt-1 '>{item.title}</p>
                    </div>
                ))}
            </div>

            <div className='w-full flex flex-col md:flex-row mt-12 md:mt-28 flex'>
                <span className='flex flex-col md:flex-row'>Discover how Mezoenergy helped businesses in the food industry. <span onClick={moveToReadMore} className='md:ml-2 text-green whitespace-nowrap flex cursor-pointer '>Read more <img src={GreenArrowIcon} alt="right-icon" className='ml-2' /></span></span>
            </div>

            <div className='w-full flex flex-col md:flex-row mt-12 justify-between gap-10'>
                <div className='md:w-3/5 flex flex-col md:flex-row justify-center relative align-center '>
                    <iframe 
                        className='w-full h-[300px]'
                        src="https://www.youtube.com/embed/FoUtEIRNfdQ?si=Mr-dgz4yxfprh_FZ" 
                        title="Mezovest Testimonial" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                    >
                    </iframe>

                </div>
                <div className='md:w-2/5 flex-col md:ml-24 mt-4 md:mt-0'>
                    <p className='text-lg font-medium leading-[2rem]'>
                        For quite some time now, METL has been our trusted solution for all our cooking gas
                        requirements. Their commitment to on-time delivery has been truly remarkable.
                        We can always rely on them without any hesitation.
                    </p>
                    <p className='text-lg font-medium mt-10'><span className='font-bold'>-Nijad </span>{" "}CEO</p>
                    <p className='text-lg font-medium'>Pearl Restaurant</p>
                </div>

            </div>
            <div className='my-10 md:my-20'>
                <ClientSlider />
            </div>
        </div>

    )
}

export default MetlSection