import React from 'react';
import SmallGreenStroke from "../../../assets/icons/short-green-stroke.svg";
import MerchantImage from "../../../assets/images/cashflow-management-image.svg";
import RightArrowIcon from "../../../assets/icons/right-arrow-icon.svg"

function OnlineSection() {

    return (
        <div className='py-7 md:pt-20 pb-20 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins'>
            <div className='flex flex-col w-full mt-20'>
                <div className='w-full'>
                    <div className='flex'>
                        <img src={SmallGreenStroke} />
                        <p className='ml-3'>Mezovest is the best choice  </p>
                    </div>
                    <div className='flex flex-col mt-6 md:mt-10'>
                        <h5 className='font-liquefier text-black text-5xl md:text-7xl md:text-[100px] font-normal md:!leading-[5rem]'>For  <span className='text-green'> CNG & LPG Vendors</span></h5>
                    </div>
                    <p className=' mt-8 leading-[2rem]'>{"Partner with Mezovest for a smooth and reliable gas supply. Our seamless supply chain and efficient logistics ensure you have a steady stream of LPG and CNG to meet your customers' demands. Focus on your business growth, and leave the gas supply to us."}</p>
                </div>
            </div>
        </div>
    )
}

export default OnlineSection