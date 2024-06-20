import React from 'react';
import MezovestLogo from "../../../assets/icons/mezovest-white-logo.svg"
import ArrowIcon from "../../../assets/icons/arrow-icon.svg"

function Navigation() {
    const handleAddToCart = () => {
        const modal = createModal({
            component: MobileMenu,
        });
        modal.open();
    };

    return (
        <div className='py-11 px-6 xl:px-36 h-full font-poppins '>
            <div className='flex justify-between' >
                <a href="/" className='flex '>
                    <img src={MezovestLogo} alt="Mezovest Logo" className='max-w-[70%] md:max-w-full h-[40px]' />
                </a>
                <div className='hidden md:flex gap-20 text-[#fff]'>
                    <a href="#about" className='flex cursor-pointer font-bold'>
                        About
                    </a>
                    <a href="#services" className='flex cursor-pointer font-bold'>
                        Services
                    </a>
                    <a href="#contactus" className='flex cursor-pointer font-bold'>
                        Contact us
                    </a>
                </div>
                <div className='flex' onClick={() => handleAddToCart()}>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="mailto:sales@mezovest.com"
                        className='flex items-center'
                    >
                        <p className='flex cursor-pointer font-bold text-[#fff] text-[12px] md:text-sm  items-center'>
                            GET STARTED <img src={ArrowIcon} className="w-4 ml-2" />
                        </p>
                    </a>
                </div>
            </div>


        </div>
    )
}

export default Navigation