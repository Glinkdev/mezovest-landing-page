import React from "react";
import AcceptPayemntSection from "./views/AcceptPaymentSection";
import OfflineSection from "./views/OfflineSection";
import OnlineSection from "./views/OnlineSection";
import FaqSection from "./views/FaqSection";
import ProcessSteps from "./views/ProcessSteps";
import CtaSection from "./views/CtaSection";
import CompanyInfo from "../NewHome/views/CompanyInfo";
import Footer from "../../sections/Footer";
import JoinMezovestSection from "./views/JoinMezovestSection";

function AboutUs() {

    return (
        <>
            <AcceptPayemntSection />
            <OfflineSection />
            <JoinMezovestSection />
            {/* <ProcessSteps />
            <FaqSection /> */}
            <CtaSection />
            <CompanyInfo />
            <Footer />
        </>
    )
}

export default AboutUs