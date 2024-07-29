import React from 'react'
import GreenStroke from "../../../assets/icons/green-stroke.svg"
import OfflineImage from "../../../assets/images/fast-reliable-image.svg";
import MezoBagImage from "../../../assets/images/mez-shopbag-img.png";
import PhoneImage from "../../../assets/images/metl-station-image.svg";
import OfficeImage from "../../../assets/images/energy-power-image.svg";
import LightImage from "../../../assets/images/energy-sector-image.svg";
import ManPhoneImage from "../../../assets/images/aboutus-man-with-phone-image.svg";
import PipeImage from "../../../assets/images/cash-image.svg";
import PassionImage from "../../../assets/images/aboutus-gas-station-image.svg";

import TosinThompson from "../../../assets/images/tosinthompson.png";
import TosinAshafa from "../../../assets/images/tosin-ashafa-image.svg";
import MariamAdebayo from "../../../assets/images/mariam.png";
import Tomisin from "../../../assets/images/Tomisinn.png"

import Remi from "../../../assets/images/remi-image.svg";
import Favour from "../../../assets/images/favour-image.svg";
import Anthony from "../../../assets/images/anthony-image.svg";
import Ayokunmi from "../../../assets/images/ayokunmi-image.svg";
import Sharon from "../../../assets/images/sharon-image.svg";
import Tomiwa from "../../../assets/images/tomiwa-image.svg";


