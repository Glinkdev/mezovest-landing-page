import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import MerchantImage from "../../../assets/images/gaas-infrastructure-image.svg";
import EnergySolImage from "../../../assets/images/gaas-energy-sol-image.svg";
import RenewableImage from "../../../assets/images/gaas-renewable-image.svg";
import CsImage from "../../../assets/images/gaas-cs-image.svg";
import ServicesImage from "../../../assets/images/gaas-services-image.svg";


function Services() {
    const sections = [
        {
            image: MerchantImage,
            firstHeader: "Infrastructure",
            secondHeader: "Development",
            list: [
                {
                    key: "Installation of CNG Systems:",
                    text: "Designing and installing CNG storage and piping systems for residential complexes, businesses, and industrial plants."
                },
                {
                    key: "Maintenance and Upgrades:",
                    text: "Offering ongoing maintenance services to ensure safety and efficiency of CNG systems, as well as upgrading existing infrastructure to meet modern standards and demand."
                }
            ]
        },
        {
            image: EnergySolImage,
            firstHeader: "Energy Solution",
            secondHeader: "for Businesses",
            list: [
                {
                    key: "Industrial CNG Supply:",
                    text: "Supplying large volumes of CNG for industrial applications, such as manufacturing processes, power generation, and agricultural use."
                },
                {
                    key: "Customized Energy Solutions:",
                    text: "Developing tailored CNG-based energy solutions to meet the specific needs of various industries, enhancing energy efficiency and reducing costs."
                }
            ]
        },
        {
            image: RenewableImage,
            firstHeader: "Renewable",
            secondHeader: "Energy Integration",
            list: [
                {
                    key: "Hybrid Systems:",
                    text: "Integrating CNG with other renewable energy sources like solar to create hybrid energy systems that ensure reliability and sustainability."
                }
            ]
        },
        {
            image: CsImage,
            firstHeader: "Customer Service",
            secondHeader: "and Education",
            list: [
                {
                    key: "Customer Support and Training:",
                    text: "Offering robust customer support to assist with any issues related to CNG usage, along with training programs to educate users on safe and efficient gas handling."
                },
                {
                    key: "Awareness Campaigns:",
                    text: "Conducting awareness campaigns to promote the benefits of CNG over traditional biomass fuels and other energy sources, emphasizing health, environmental, and economic advantages."
                }
            ]
        }
    ]

    return (
        <div className='flex flex-col  w-full py-10 md:py-20' id="services">
            <div className=' justify-center flex'>
                <LazyLoadImage src={ServicesImage} />

            </div>

            <div className='py-7 md:pt-10 pb-10 px-6 xl:px-36 h-full min-h-fit font-poppins'>
                <div className='grid grid-cols-1 md:grid-cols-2 mt-20 gap-10 items-center'>
                    {sections.map((item, index) => (
                        <div className='flex flex-col md:h-[900px]' key={index}>
                            <LazyLoadImage src={item.image} />
                            <div className='flex flex-col mt-6 md:mt-10'>
                                <h5 className='font-liquefier text-5xl md:text-7xl font-normal leading-none md:!leading-[5rem] text-green'>{item.firstHeader}</h5>
                                <h5 className='font-liquefier text-white text-5xl md:text-7xl font-normal leading-none md:!leading-[5rem] '>{item.secondHeader}</h5>
                            </div>
                            {item?.list.map((list, index) => (
                                <div className='mb-2' key={index}>
                                    <p className='text-md mt-8 leading-[2rem] text-white '><span className='font-bold mr-2'>{list?.key}</span>{list?.text}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                   
                </div>
            </div>

        </div>
    );
}

export default Services;
