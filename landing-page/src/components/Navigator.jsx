import Reata from 'react';
import RightArrowIcon from "../assets/icons/right-arrow-icon.svg"

function Navigator() {
    const navigation = [
        {
            name: "About us",
            url: "#about"
        },
        {
            name: "Mezo Energy Metl",
            url: "#energy"
        },
        {
            name: "Products",
            url: "#products"
        },
        {
            name: "Contact Us",
            url: "#contact"
        },
    ]
  return (
    <div className='flex justify-between  bg-green py-7 px-14 font-poppins mt-6 w-full'>
        <div className='hidden md:flex justify-between align-center w-2/3'>
            {navigation.map((item, index) => (
                <a key={index} href={item.url} className="pointer font-bold text-sm">{item.name}</a>
            ))}
        </div>

        <div className='flex align-center w-full md:w-1/3 justify-center md:justify-end '>
            <p className="font-poppins font-bold text-sm items-center">Coming soon</p>
            <img src={RightArrowIcon} className="ml-2 hidden md:flex" alt="right arrow icon"/>
        </div>
        

    </div>
  )

}
export default Navigator