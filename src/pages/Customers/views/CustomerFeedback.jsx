import React from 'react';
import HumanFace from "../../../assets/images/human-smiling-face.png";
import StarIcon from "../../../assets/icons/star-icon.svg"

function CustomerFeedback() {
    return (
        <div className='py-7 md:pt-36 pb-20 px-6 xl:px-36 h-full min-h-fit font-poppins !bg-[#F1F1F180] flex gap-10 overflow-y-scroll w-full'>
            <div className='w-[237px] md:w-[345px] min-h-[437px] shadow-lg bg-white'>
                <div className='w-full'>
                    <img src={HumanFace} />
                </div>
                <div className='p-9 w-full'>
                    <h4 className='font-bold text-md text-center'>Very Easy to use!</h4>
                    <div className='mt-3 gap-2 flex justify-center'>
                        <img src={StarIcon} />
                        <img src={StarIcon} />
                        <img src={StarIcon} />
                        <img src={StarIcon} />
                        <img src={StarIcon} />
                    </div>
                    <p className='mt-10 text-xs text-center'>
                        With its scalable yet robust platform, Mezovest and its supporting partners created a custom-made solution that simplifies backend complexities, showcases our high-end product offering and enhances the customer journey as we continue to expand.
                    </p>

                    <p className='text-xs font-bold mt-14 text-center'>Segun Balogun</p>
                    <p className='text-xs mt-4 text-center'>Gas vendor</p>
                </div>

            </div>
            <div className='w-[237px] md:w-[345px] min-h-[437px]  shadow-lg bg-white'>
                <div>
                    <img src={HumanFace} />
                </div>
                <div className='p-9'>
                    <h4 className='font-bold text-md text-center'>Very Easy to use!</h4>
                    <div className='mt-3 gap-2 flex justify-center'>
                        <img src={StarIcon} />
                        <img src={StarIcon} />
                        <img src={StarIcon} />
                        <img src={StarIcon} />
                        <img src={StarIcon} />
                    </div>
                    <p className='mt-10 text-xs text-center'>
                        With its scalable yet robust platform, Mezovest and its supporting partners created a custom-made solution that simplifies backend complexities, showcases our high-end product offering and enhances the customer journey as we continue to expand.
                    </p>

                    <p className='text-xs font-bold mt-14 text-center'>Segun Balogun</p>
                    <p className='text-xs mt-4 text-center'>Gas vendor</p>
                </div>

            </div>
            <div className='w-[237px] md:w-[345px] min-h-[437px]  shadow-lg bg-white'>
                <div>
                    <img src={HumanFace} />
                </div>
                <div className='p-9'>
                    <h4 className='font-bold text-md text-center'>Very Easy to use!</h4>
                    <div className='mt-3 gap-2 flex justify-center'>
                        <img src={StarIcon} />
                        <img src={StarIcon} />
                        <img src={StarIcon} />
                        <img src={StarIcon} />
                        <img src={StarIcon} />
                    </div>
                    <p className='mt-10 text-sm text-center'>
                        With its scalable yet robust platform, Mezovest and its supporting partners created a custom-made solution that simplifies backend complexities, showcases our high-end product offering and enhances the customer journey as we continue to expand.
                    </p>

                    <p className='text-xs font-bold mt-10 text-center'>Segun Balogun</p>
                    <p className='text-xs mt-2 text-center'>Gas vendor</p>
                </div>

            </div>
        </div>
    )
}

export default CustomerFeedback