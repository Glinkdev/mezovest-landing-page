import React from "react";
import { styled } from "styled-components";
import Navigation from "./views/Navigation";
import HeroSection from "./views/HeroSection";
import AboutUs from "./views/Aboutus";
import Services from "./views/Services";
import Contactus from "./views/Contactus"
Services
function Gaas() {

    return (
        <div className="w-full !bg-[#000000] min-h-screen">
            <div className="max-w-[1900px] m-auto ">
                <Styled>
                    <Navigation />
                    <HeroSection />
                    <AboutUs />
                    <Services />
                    <Contactus />
                </Styled>
            </div>
        </div>
    )
}

export default Gaas
const Styled = styled.div`
    scroll-behavior: smooth;
`
