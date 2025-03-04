import React, { useCallback, useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import PropTypes from 'prop-types';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
// import Autoplay from 'embla-carousel-autoplay'
import { styled } from 'styled-components';

import MezopayWhiteIcon from "../assets/icons/mezo-pay-simple.svg"
import MetlLogoIcon from "../assets/icons/metl-logo-simple.svg";
import MezoPayIcon from "../assets/icons/mezo-pay-white.svg";
import MezoPayLimitedIcon from "../assets/icons/mezo-pay-limited-icon.svg";
import MezoCoinIcon from "../assets/icons/mezocoin-logo-white.svg";
import GasSenseIcon from "../assets/icons/gassense.svg";
import GaasIcon from "../assets/icons/mezogaas-logo.svg";

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
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, containScroll: true, watchDrag: true }, [WheelGesturesPlugin()])
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
            actionUrl: "mezoenergy.com",
            detail: "METL  uses supply chain infrastructures like logistic, micro distribution centres (MDCs) to supply cooking gas to her vendors."
        },
        {
            icon: MezopayWhiteIcon,
            action: "Try Now",
            actionUrl: "mezopay.mezovest.com",
            detail: "Enjoy fast & secure sending and receiving of money, bills payment, purchase of cooking gas and shop from your favourite stores."
        },
        {
            icon: MezoPayLimitedIcon,
            action: "Coming Soon",
            actionUrl: "",
            detail: "Get an online presence with our one page storefront, receive online & offline payments & share invoices create invoices"
        },
        {
            icon: MezoCoinIcon,
            action: "Coming Soon",
            actionUrl: "",
            detail: "Introducing our commodity exchange to enable buyers and sellers trade various commodities starting with cooking gas (aka LPG)"
        },
        {
            icon: GasSenseIcon,
            action: "Coming Soon",
            actionUrl: "",
            detail: "Track your gas level and consumption rate to know  how much gas you have left in your cylinder. Get notified when you’re low."
        },
        {
            icon: GaasIcon,
            action: "Read More",
            actionUrl: "www.mezovest.com/gaas",
            detail: "Our Gas as a Service (GaaS) solution offers a range of services aimed at providing reliable and efficient access to gas for various uses."

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
                                             <LazyLoadImage height={"100%"} width={"100%"} effect="blur"  src={item.icon} alt="product icon" className='!w-32 m-auto' />
                                        </div>

                                        <p className='text-sm text-center leading-[1.5rem]'>{item?.detail}</p>
                                    </div>

                                    <div className='w-full justify-center flex'>

                                        {item?.actionUrl ? (<a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={item?.actionUrl ? `https://${item?.actionUrl}` : ""}
                                            className={`${item?.actionUrl ? "cursor-poiter" : "cursor-default"} border border-1 border-white px-10 py-4 max-w-fit self-end `} >
                                            <p className='text-base font-normal whitespace-nowrap'>{item?.action}</p>
                                        </a>
                                        ) : (
                                            <button
                                                className={`${item?.actionUrl ? "cursor-poiter" : "cursor-default"} border border-1 border-white px-10 py-4 max-w-fit self-end `}
                                            >
                                                <p className='text-base font-normal whitespace-nowrap'>{item?.action}</p>
                                            </button>
                                        )}

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="sm:hidden embla__dots flex justify-center flex-row mt-10 space-x-1">
                {productDetail.map((_, index) => (

                    <DotButton
                        key={index}
                        selected={index === selectedIndex}
                        onClick={() => scrollTo(index)}
                    />
                ))}
            </div>
            <div className="hidden sm:flex embla__dots flex justify-center flex-row mt-10 space-x-1">
                {productDetail.map((_, index) => {
                    if (index === 0 || index === 2 || index == 3) {
                        return (
                            <DotButton
                                key={index}
                                selected={index === selectedIndex}
                                onClick={() => scrollTo(index)}
                            />
                        )
                    }
                })}
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

    @media only screen and (min-width: 1900px){
        .embla__container{
            justify-content: center
        }
        .embla__dot {
            display: none;
        }
    }
`
