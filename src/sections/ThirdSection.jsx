import React from 'react';
import CustomerExperienceSlider from '../components/CustomerExperienceSlider';

function ThirdSection() {
  return (
    <div className='py-14 md:pt-28 pb-20 px-6 xl:px-36 !bg-black h-full min-h-fit font-poppins text-white'>
      <div className='flex flex-col text-center'>
        <p className='flex-lg font-normal'>
          <span className='font-bold'>Mezovest</span><span>{" "}offers the best products for a remarkable</span>
        </p>
        <h5 className='font-liquefier text-green text-5xl md:text-7xl md:text-[100px] font-normal leading-16 my-6'>Commerce Experience</h5>
        <p className='flex-lg font-normal max-w-[657px] text-center m-auto'>Stay Ahead of the Competition with Our State-of-the-Art Commerce Solutions. Empower Your Brand with Our End-to-End Commerce Products.</p>
      </div>
      <CustomerExperienceSlider />
    </div>
  )
}

export default ThirdSection