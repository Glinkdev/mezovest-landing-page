import React from 'react';
import { styled } from 'styled-components';
import PositiveIcon from "../../../assets/icons/positive-price-icon.svg";
import MetlTruck from "../../../assets/images/metl-truck.svg";
import MetlTrailer from "../../../assets/images/metl-trailer.svg";
import GasPlantImage from "../../../assets/images/gas-plant.svg";

function PriceSection() {
   
    return (
        <Styled>
            <div className='py-3 px-2 md:py-7 md:px-6 xl:px-36 !bg-black font-poppins'>
                <div className='flex w-full'>
                    <div className='w-2/5 flex-col justify-center text-center flex border-r'>
                        <p className='text-white text-sm'>GAS PRICE UPDATE:</p>
                        <h2 className='text-green md:text-xl font-semibold flex items-center justify-center mt-2'><span className='mr-2'><img className="h-[15px]"src={PositiveIcon}/></span>850 NGN/KG</h2>
                    </div>

                    <div className='flex justify-center items-center py-2 md:py-4 scrolling-container w-3/5 mt-2 md:mt-0'>
                        <p className='text-center text-white scrolling-text text-sm' data-text="     LPG prices have experienced a significant and consistent decline, reaching as low as 100 naira in this tinubu regine? its not possible">LPG prices have experienced a significant and consistent decline, reaching as low as 100 naira in this tinubu regine? its not possible</p>
                    </div>
                    

                </div>
            </div>
        </Styled>
    )
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