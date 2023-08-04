import React from "react";
import { styled } from "styled-components";
import GrowSection from "./views/GrowSection";
import FitSection from "./views/FitSection";
import MetlSection from "./views/MetlSection";
import CtaSection from "./views/CtaSection";
import ThirdSection from "../../sections/ThirdSection";
import FourthSection from "../../sections/FourthSection";
import CompanyInfo from "./views/CompanyInfo";
import DetailsPage from "./views/DetailsPage";
import AboutSection from "./views/AboutSection";

import Footer from "./views/Footer";

function NewHome() {

    return (
        <Styled>
            <GrowSection />
            <AboutSection />
            <FitSection />
            <ThirdSection />
            <MetlSection />
            <DetailsPage />
            <CtaSection />
            <CompanyInfo />
            <Footer />
        </Styled>
    )
}

export default NewHome

const Styled =  styled.div`
    scroll-behavior: smooth;
`
