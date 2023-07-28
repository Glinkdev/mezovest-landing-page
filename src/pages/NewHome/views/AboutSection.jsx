import React from 'react';
import GreenStroke from "../../../assets/icons/green-stroke.svg";
import MetlTruck from "../../../assets/images/metl-truck.svg";
import MetlTrailer from "../../../assets/images/metl-trailer.svg";
import GasPlantImage from "../../../assets/images/gas-plant.svg";

function AboutSection() {
    const features = [
        {
            id: 1,
            name: "Modern & durable trucks",
            image: MetlTruck,
            more: "for transporting composite cylinders"
        },
        {
            id: 2,
            name: "Strategic Micro Distribution Centres",
            image: GasPlantImage,
            more: "for fast and reliable deliveries"
        },
        {
            id: 3,
            name: "Gas reservoirs for storing gas",
            image: MetlTrailer,
            more: "making it readily accessible"
        }
    ]
    return (
        <div className='py-7 md:pt-36 md:pb-38 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins'>
            <div className='flex flex-col w-full'>
                <div className='flex md:justify-center'>
                    <img src={GreenStroke} alt="green stroke" />
                    <p className='ml-6 font-normal md:text-xl text-black'>We want you to succeed</p>
                </div>
                <div className='font-liquefier mt-6 flex md:justify-center'>
                    <span className='text-black text-6xl md:text-7xl md:text-[100px] font-normal leading-16 md:whitespace-nowrap md:text-center'>Who we are</span>
                </div>
                <p className='md:text-center leading-[2rem]'>
                    At Mezovest, we are on a mission to revolutionize the commerce landscape, and our focus is squarely on the <span className='text-green font-bold'>dynamic energy industry, specifically LPG aka cooking gas and CNG </span>. As a leading commerce solution company, we are dedicated to providing innovative, efficient, and seamless solutions that cater to the unique needs of businesses operating in the energy sector.
                </p>
                <div className='flex gap-6 overflow-x-scroll mt-10'>
                    {features.map((item) => (
                        <div key={item.index} className='flex flex-col gap-2 min-w-[250px] md:min-w-[363px] leading-[2rem]'>
                            <img src={item.image} className="h-[265px] w-full"/>
                            <p ><span className='font-bold'>{item.name}{" "}</span>{item.more}</p>

                        </div>
                    ))}

                </div>
                <div className='md:flex gap-4 w-full justify-center mt-10'>
                    <a
                        // target="_blank"
                        // rel="noopener noreferrer"
                        // href="mailto:sales@mezovest.com"
                        className=' w-full md:w-fit flex p-4 md:px-8 justify-center items-center  bg-green mt-6 cursor-pointer'>
                        <p className='whitespace-nowrap'>Learn more</p>
                    </a>
                    <a
                        href="#products"
                        className='w-full  md:w-fit flex p-4 md:px-8 justify-center items-center text-black mt-6 cursor-pointer border-2 border-black'>
                        <p className='whitespace-nowrap '>Explore Solutions</p>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default AboutSection