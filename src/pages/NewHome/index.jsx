import React from "react";
import GrowSection from "./views/GrowSection";
import FitSection from "./views/FitSection";
import MetlSection from "./views/MetlSection";
import CtaSection from "./views/CtaSection";
import ThirdSection from "../../sections/ThirdSection";
import FourthSection from "../../sections/FourthSection";
import CompanyInfo from "./views/CompanyInfo";

import Footer from "./views/Footer";

function NewHome() {

    return (
        <>
            <GrowSection />
            <FitSection />
            <ThirdSection />
            <MetlSection />
            <FourthSection />
            <CtaSection />
            <CompanyInfo />
            <Footer />
        </>
    )
}

export default NewHome
