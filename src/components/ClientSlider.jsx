import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import PrevIcon from "../assets/icons/prev-icon.svg";
import NextIcon from "../assets/icons/next-icon.svg";
import BurgerKingImage from "../assets/images/burger-king-logo.svg";
import KfcImage from "../assets/images/kfc-image.svg";
import CroppedAsset from "../assets/images/cropped-asset.svg";
import JaysDinner from "../assets/images/jays-dinner.svg";
import PearlLogo from "../assets/images/pearl-logo-icon.svg";
import Autoplay from 'embla-carousel-autoplay'

function ClientSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, containScroll: true,}, [Autoplay()])

    const clientImages = [BurgerKingImage, KfcImage, CroppedAsset, JaysDinner, PearlLogo]

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container flex">
                    {clientImages.map((item, index) => (
                        <div className="embla__slide flex justify-center align-center" key={index}>
                            <img className="h-20" src={item} />
                        </div>
                    ))}
                </div>
            </div>
            <button className="embla__prev flex items-center h-20" onClick={scrollPrev}>
                <img src={PrevIcon} />
            </button>
            <button className="embla__next flex items-center h-20" onClick={scrollNext}>
                <img src={NextIcon} />
            </button>
        </div>
    )
}

export default ClientSlider