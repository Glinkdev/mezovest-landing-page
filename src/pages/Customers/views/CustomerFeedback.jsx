import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import HumanFace from "../../../assets/images/placeholder-profle.svg";
import StarIcon from "../../../assets/icons/star-icon.svg"

function CustomerFeedback() {
    return (
        <div className='py-7 md:pt-36 pb-20 px-6 xl:px-36 h-full min-h-fit font-poppins !bg-[#F1F1F180] flex gap-10 overflow-y-scroll w-full justify-center flex-col md:flex-row'>
            <div className='w-full md:w-[345px] h-[637px] shadow-lg bg-white'>
                <div className='w-full'>
                    <LazyLoadImage src={HumanFace} className="object-cover w-full h-full" />
                </div>
                <div className='p-9 w-full'>
                <div>
                    <h4 className='font-bold text-md text-center'>Very Easy to use!</h4>
                    <div className='mt-3 gap-2 flex justify-center'>
                        <LazyLoadImage src={StarIcon} />
                        <LazyLoadImage src={StarIcon} />
                        <LazyLoadImage src={StarIcon} />
                        <LazyLoadImage src={StarIcon} />
                        <LazyLoadImage src={StarIcon} />
                    </div>
                    <p className='mt-10 text-xs text-center'>
                        {"With their support, we can now maintain a robust inventory without worrying about cash flow constraints. Their seamless financing options and timely deliveries have empowered us to meet our customers' demands efficiently. Partnering with Mezovest has taken our business to new heights, and we're grateful for their invaluable support."}
                    </p>
                    </div>

                    <div className='flex flex-col justify-end'>
                        <p className='text-xs font-bold mt-14 text-center'>Samuel Judah</p>
                        <p className='text-xs mt-4 text-center'>Gas vendor</p>
                    </div>
                </div>

            </div>
            <div className='w-full md:w-[345px] h-[637px] shadow-lg bg-white'>
                <div className='w-full'>
                    <LazyLoadImage src={HumanFace} className="object-cover w-full h-full" />
                </div>
                <div className='p-9 w-full h-[426px] flex justify-between flex-col'>
                    <div>
                        <h4 className='font-bold text-md text-center'>Very Easy to use!</h4>
                        <div className='mt-3 gap-2 flex justify-center'>
                            <LazyLoadImage src={StarIcon} />
                            <LazyLoadImage src={StarIcon} />
                            <LazyLoadImage src={StarIcon} />
                            <LazyLoadImage src={StarIcon} />
                            <LazyLoadImage src={StarIcon} />
                        </div>
                        <p className='mt-10 text-xs text-center'>
                            {"Mezovest's inventory financing has been a lifeline for our gas supply business. Their flexible financing options have enabled us to expand our inventory and cater to a broader customer base."}
                        </p>
                    </div>

                    <div className='flex flex-col justify-end'>
                        <p className='text-xs font-bold mt-14 text-center'>Ogbo Moses</p>
                        <p className='text-xs mt-4 text-center'>Gas vendor</p>
                    </div>
                </div>

            </div>
            <div className='w-full md:w-[345px] h-[637px] shadow-lg bg-white'>
                <div className='w-full'>
                    <LazyLoadImage src={HumanFace} className="object-cover w-full h-full" />
                </div>
                <div className='p-9 w-full'>
                    <h4 className='font-bold text-md text-center'>Very Easy to use!</h4>
                    <div className='mt-3 gap-2 flex justify-center'>
                        <LazyLoadImage src={StarIcon} />
                        <LazyLoadImage src={StarIcon} />
                        <LazyLoadImage src={StarIcon} />
                        <LazyLoadImage src={StarIcon} />
                        <LazyLoadImage src={StarIcon} />
                    </div>
                    <p className='mt-10 text-xs text-center'>
                        {"We can't thank Mezovest enough for their unparalleled inventory financing and supply chain support. Their partnership has revolutionized the way we manage our gas supply business. With Mezovest by our side, we feel empowered to meet our business needs effortlessly, and we highly recommend their services to fellow gas vendors."}
                    </p>

                    <div className='flex flex-col justify-end'>
                        <p className='text-xs font-bold mt-14 text-center'>Jimoh Ibrahim Olayinka</p>
                        <p className='text-xs mt-4 text-center'>Gas vendor</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CustomerFeedback