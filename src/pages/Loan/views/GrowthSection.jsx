import React from 'react';
import SmallGreenStroke from "../../../assets/icons/short-green-stroke.svg";
import MerchantImage from "../../../assets/images/repayment-image.svg";
import GasPlantImage from "../../../assets/images/gas-plant-image.svg";
import RightArrowIcon from "../../../assets/icons/right-arrow-icon.svg"

function GrowthSection() {
    const features = [
        {
            title: "Accept Payments",
            description: "from your customers",
            link: ""
        },
        {
            title: "Send money",
            description: "to over 1 million mezopay users and other banks",
            link: ""
        },
        {
            title: "Create a payment link",
            description: "for your customers to pay you with a single click",
            link: ""
        },
        {
            title: "Mezogateway",
            description: "to reach your online customers",
            link: ""
        },
        {
            title: "Create storefront",
            description: " to reach your online customers",
            link: ""
        }
    ]
    return (
        <div>
            <div className='pt-7 md:pt-20 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins '>
                <div className='font-liquefier mt-6 flex flex-col'>
                    <span className='text-green text-6xl md:text-7xl md:text-[100px] font-normal md:leading-[5rem] lg:whitespace-nowrap'>Get Cash & Inventory Loan </span>
                    <br />
                    <span className='text-black text-6xl md:text-7xl md:text-[100px] font-normal md:leading-[5rem]'>In These Easy Steps</span>
                </div>

                <p className='text-md mt-8 leading-[2rem]'>{"Buy cooking gas on credit with flexible pay-back plan that will keep you in business and in profit. At Mezovest, we understand the unique challenges faced by vendors in the dynamic LPG and CNG sectors. That's why we are proud to offer tailored inventory financing solutions, specially designed to empower and support vendors in these industries."}</p>

            </div>
            <div className='py-7 md:pt-7 pb-6 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins'>
                <div className='flex flex-col-reverse flex-col lg:flex-row w-full mt-20 gap-20'>
                    <div className='md:w-1/2 mt-10 md:mt-0 flex '>
                        <img src={GasPlantImage} alt="mezo pay terminal" />
                    </div>
                    <div className='md:w-1/2'>
                        <div className='flex'>
                            <img src={SmallGreenStroke} />
                            <p className='ml-3'>Be unstoppable </p>
                        </div>
                        <div className='flex flex-col mt-6 md:mt-10'>
                            <h5 className='font-liquefier text-black text-5xl md:text-7xl md:text-[100px] font-normal leading-none md:!leading-[5rem] text-green'>Boost Your </h5>
                            <h5 className='font-liquefier text-black text-5xl md:text-7xl md:text-[100px] font-normal leading-none md:!leading-[5rem] '>Business <br /> Growth</h5>
                        </div>
                        <p className='text-md mt-8 leading-[2rem]'>{"With our inventory financing, you can say goodbye to cash flow constraints and unlock the true potential of your business. Whether you're a cooking gas vendor or operating in the CNG sector, our financing options are flexible and catered to your specific needs. Fuel your business growth and seize new opportunities with confidence."}</p>

                    </div>


                </div>
            </div>
            <div className='py-7 md:pt-6 pb-20 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins'>
                <div className='flex flex-col lg:flex-row w-full mt-20 gap-20'>
                   
                    <div className='md:w-1/2'>
                        <div className='flex'>
                            <img src={SmallGreenStroke} />
                            <p className='ml-3'>Inventory Financing  helps you</p>
                        </div>
                        <div className='flex flex-col mt-6 md:mt-10'>
                            <h5 className='font-liquefier text-black text-5xl md:text-7xl md:text-[100px] font-normal leading-none md:!leading-[5rem] text-green md:whitespace-nowrap'>Stay Ahead of</h5>
                            <h5 className='font-liquefier text-black text-5xl md:text-7xl md:text-[100px] font-normal leading-none md:!leading-[5rem] '>Demand</h5>
                        </div>
                        <p className='text-md mt-8 leading-[2rem]'>{"Inventory financing allows you to keep your shelves stocked and ready to meet the growing demands of your customers. Never miss a sale or face supply shortages again. With our support, you can maintain a robust inventory, ensuring your customers' needs are always met."}</p>

                    </div>
                    <div className='md:w-1/2 mt-10 md:mt-0 flex '>
                        <img src={GasPlantImage} alt="mezo pay terminal" />
                    </div>


                </div>
            </div>
        </div>

    )
}

export default GrowthSection