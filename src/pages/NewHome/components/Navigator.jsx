import React from 'react';
import RightArrowIcon from "../../../assets/icons/right-arrow-icon.svg"


function Navigator() {
    const navigation = [
        {
            name: "Solutions",
            url: "#solutions"
        },
        {
            name: "Support",
            url: "#support"
        },
        {
            name: "Pricing",
            url: "#pricing"
        },
        {
            name: "About us",
            url: "#about"
        },
        {
            name: "Blog",
            url: "#blog"
        },
    ]
  return (
    <div className='flex justify-between  bg-green px-3 py-5 md:py-7 md:px-14 font-poppins w-full md:absolute mt-14 md:w-[80%]'>
        <div className='flex justify-center md:justify-between w-full'>

        
        <div className='hidden md:flex justify-between align-center w-3/6'>
            {navigation.map((item, index) => (
                <a key={index} href={item.url} className="pointer font-bold text-sm">{item.name}</a>
            ))}
        </div>
        <a className="pointer font-bold text-sm flex">Get started <img src={RightArrowIcon} className="ml-2"/>
            
        </a>
        </div>

        
        

    </div>
  )

}
export default Navigator