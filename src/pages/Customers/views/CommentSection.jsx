import React from 'react';
import ProfileImage from "../../../assets/icons/profile-circle.svg";
import StarIcon from "../../../assets/icons/star-icon.svg"

function CommentSection() {
    return (
        <div className='py-7 md:pt-14 pb-20 px-6 xl:px-36 !bg-white font-poppins hidden md:flex relative h-[700px] max-w-[1700px] m-auto'>
            <div className='w-[447px] p-6 border border-black rounded-2xl absolute top-24 left-40'>
                <div className='gap-4 flex border-b border-black pb-4'>
                    <img src={ProfileImage} />
                    <p>
                        With its scalable yet robust platform, Mezovest and its supporting partners created a
                        custom-made solution that simplifies backend complexities,
                    </p>
                </div>
                <div className='flex justify-center pt-4 gap-2'>
                    <img src={StarIcon} />
                    <img src={StarIcon} />
                    <img src={StarIcon} />
                    <img src={StarIcon} />
                    <img src={StarIcon} />
                </div>

            </div>

            <div className='w-[447px] p-6 border border-black rounded-2xl absolute top-5 right-80'>
                <div className='gap-4 flex border-b border-black pb-4'>
                    <img src={ProfileImage} />
                    <p>
                        With its scalable yet robust platform, Mezovest and its supporting partners created a
                        custom-made solution that simplifies backend complexities,
                    </p>
                </div>
                <div className='flex justify-center pt-4 gap-2'>
                    <img src={StarIcon} />
                    <img src={StarIcon} />
                    <img src={StarIcon} />
                    <img src={StarIcon} />
                    <img src={StarIcon} />
                </div>

            </div>

            <div className='w-[447px] p-6 border border-black rounded-2xl absolute right-40 bottom-60'>
                <div className='gap-4 flex border-b border-black pb-4'>
                    <img src={ProfileImage} />
                    <p>
                        With its scalable yet robust platform, Mezovest and its supporting partners created a
                        custom-made solution that simplifies backend complexities,
                    </p>
                </div>
                <div className='flex justify-center pt-4 gap-2'>
                    <img src={StarIcon} />
                    <img src={StarIcon} />
                    <img src={StarIcon} />
                    <img src={StarIcon} />
                    <img src={StarIcon} />
                </div>

            </div>

            <div className='w-[447px] p-6 border border-black rounded-2xl absolute right-60 bottom-0'>
                <div className='gap-4 flex border-b border-black pb-4'>
                    <img src={ProfileImage} />
                    <p>
                        With its scalable yet robust platform, Mezovest and its supporting partners created a
                        custom-made solution that simplifies backend complexities,
                    </p>
                </div>
                <div className='flex justify-center pt-4 gap-2'>
                    <img src={StarIcon} />
                    <img src={StarIcon} />
                    <img src={StarIcon} />
                    <img src={StarIcon} />
                    <img src={StarIcon} />
                </div>

            </div>

            <div className='w-[447px] p-6 border border-black rounded-2xl absolute left-60 bottom-32'>
                <div className='gap-4 flex border-b border-black pb-4'>
                    <img src={ProfileImage} />
                    <p>
                        With its scalable yet robust platform, Mezovest and its supporting partners created a
                        custom-made solution that simplifies backend complexities,
                    </p>
                </div>
                <div className='flex justify-center pt-4 gap-2'>
                    <img src={StarIcon} />
                    <img src={StarIcon} />
                    <img src={StarIcon} />
                    <img src={StarIcon} />
                    <img src={StarIcon} />
                </div>

            </div>

        </div>
    )
}

export default CommentSection