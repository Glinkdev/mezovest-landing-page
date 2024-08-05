import React, { useState } from 'react';
import { styled } from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import PositiveIcon from "../../../assets/icons/positive-price-icon.svg";
import NegativeIcon from "../../../assets/icons/negative-price-icon.svg";
import MetlTruck from "../../../assets/images/metl-truck.svg";
import MetlTrailer from "../../../assets/images/metl-trailer.svg";
import GasPlantImage from "../../../assets/images/gas-plant.svg";
import { useEffect } from 'react';
import { getCall } from '../../../utils/api/apiCalls';
import { formatMoney } from '../../../utils/hooks';

function PriceSection() {
    const [priceData, setPriceData] = useState({
        "id": 3,
        "price": "15762500",
        "progression": "increment",
        "admin_id": 28,
        "created_at": "2024-01-16T12:23:36.000000Z",
        "updated_at": "2024-01-16T12:23:36.000000Z",
        "comment": "However, price is projected to rise this week to about N16,156,716.36 plus/minus 100,000"
    })
    const getDetails = async () => {
        const { data } = await getCall("https://control.mezovest.com/api/pricing/current")
        if(data){
        console.log(data)
        setPriceData(data)
        }
        return
    }

    useEffect(() => {
        getDetails()
    }, [])

    if (priceData?.progression) {
        return (
            <Styled>
                <div className='py-3 px-2 md:py-6 xl:px-36 !bg-black font-poppins'>
                    <div className='flex m-auto w-full'>
                        <div className='w-2/5 flex-col justify-center text-left flex border-r pr-2 md:ml-4'>
                            <p className='text-white text-[12px] md:text-sm text-left md:ml-3'>GAS PRICE UPDATE:</p>
                            <h2 className={`${priceData?.progression === "increment" ? "text-green" : "text-[#FF8E8E]"}  text-[12px] md:text-2xl font-semibold flex items-center justify-start mt-2 whitespace-nowrap`}><span className='mr-2'> <LazyLoadImage height={"100%"} width={"100%"} effect="blur"  className="h-[15px]" src={ priceData?.progression === "increment" ? PositiveIcon : NegativeIcon} /></span>{`N ${formatMoney(parseFloat(priceData?.price))} / 20MT`}</h2>
                        </div>

                        <div className='flex justify-center items-center px-2 py-2 md:py-4 scrolling-container w-3/5 mt-2 md:mt-0'>
                            <p className='text-center text-white scrolling-text text-[12px] md:text-sm'>{priceData?.comment}</p>
                        </div>


                    </div>
                </div>
            </Styled>
        )
    }
}

export default PriceSection

const Styled = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 100000000000000;

    .scrolling-container {
      
        overflow: hidden;
        white-space: nowrap;
        position: relative;
    }

    .scrolling-text {
        animation: scrollText 30s linear infinite; /* Adjust the duration as needed */
        display: inline-block;
        white-space: nowrap;
        position: absolute; /* Set the position to absolute */
        left: 0;/* Ensure enough space for the text to scroll */
    }
    .scrolling-text::before {
        /* Duplicate the text to eliminate the gap */
        content: attr(data-text);
        position: absolute;
        white-space: nowrap;
        left: 100%;
    }

    @keyframes scrollText {
        0% {
            transform: translateX(100%);
        }

        100% {
            transform: translateX(-100%);
        }
    }

`