import React from 'react';
import GreenCallIcon from "../../../assets/icons/green-call-icon.svg";
import GreenEmailIcon from "../../../assets/icons/green-email-icon.svg";
import GreenLocationIcon from "../../../assets/icons/green-location-icon.svg";
import ContactusImage from "../../../assets/images/gaas-contactus-image.svg";

function Contactus() {
    const info = [
        {
            id: 1,
            image: GreenLocationIcon,
            heading: "Ajah",
            subheading: "Ajah Lagos",
        },
        
        {
            id: 4,
            image: GreenCallIcon,
            heading: "Call us",
            subheading: "+234 913 357 7245",
        },
        {
            id: 3,
            image: GreenEmailIcon,
            heading: "Email Us",
            subheading: "hello@mezovest.com",
        },

    ]
    return (
        <div className='flex flex-col  w-full py-10 md:py-20' id="contactus">
            <div className=' justify-center flex'>
                <img src={ContactusImage} />
            </div>
    
            <div className='py-7 md:pt-10 pb-10 px-6 xl:px-36 h-full min-h-fit font-poppins'>
            <div className='mt-20 grid grid-cols-2 md:grid-cols-3 gap-14 justify-center max-w-[1005px] m-auto'>
                {info.map((item) => (
                    <div className='mt flex ' key={item.id}>
                        <img src={item.image} className="w-[40px] md:w-fit"/>
                        <div className='ml-2 md:ml-6 justify-center flex flex-col text-white'>
                            <p className='text-md md:text-xl font-medium'>{item?.heading}</p>
                            <p className='text-xs md:text-sm mt-1'>{item?.subheading}</p>
                        </div>
                    </div>
                ))}

            </div>
            </div>

        </div>
    );
}

export default Contactus;
