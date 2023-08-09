import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import GreenStroke from "../../../assets/icons/green-stroke.svg"
import OfflineImage from "../../../assets/images/fast-reliable-image.svg";
import MezoBagImage from "../../../assets/images/mez-shopbag-img.png";
import PhoneImage from "../../../assets/images/aboutus-phone-image.svg";
import OfficeImage from "../../../assets/images/office-image.svg";
import LightImage from "../../../assets/images/aboutus-light-image.svg";
import ManPhoneImage from "../../../assets/images/aboutus-man-with-phone-image.svg";
import PipeImage from "../../../assets/images/aboutus-pipe-image.svg";
import PassionImage from "../../../assets/images/aboutus-passion-led-us-image.svg";
import WeighingImage from "../../../assets/images/weighing-image.svg";
import SmallGreenStroke from "../../../assets/icons/short-green-stroke.svg";
import PearlRestaurantImage from "../../../assets/images/pearl-restaurant-image.svg";
import PearlLogo from "../../../assets/images/pearl-logo.svg";
import ClientSlider from '../../../components/ClientSlider';
import CustomerFeedback from '../../../pages/Customers/views/CustomerFeedback';



function OfflineSection() {
    const location = useLocation()
    const cookinGasSection = useRef()
    const restaurantsSection = useRef()
    const fitDetails = [
        {
            details: "One - time payments:",
            moreDetails: "Make instant transfers from Mezopay to Mezopay, Mezopay to other wallet, and Mezopay to local banks "
        },
        {
            details: "Bulk transfers:",
            moreDetails: "Send bulk transfers to multiple local banks at a glance"
        },

    ]

    useEffect(() => {          
        console.log('log this message when this React component is mounted!', location.hash);
        if(location.hash) { 
            if(location.hash === "#cooking-gas"){
                window.scrollTo(0, cookinGasSection.current.offsetTop); 
            }
            if(location.hash === "#restaurants"){
                window.scrollTo(0, restaurantsSection.current.offsetTop); 
            }
        }
    }, [location.hash]);

    return (
        <div className='py-7 md:pt-16 pb-20 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins'>
            <div className='flex flex-col lg:flex-row w-full gap-10 gap-20'>
                <div className='flex flex-col md:w-1/2 '>
                    <span className='text-green text-3xl md:text-[40px] font-semibold leading-16 md:whitespace-nowrap'>Innovation <span className='text-black'> at its Best</span> </span>
                    <br />

                    <div className='mt-4 leading-[2rem]'>
                        <p>At Mezovest, we breathe innovation. Our cutting-edge commerce solution model, F.I.T (Finance, Infrastructure, and Technology), is tailored to meet the unique needs of businesses operating in the energy sector. With our expertise, we have founded Mezo Energy Trading Limited (METL), introducing the game-changing non-corrosive composite gas cylinder for enhanced safety and convenience.</p>
                    </div>
                </div>
                <div className='flex flex-col md:w-1/2 md:relative'>
                    <img src={WeighingImage} className="md:absolute md:-top-32" />
                </div>

            </div>
            <div className='flex flex-col lg:flex-row w-full gap-20 grid grid-cols-1 md:grid-cols-3 mt-28 xl:mt-60'>
                <div className='flex flex-col col-span-1'>
                    <span className='text-green text-3xl md:text-[40px] font-semibold leading-[3rem] md:whitespace-nowrap'>Tailored  <span className='text-black '> Financing<br /> Solutions</span> </span>
                    <br />

                    <div className='mt-4 leading-[2rem]'>
                        <p>Cash flow worries? Not with Mezovest. We offer flexible credit loans and inventory financing, tailored to your sales volume, to fuel your business growth. Say hello to seamless finance that keeps you in business and in profit. Get in touch with us today to learn more.</p>
                    </div>
                </div>
                <div className='flex flex-col col-span-1 '>
                    <span className='text-green text-3xl md:text-[40px] font-semibold leading-[3rem]'>Your Partner in <span className='text-black'>Progress</span> </span>
                    <br />

                    <div className='mt-4 leading-[2rem]'>
                        <p>{"Say goodbye to hassles in supply and distribution! We've got it covered with our logistics solution company, Spatch. Seamlessly delivering cooking gas to vendors and customers nationwide, we ensure timely and reliable service, so you can focus on growing your business."}</p>
                    </div>
                </div>
                <div className='flex flex-col col-span-1 '>
                    <span className='text-green text-3xl md:text-[40px] font-semibold leading-[3rem]'>Streamlined <span className='text-black'>Logistics</span> </span>
                    <br />

                    <div className='mt-4 leading-[2rem]'>
                        <p>{"Say goodbye to hassles in supply and distribution! We've got it covered with our logistics solution company, Spatch. Seamlessly delivering cooking gas to vendors and customers nationwide, we ensure timely and reliable service, so you can focus on growing your business."}</p>
                    </div>
                </div>

            </div>
            <div className='flex flex-col w-full mt-20' id="restaurants" ref={restaurantsSection}>
                <div className='w-full'>
                    <div className='flex'>
                        <img src={SmallGreenStroke} />
                        <p className='ml-3'>Mezovest is the best choice </p>
                    </div>
                    <div className='flex flex-col mt-6 md:mt-10'>
                        <h5 className='font-liquefier text-black text-5xl md:text-7xl md:text-[100px] font-normal md:!leading-[5rem]'>For  <span className='text-green'>Restaurants</span></h5>
                    </div>
                    <p className=' mt-8 leading-[2rem]'>Count on us to consistently meet your cooking gas needs, no matter the challenge. We deliver even during impossible and tough situations, ensuring your kitchen runs smoothly and your business thrives. Trust in our reliable solutions for a seamless cooking gas experience.</p>
                </div>
                <div className='flex flex-col w-full mt-10'>
                    <div className='w-full flex flex-col md:flex-row mt-12'>
                        <div className='md:w-3/5 flex flex-col md:flex-row justify-start relative align-center'>
                            <img className='w-full md:w-[435px]' src={PearlRestaurantImage} />
                            <img className='md:w-[285px] z-10 absolute-centering absolute ' src={PearlLogo} />


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

            </div>
            <div className='flex flex-col w-full mt-20' id="cooking-gas" ref={cookinGasSection}>
                <div className='w-full'>
                    <div className='flex'>
                        <img src={SmallGreenStroke} />
                        <p className='ml-3'>Mezovest is the best choice  </p>
                    </div>
                    <div className='flex flex-col mt-6 md:mt-10'>
                        <h5 className='font-liquefier text-black text-5xl md:text-7xl md:text-[100px] font-normal md:!leading-[5rem]'>For  <span className='text-green'>Cooking Gas Vendors</span></h5>
                    </div>
                    <p className=' mt-8 leading-[2rem]'>Trust Mezovest for a seamless gas supply experience with our reliable supply chain and efficient logistics. As a leading commerce solution company, we offer innovative inventory financing for cooking gas vendors, providing them with gas upfront and enabling them to pay after making sales. This eliminates the burden of upfront costs, allowing vendors to focus on growing their businesses.</p>
                </div>
            </div>


        </div>

    )
}

export default OfflineSection