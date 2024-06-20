import React from 'react';
import MerchantImage from "../../../assets/images/blank.svg";
import ServicesImage from "../../../assets/images/gaas-services-image.svg";

function Services() {
    return (
        <div className='flex flex-col  w-full py-10 md:py-20' id="services">
            <div className=' justify-center flex'>
                <img src={ServicesImage} />

            </div>
    
            <div className='py-7 md:pt-20 pb-20 px-6 xl:px-36 h-full min-h-fit font-poppins'>
                <div className='flex flex-col-reverse flex-col lg:flex-row w-full mt-20 gap-10 items-center'>
                    <div className='w-full md:w-1/2 mt-10 md:mt-0 flex '>
                        <img src={MerchantImage} alt="mezo pay terminal"  className='w-full md:h-[510px] object-cover'/>
                    </div>
                    <div className='w-full md:w-1/2 mt-10 md:mt-0 flex '>
                        <img src={MerchantImage} alt="mezo pay terminal"  className='w-full md:h-[510px] object-cover'/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Services;
