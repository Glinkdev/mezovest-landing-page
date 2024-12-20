import React, { useCallback, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import useEmblaCarousel from 'embla-carousel-react';
import PrevIcon from "../assets/icons/prev-icon.svg";
import NextIcon from "../assets/icons/next-icon.svg";
import BurgerKingImage from "../assets/images/burger-king-logo.svg";
import KfcImage from "../assets/images/kfc-image.svg";
import CroppedAsset from "../assets/images/cropped-asset.svg";
import JaysDinner from "../assets/images/jays-dinner.svg";
import PearlLogo from "../assets/images/pearl-logo-icon.svg";
import TasteeLogo from "../assets/icons/tastee-logo.svg";
import CactusLogo from "../assets/icons/cactus-logo-black.svg";
import Autoplay from 'embla-carousel-autoplay'

function ClientSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, containScroll: true, }, [Autoplay()]);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)


    const clientImages = [BurgerKingImage, CroppedAsset, JaysDinner, PearlLogo, TasteeLogo, CactusLogo]

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const onSelect = useCallback((emblaApi) => {
        setPrevBtnEnabled(emblaApi.canScrollPrev())
        setNextBtnEnabled(emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect)
        emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])

    return (
        <Styles>
            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container flex">
                        {clientImages.map((item, index) => (
                            <div className="embla__slide flex justify-center align-center" key={index}>
                                 <LazyLoadImage height={"100%"} width={"100%"} effect="blur"  className="h-20" src={item} />
                            </div>
                        ))}
                    </div>
                </div>
                {prevBtnEnabled && (
                    <button className="embla__prev flex items-center h-20" onClick={scrollPrev}>
                         <LazyLoadImage height={"100%"} width={"100%"} effect="blur"  src={PrevIcon} />
                    </button>
                )}
                {nextBtnEnabled && (
                    <button className="embla__next flex items-center h-20" onClick={scrollNext}>
                         <LazyLoadImage height={"100%"} width={"100%"} effect="blur"  src={NextIcon} />
                    </button>
                )}
            </div>
        </Styles>
    )
}

export default ClientSlider

const Styles = styled.div`
    @media only screen and (min-width: 1400px){
        .embla__container{
            justify-content: center
        }
    }
`