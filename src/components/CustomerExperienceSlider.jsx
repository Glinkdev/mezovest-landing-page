import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
import { styled } from 'styled-components';

import MezopayWhiteIcon from "../assets/icons/mezo-pay-simple.svg"
import MetlLogoIcon from "../assets/icons/metl-logo-simple.svg";
import MezoPayIcon from "../assets/icons/mezo-pay-white.svg";
import MezoPayLimitedIcon from "../assets/icons/mezo-pay-limited-icon.svg";
import MezoCoinIcon from "../assets/icons/mezocoin-logo-white.svg";

const DotButton = (props) => {
    const { selected, onClick } = props
  
    return (
      <button
        className={'embla__dot'.concat(selected ? ' embla__dot--selected' : '')}
        type="button"
        onClick={onClick}
      />
    )
}

DotButton.propTypes = {
    selected: PropTypes?.string?.isRequired, 
    onClick: PropTypes?.func?.isRequired,
};

function CustomerExperienceSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, containScroll: false,}, [Autoplay()])
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState([])

    
  
    const scrollPrev = useCallback(
      () => emblaApi && emblaApi.scrollPrev(),
      [emblaApi],
    )
    const scrollNext = useCallback(
      () => emblaApi && emblaApi.scrollNext(),
      [emblaApi],
    )
    const scrollTo = useCallback(
      (index) => emblaApi && emblaApi.scrollTo(index),
      [emblaApi],
    )
  
    const onInit = useCallback((emblaApi) => {
      setScrollSnaps(emblaApi.scrollSnapList())
    }, [])
  
    const onSelect = useCallback((emblaApi) => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
      setPrevBtnEnabled(emblaApi.canScrollPrev())
      setNextBtnEnabled(emblaApi.canScrollNext())
    }, [])
  
    useEffect(() => {
      if (!emblaApi) return
  
      onInit(emblaApi)
      onSelect(emblaApi)
      emblaApi.on('reInit', onInit)
      emblaApi.on('reInit', onSelect)
      emblaApi.on('select', onSelect)
    }, [emblaApi, onInit, onSelect])

    const productDetail = [
        {
            icon: MetlLogoIcon,
            action: "Learn More",
            detail: "METL  uses supply chain infrastructures like logistic, micro distribution centres (MDCs) to supply cooking gas to her vendors."
        },
        {
            icon: MezopayWhiteIcon,
            action: "Try Now",
            detail: "Enjoy fast & secure sending and receiving of money, bills payment, purchase of cooking gas and shop from your favourite stores."
        },
        {
            icon: MezoPayLimitedIcon,
            action: "Coming Soon",
            detail: "Get an online presence with our one page storefront, receive online & offline payments & share invoices create invoices"
        },
        {
            icon: MezoCoinIcon,
            action: "Coming Soon",
            detail: "Introducing our commodity exchange to enable buyers and sellers trade various commodities starting with cooking gas (aka LPG)"
        }
    ]
    return (
        <SliderStyles>
            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className='embla__container flex'>
                        {productDetail.map((item, index) => (
                            <div className="module-border-wrap col-span-1 embla__slide" key={index}>

                                <div className="module flex flex-col p-10 justify-between">
                                    <div className='flex flex-col justify-between'>
                                        <div className='flex justify-center h-24'>
                                            <img src={item.icon} alt="product icon" className='!w-32 m-auto' />
                                        </div>

                                        <p className='text-sm text-center '>{item?.detail}</p>
                                    </div>

                                    <div className='w-full justify-center flex'>

                                        <button className='border border-1 border-white px-10 py-4 max-w-fit self-end'>
                                            <p className='text-base font-normal whitespace-nowrap'>{item?.action}</p>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="embla__dots flex justify-center flex-row mt-10 space-x-1">
                {productDetail.map((_, index) => (
                <DotButton
                    key={index}
                    selected={index === selectedIndex}
                    onClick={() => scrollTo(index)}
                />
                ))}
      </div>


        </SliderStyles>
    )
}

export default CustomerExperienceSlider

const SliderStyles = styled.div`
    margin-top: 41px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .embla {
        min-height: 420px;
    }

    .module-border-wrap {
        min-width: 310px !important;
        height: 413px;
        padding: 1rem;
        position: relative;
        background: linear-gradient(to bottom, #02CB63, #E2FFF0);
        padding: 3px;
    }

    .module {
        background: #222;
        color: white;
        height: 100%;
    }
    .embla__dot {
        width: 10px;
        height: 10px;
        background: #E3E3E3;
        border-radius: 100%;
    }
    .embla__dot--selected {
        background: #02CB63 !important;
    }

`