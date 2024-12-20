import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import GreenStroke from "../../../assets/icons/green-stroke.svg"
import MezoCashImage from "../../../assets/images/mez-fit-1.svg";
import MezoPhoneImage from "../../../assets/images/mez-fit-2.svg";
import BikeManImage from "../../../assets/images/mez-fit-3.svg";


function FitSection() {
    const [showLongText, setShowLongText] = useState(["Finance","Infrastructure","Technology" ])

    const fitDetails = [
        {
            name: "Finance",
            shortDetails: "Mezovest offers cash loan and inventory financing to eligible vendors. We offer cash loans by ...",
            longDetails: "Mezovest offers cash loan and inventory financing to eligible vendors. We offer cash loans by monitoring their sales and use their volume of sales to determine how much we can lend to them."
        },
        {
            name: "Infrastructure",
            shortDetails: "With Mezovest’s unique commerce solution model, F.I.T, mezovest founded a sister company, ... ",
            longDetails: "With Mezovest’s unique commerce solution model, F.I.T, mezovest founded a sister company, Mezo energy trading limited (METL) which uses supply chain infrastructures like logistic, micro distribution centres (MDCs) to supply cooking gas to her vendors since mezovest currently services the LPG commerce sector. "
        },
        {
            name: "Technology",
            shortDetails: "Using technology as leverage, we provide online marketplaces and payment solutions which ... ",
            longDetails: "Using technology as leverage, we provide online marketplaces and payment solutions which enable businesses to reach customers nationwide, expanding market opportunities."
        },

    ]

    const showText = (e) => {
        if(showLongText.includes(e)){
            const newList = showLongText.filter((item)=> {return item !== e})
            setShowLongText(newList)
            return
        }
        setShowLongText([...showLongText, e])
    }

    return (
        <div className='py-7 md:pt-36 md:pb-48 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins'>
            <div className='flex flex-col md:flex-row w-full'>
                <div className='flex flex-col md:w-1/2'>
                    <div className='flex'>
                         <LazyLoadImage src={GreenStroke} alt="black stroke" />
                        <p className='ml-2 text-xl font-normal'>How do we deliver our promise?</p>
                    </div>
                    <div className='font-liquefier mt-7'>
                        <span className='text-green text-5xl md:text-7xl md:text-[100px] font-normal md:!leading-[5rem]'>Finance</span>
                        <br />
                        <span className='text-green text-5xl md:text-7xl md:text-[100px] font-normal md:!leading-[5rem]'>Infrastructure</span>
                        <br />
                        <span className='text-black text-5xl md:text-7xl md:text-[100px] font-normal md:!leading-[5rem]'>Technology</span>
                        <span className='text-2xl md:text-4xl'>(F.I.T)</span>
                    </div>
                    <div className='mt-10'>
                        <ul className='text-black list-disc list-inside text-xs xl:text-base' role="list">
                            {fitDetails.map((item, index) => {
                                let showLongDetails = showLongText.includes(item.name)
                                return (
                                    <li className='font-normal text-xs xl:text-base text-black !leading-7 mb-4 leading-[2rem]' key={index}>
                                        <span className='font-bold mr-2'>{item.name}:</span> 
                                        <span className='text-sm'>{showLongDetails ? item.shortDetails : item.longDetails}</span> 
                                        {showLongDetails && (<span className='text-xs text-green whitespace-nowrap ml-2 cursor-pointer' onClick={() => showText(item.name)}>Read more</span>)}
                                        {!showLongDetails && (<span className='text-xs text-green whitespace-nowrap ml-2 cursor-pointer' onClick={() => showText(item.name)}>Show less</span>)}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="hidden md:flex w-1/2 justify-end">
                <div className='md:w-[700px] mt-10 md:mt-0 md:flex justify-end relative'>
                    <div className='h-[417px] w-[241px] absolute top-10 right-10 z-20'>
                         <LazyLoadImage height={"100%"} width={"100%"} effect="blur"  src={BikeManImage} alt="Mezo Energy Image" />
                    </div>
                    <div className='h-[417px] w-[241px] absolute top-0 left-10 z-0'>
                         <LazyLoadImage height={"100%"} width={"100%"} effect="blur"  src={MezoCashImage} alt="Mezo Energy Image" />
                    </div>
                    <div className='h-[417px] w-[241px] absolute -bottom-52  left-1/3 z-10'>
                         <LazyLoadImage height={"100%"} width={"100%"} effect="blur"  src={MezoPhoneImage} alt="Mezo Energy Image"  />
                    </div>
                   
                </div>
                </div>
               

            </div>

        </div>

    )
}

export default FitSection