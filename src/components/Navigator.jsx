import Reata from 'react';
import RightArrowIcon from "../assets/icons/right-arrow-icon.svg"
import EmailIcon from "../assets/icons/black-email-icon.svg";
import CallIcon from "../assets/icons/black-call-icon.svg";

function Navigator() {
    const navigation = [
        {
            name: "About us",
            url: "#about"
        },
        {
            name: "Metl",
            url: "#energy"
        },
        {
            name: "Products",
            url: "#products"
        },
        {
            name: "Blog",
            url: "#blog"
        },
    ]
  return (
    <div className='flex justify-between  bg-green px-3 py-5 md:py-7 md:px-14 font-poppins mt-6 w-full'>
        <div className='hidden md:flex justify-between align-center w-2/3'>
            {navigation.map((item, index) => (
                <a key={index} href={item.url} className="pointer font-bold text-sm">{item.name}</a>
            ))}
        </div>

        <div className='md:hidden flex align-center w-full justify-between '>
        <a href="mailto:hello@mezovest.com" className='flex cursor-pointer align-center'>
              <img src={EmailIcon} alt="mezovest email icon" className='w-[29px] h-[29px]'/>
              <div className='text-black ml-2 flex align-cente flex-col'>
                <p className='text-xs font-semibold'>Email us</p>
                <p className='text-[0.6rem]'>hello@mezovest.com</p>
              </div>
          </a>
          <a href="tel:+2349133577245" className='flex cursor-pointer align-center'>
              <img src={CallIcon} alt="mezovest email icon" className='w-[29px] h-[29px]'/>
              <div className='text-black ml-2 flex align-center flex-col'>
                <p className='text-xs font-semibold'>Call Us</p>
                <p className='text-[0.6rem] whitespace-nowrap'>09133577245</p>
              </div>
          </a>
        </div>
        

    </div>
  )

}
export default Navigator