function OfflineSection() {

    const managers = [
        {
            name: "Tosin Thompson",
            image: TosinThompson,
            role: "Founder"
        },
        {
            name: "Basheer Tosin Ashafa",
            image: TosinAshafa,
            role: "Co Founder"
        },
        {
            name: "Oluwatomisin Akinmoladun",
            image: Tomisin,
            role: "Co founder, CIO"
        },
        {
            name: "Mariam Adebayo",
            image: MariamAdebayo,
            role: "Chief Operations Officer"
        },

    ]

    const leaders = [
        {
            name: "Aderemi Adekanmbi",
            image: Remi,
            role: "Technical Manager",
            style: "md:col-span-1",
        },
        {
            name: "Favour Nwaolisa",
            image: Favour,
            role: "Head of Technology",
            style: "md:col-span-1",
        },
        {
            name: "Anthony Nwike",
            image: Anthony,
            role: "Head of Marketing",
            style: "md:col-span-1",
        },
        {
            name: "Ayokunmi Aderinoye",
            image: Ayokunmi,
            role: "Head HR | Legal",
            style: "md:col-span-1",
        },
        {
            name: "Eshonikisomo Sharon",
            image: Sharon,
            role: "Administrator",
            style: "md:col-span-1 md:col-start-2"
        },
        {
            name: "Omotomiwa Osikomiaya",
            image: Tomiwa,
            role: "BDM | HOD Recovery",
            style: "md:col-span-1 md:col-start-3"
        },

    ]

    return (
        <div className='py-7 md:pt-36 pb-20 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins'>
            <div className='flex flex-col md:flex-row relative md:gap-10'>
                <img src={OfficeImage} className="md:absolute md:-top-96 w-screen md:w-fit" />
                <img src={PhoneImage} className="absolute md:-top-80 md:right-0 w-[70%] md:w-fit right-[15%] top-[80%] " />
            </div>
            <div className='flex flex-col lg:flex-row w-full gap-10 mt-72 gap-20'>
                <div className='flex flex-col md:w-1/2 '>
                    <div className='flex'>
                        <img src={GreenStroke} alt="black stroke" />
                        <p className='ml-2 text-xl font-normal'>Our Commitments to</p>
                    </div>
                    <div className='font-liquefier mt-7'>
                        <span className='text-green text-5xl md:text-7xl md:text-[100px] font-normal leading-16'>The Energy </span>
                        <br />
                        <span className='text-black text-5xl md:text-7xl md:text-[100px] font-normal leading-16'>Industry </span>
                        <br />
                    </div>
                    <div className='mt-6 leading-[2rem]'>
                        <p>With years of experience and a team of industry experts, we understand the challenges faced by businesses in the LPG and CNG space. Our unwavering commitment is to empower and support these businesses through a comprehensive range of solutions, including logistics, distribution, and financing.</p>
                    </div>
                </div>
                <div className='flex flex-col md:w-1/2'>
                    <div className='flex'>
                        <img src={GreenStroke} alt="black stroke" />
                        <p className='ml-2 text-xl font-normal'>Driving Efficiency with our</p>
                    </div>
                    <div className='font-liquefier mt-7'>
                        <span className='text-green text-5xl md:text-7xl md:text-[100px] font-normal leading-16'>Logistics </span>
                        <br />
                        <span className='text-black text-5xl md:text-7xl md:text-[100px] font-normal leading-16'>Solution </span>
                        <br />
                    </div>
                    <div className='mt-6 leading-[2rem]'>
                        <p>Mezovest offers a robust logistics infrastructure that ensures the smooth flow of products from manufacturers to vendors. Our strategic partnerships with trusted carriers and our state-of-the-art tracking systems guarantee timely and reliable deliveries, enabling businesses to focus on growth and customer satisfaction.</p>
                    </div>
                </div>

            </div>
            <div className='mt-20 w-full'>
                <div className='w-full grid grid-cols-3 grid-row-2 gap-4'>
                    <div className="row-span-2 col-span-1">
                        <img src={LightImage} className="h-full w-full object-cover" />
                    </div>
                    <div className="col-span-1 row-span-1">
                        <img src={ManPhoneImage} className="h-full w-full object-cover" />
                    </div>
                    <div className="col-span-1 row-span-1">
                        <img src={PipeImage} className="h-full w-full object-cover" />
                    </div>
                    <div className="col-span-2 row-span-1">
                        <img src={PassionImage} className="h-full w-full object-cover" />
                    </div>
                </div>

            </div>
            <div className='flex flex-col lg:flex-row w-full gap-10 mt-20 gap-20'>
                <div className='flex flex-col md:w-1/2 '>
                    <div className='flex'>
                        <img src={GreenStroke} alt="black stroke" />
                        <p className='ml-2 text-xl font-normal'>Reaching every corner with our</p>
                    </div>
                    <div className='font-liquefier mt-7'>
                        <span className='text-green text-5xl md:text-7xl md:text-[100px] font-normal leading-16'>Distribution </span>
                        <br />
                        <span className='text-black text-5xl md:text-7xl md:text-[100px] font-normal leading-16'>Solutions </span>
                        <br />
                    </div>
                    <div className='mt-6 leading-[2rem]'>
                        <p>{"In the energy industry, reaching the right markets is key. Mezovest's micro distribution centers (MDCs) strategically located nationwide enable us to reach even the most remote areas efficiently. Our extensive distribution network ensures that LPG and CNG products are readily available to customers and vendors, promoting accessibility and customer loyalty."}</p>
                    </div>
                </div>
                <div className='flex flex-col md:w-1/2'>
                    <div className='flex'>
                        <img src={GreenStroke} alt="black stroke" />
                        <p className='ml-2 text-xl font-normal'>We fuel growth by providing</p>
                    </div>
                    <div className='font-liquefier mt-7'>
                        <span className='text-green text-5xl md:text-7xl md:text-[100px] font-normal leading-16'>Financing </span>
                        <br />
                        <span className='text-black text-5xl md:text-7xl md:text-[100px] font-normal leading-16'>Solutions </span>
                        <br />
                    </div>
                    <div className='mt-6 leading-[2rem]'>
                        <p>{"We recognise the financial challenges businesses face in the energy sector, and that's why we offer tailor-made financing solutions. Our credit loans provide much-needed working capital to eligible vendors, allowing them to expand their operations and seize growth opportunities. Additionally, our inventory financing is tailored to businesses in the LPG and CNG sector to optimise their stock levels without straining cash flow."}</p>
                    </div>
                </div>

            </div>

            <div className='flex flex-col w-full gap-10 mt-20 gap-20'>
                <div className='flex flex-col justify-center w-full'>
                    <div className='flex justify-center'>
                        <img src={GreenStroke} alt="black stroke" />
                        <p className='ml-2 text-xl font-normal'>Dedicated to the mission</p>
                    </div>
                    <div className='font-liquefier mt-7 text-center'>
                        <span className='text-green text-5xl md:text-7xl md:text-[100px] font-normal leading-16'>Meet The Team </span>
                        <br />
                        <span className='text-black text-5xl md:text-7xl md:text-[100px] font-normal leading-16'>Behind Mezovest</span>
                        <br />
                    </div>
                </div>
                <div className='sm:grid-cols-4 grid grid-cols-1 gap-20 md:gap-4 justify-center'>
                    {managers.map((item, index) => (
                    <div className='items-center sm:items-start flex flex-col gap-10' key={index}>
                        <div className=' w-[220px] h-[220px] md:w-[220px] md:h-[220px]'>
                            <img className='h-full w-full object-cover' src={item?.image}/>
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <div className='flex flex-col justify-center sm:justify-left'>
                                <h4 className='text-md font-bold leading-none text-left whitespace-nowrap'>{item?.name}</h4>
                                <img src={GreenStroke} alt="black stroke" className='w-[80px] h-[20px]' />
                            </div>
                            <p className='text-sm'>{item?.role}</p>
                        </div>

                    </div>))}

                </div>
            </div>
            <div className='flex flex-col max-w-[] w-full gap-10 mt-20 gap-26 justify-center'>
            <hr/>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-10 flex justify-center items-center'>
                {leaders.map((item, index) => (
                    <div key={index} className={`flex flex-col gap-2 items-center ${item?.style} `}>
                        <div className='w-[120px] h-[120px] rounded-full '>
                            <img className='h-full w-full rounded-full' src={item?.image}/>
                        </div>
                        <h4 className='text-base font-bold'>{item?.name}</h4>
                        <p className='text-sm'>{item?.role}</p>

                    </div>
                ))}

            </div>
            </div>

        </div>

    )
}

export default OfflineSection