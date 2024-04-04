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
        <div className="w-full !bg-darkGreen">
            <div className="max-w-[1900px] m-auto ">
                <CustomerHeaderSection />
                <ClientTestimonial />
                <CustomerFeedback />
                {/* <CommentSection /> */}
                <CtaSection />
                <CompanyInfo />
                <Footer />
            </div>
        </div>
    )
}

export default Customers
