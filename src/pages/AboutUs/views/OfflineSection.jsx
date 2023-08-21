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


function OfflineSection() {

    const fitDetails = [
        {
            details: "One - time payments:",
            moreDetails: "Make instant transfers from Mezopay to Mezopay, Mezopay to other wallet, and Mezopay to local banks "
        },
        {
            details: "Bulk transfers:",
            moreDetails: "Send bulk transfers to multiple local banks at a glance"
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

        </div>

    )
}

export default OfflineSection