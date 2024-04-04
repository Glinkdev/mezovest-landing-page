import React from "react";
import AcceptPayemntSection from "./views/AcceptPaymentSection";
import OfflineSection from "./views/OfflineSection";
import OnlineSection from "./views/OnlineSection";
import FaqSection from "./views/FaqSection";
import ProcessSteps from "./views/ProcessSteps";
import CtaSection from "./views/CtaSection";
import CompanyInfo from "../NewHome/views/CompanyInfo";
import Footer from "../../sections/Footer";

function Collaboration() {

    return (
        <div className="w-full !bg-darkGreen">
            <div className="max-w-[1900px] m-auto ">
                <AcceptPayemntSection />
                <OfflineSection />
                <OnlineSection />
                {/* <ProcessSteps /> */}
                <FaqSection />
                <CtaSection />
                <CompanyInfo />
                <Footer />
            </div>
        </div>
    )
}

export default Collaboration
