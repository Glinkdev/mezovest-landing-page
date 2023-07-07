import React from "react";
import CustomerHeaderSection from "./views/CustomerHeaderSection";
import ClientTestimonial from "./views/ClientTestimonial";
import CustomerFeedback from "./views/CustomerFeedback";
import CtaSection from "./views/CtaSection";
import CommentSection from "./views/CommentSection";
import CompanyInfo from "../../pages/NewHome/views/CompanyInfo";
import Footer from "../../sections/Footer";

function Customers() {

    return (
        <>
            <CustomerHeaderSection />
            <ClientTestimonial />
            <CustomerFeedback />
            <CommentSection />
            <CtaSection />
            <CompanyInfo />
            <Footer />
        </>
    )
}

export default Customers
