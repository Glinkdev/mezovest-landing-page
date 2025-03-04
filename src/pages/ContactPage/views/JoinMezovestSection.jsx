import React from 'react';
import { styled } from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import SmallWhiteStroke from "../../../assets/images/short-white-stroke.svg";
import GreenCallIcon from "../../../assets/icons/green-call-icon.svg";
import GreenEmailIcon from "../../../assets/icons/green-email-icon.svg";
import GreenLocationIcon from "../../../assets/icons/green-location-icon.svg";

function JoinMezovestSection() {
    const info = [
        {
            id: 1,
            image: GreenLocationIcon,
            heading: "Ajah",
            subheading: "Ajah Lagos",
        },
        // {
        //     id: 2,
        //     image: GreenLocationIcon,
        //     heading: "Festac",
        //     subheading: "24 Ago Palace way, Festac Lagos.",
        // },
        {
            id: 3,
            image: GreenEmailIcon,
            heading: "Email Us",
            subheading: "hello@mezovest.com",
        },
        {
            id: 4,
            image: GreenCallIcon,
            heading: "Call us",
            subheading: "+234 913 357 7245",
        },

    ]
    return (
        
        <Styled className='pt-20 md:py-20 px-6 xl:px-36 h-full min-h-fit font-poppins text-white bg-joinImage pb-20'>
            <div className='hidden md:flex justify-center'> <LazyLoadImage height={"100%"} width={"100%"} effect="blur"  src={SmallWhiteStroke} className="mr-2"/> <p>{"Your journey to a brighter, more prosperous future starts with Mezovest. Choose us and soar high in the energy sector! "}</p></div>
            <div className='font-liquefier mt-8 flex flex-col justify-start md:justify-center'>
                <span className='text-white text-6xl md:text-7xl md:text-[100px] font-normal leading-16 lg:whitespace-nowrap text-left md:text-center'>Join the Winning Team</span>
            </div>
            <p className='mt-8 md:text-center max-w-[1005px] m-auto'>Join the league of successful businesses that have chosen Mezovest. Unlock unparalleled success and growth in the dynamic energy industry with our unmatched expertise and seamless solutions.</p>
            <div className='mt-20 grid grid-cols-2 md:grid-cols-3 gap-14 justify-center max-w-[1005px] m-auto'>
                {info.map((item) => (
                    <div className='mt flex ' key={item.id}>
                         <LazyLoadImage src={item.image} className="w-[40px] md:w-fit"/>
                        <div className='ml-2 md:ml-6 justify-center flex flex-col'>
                            <p className='text-md md:text-xl font-medium'>{item?.heading}</p>
                            <p className='text-xs md:text-sm mt-1'>{item?.subheading}</p>
                        </div>
                    </div>
                ))}

            </div>

        </Styled>
            
       
    )
}

export default JoinMezovestSection

const Styled = styled.div`
    background-image: url("https://res.cloudinary.com/dayomichael/image/upload/v1691125405/Rectangle_2363_wuebma.png");
`