import React from 'react';
import PearlRestaurantImage from "../../../assets/images/pearl-restaurant-image.svg";
import PearlLogo from "../../../assets/images/pearl-logo.svg";
import ClientSlider from '../../../components/ClientSlider';

function ClientTestimonial() {
    return (
        <div className='py-7 md:pt-36 pb-20 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins'>

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
                    <p className='text-lg font-medium mt-10'><span className='font-bold'>-Nijad </span>{" "}CEO</p>
                    <p className='text-lg font-medium'>Pearl</p>
                </div>

            </div>
            <div className='my-10 md:my-20'>
                <ClientSlider />
            </div>
        </div>
    )
}

export default ClientTestimonial