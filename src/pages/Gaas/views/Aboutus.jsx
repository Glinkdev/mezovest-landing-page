import React from 'react';
import { Helmet } from 'react-helmet';
import SmallGreenStroke from "../../../assets/icons/short-green-stroke.svg";
import MerchantImage from "../../../assets/images/gaas-distribution-solution-image.svg";
import AboutUsImage from "../../../assets/images/gaas-aboutus-image.svg";

function AboutUs() {
    return (
        <div className='flex flex-col  w-full py-10 md:py-20' id="about">
            <div className=' justify-center flex'>
                <img src={AboutUsImage} />

            </div>
        
    
            <div className='py-7 md:pt-10 pb-10 px-6 xl:px-36 h-full min-h-fit font-poppins'>
                <div className='flex flex-col-reverse flex-col lg:flex-row w-full mt-20 gap-20 items-center'>
                    <div className='w-full md:w-1/2 mt-10 md:mt-0 flex '>
                        <img src={MerchantImage} alt="mezo pay terminal"  className='w-full md:h-[395px] object-cover'/>
                    </div>
                    <div className='md:w-1/2 md:max-w-[480px]'>
                        <div className='flex'>
                            <img src={SmallGreenStroke} />
                            <p className='ml-3 text-white'>Reaching every corner with our</p>
                        </div>
                        <div className='flex flex-col mt-6 md:mt-10'>
                            <h5 className='font-liquefier text-5xl md:text-7xl md:text-[100px] font-normal leading-none md:!leading-[5rem] text-green'>Distributing</h5>
                            <h5 className='font-liquefier text-white text-5xl md:text-7xl md:text-[100px] font-normal leading-none md:!leading-[5rem] '>Solutions</h5>
                        </div>
                        <div className='mb-2'>
                            <p className='text-md mt-8 leading-[2rem] text-white '><span className='font-bold mr-2'>Bulk Delivery:</span>Regular and reliable delivery of CNG to residential, commercial, and industrial customers. This includes setting up distribution networks to reach remote or underserved areas.</p>
                        </div>
                        <div className='mb-2'>
                            <p className='text-md mt-8 leading-[2rem] text-white '><span className='font-bold mr-2'>CNG bottle swap Programs:</span>Providing and exchanging CNG cylinders for households and small businesses to ensure a constant supply of gas for power, and other uses.</p>
                        </div>
                        

                    </div>


                </div>
            </div>

        </div>
    );
}

export default AboutUs;
