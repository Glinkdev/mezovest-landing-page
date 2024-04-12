import React from "react";
import { Helmet } from 'react-helmet';
import { styled } from "styled-components";
import GrowSection from "./views/GrowSection";
import FitSection from "./views/FitSection";
import MetlSection from "./views/MetlSection";
import CtaSection from "./views/CtaSection";
import ThirdSection from "../../sections/ThirdSection";
import YoutubeSection from "./views/YoutubeSection";
import CompanyInfo from "./views/CompanyInfo";
import DetailsPage from "./views/DetailsPage";
import AboutSection from "./views/AboutSection";

import Footer from "./views/Footer";
import PriceSection from "./views/PriceSection";

function NewHome() {

    return (
        <div className="w-full !bg-darkGreen">
            <div className="max-w-[1900px] m-auto ">
                <Styled>
                    {/* <Helmet>
                <title>Biggest LPG Distribution</title>
                <meta name="description" content="Welcome to the biggest LPG distribution network. We provide reliable LPG distribution services to meet your needs." />
            </Helmet> */}
                    <GrowSection />
                    <PriceSection />
                    <AboutSection />
                    <FitSection />
                    <ThirdSection />
                    <MetlSection />
                    <YoutubeSection />
                    <DetailsPage />
                    <CtaSection />
                    <CompanyInfo />
                    <Footer />

                </Styled>
            </div>
        </div>
    )
}

export default NewHome

const Styled = styled.div`
    scroll-behavior: smooth;
    position: relative;
`
