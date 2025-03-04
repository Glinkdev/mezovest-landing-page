import React from "react";
import { styled } from "styled-components";
import AcceptPayemntSection from "./views/AcceptPaymentSection";
import OfflineSection from "./views/OfflineSection";
import OnlineSection from "./views/OnlineSection";
import FaqSection from "./views/FaqSection";
import ProcessSteps from "./views/ProcessSteps";
import CtaSection from "./views/CtaSection";
import CompanyInfo from "../NewHome/views/CompanyInfo";
import Footer from "../../sections/Footer";
import JoinMezovestSection from "./views/JoinMezovestSection";
import CustomerFeedback from "../../pages/Customers/views/CustomerFeedback";
import FeedbackCustomer from "../../pages/Customers/views/FeedBackCustomer";
import ContentPage from "./views/ContentPage";

function Terms() {

    return (
        <div className="w-full !bg-darkGreen">
            <div className="max-w-[1900px] m-auto ">
                <Styled>
                    <AcceptPayemntSection />
                    <ContentPage />
                    <CompanyInfo />
                    <Footer />
                </Styled>
            </div>
        </div>
    )
}

export default Terms
const Styled = styled.div`
    scroll-behavior: smooth;
`
