import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import { styled } from "styled-components";
import GrowSection from "./views/GrowSection";
import CtaSection from "../../sections/CtaSection";
import CompanyInfo from "./views/CompanyInfo";


import Footer from "./views/Footer";


function Careers() {
    const [selectedCareer, setSelectedCareer] = useState()

    const career_list = [
        {
            title: "Business Development Executive",
            description: "Square has solutions for businesses of all sizes. Our connected tools are built to scale with future-focused, connected tools. Enhanced, customer-friendly experiences help build deeper data and better customer relationships. And our open platform means you can connect to prebuilt integrations or build out your own with our APIs..",
            requirements: [
                "Square has solutions for businesses of all sizes. Our connected tools are built to scale with future-focused, connected tools",
                "Square has solutions for businesses of all sizes. Our connected tools are built to scale with future-focused, connected tools",
                "Square has solutions for businesses of all sizes. Our connected tools are built to scale with future-focused, connected tools"
            ]
        },
        {
            title: "Human Resource Manager",
            description: "Square has solutions for businesses of all sizes. Our connected tools are built to scale with future-focused, connected tools. Enhanced, customer-friendly experiences help build deeper data and better customer relationships. And our open platform means you can connect to prebuilt integrations or build out your own with our APIs..",
            requirements: [
                "Square has solutions for businesses of all sizes. Our connected tools are built to scale with future-focused, connected tools",
                "Square has solutions for businesses of all sizes. Our connected tools are built to scale with future-focused, connected tools",
                "Square has solutions for businesses of all sizes. Our connected tools are built to scale with future-focused, connected tools"
            ]
        },
        {
            title: "Digital Marketing Manager",
            description: "Square has solutions for businesses of all sizes. Our connected tools are built to scale with future-focused, connected tools. Enhanced, customer-friendly experiences help build deeper data and better customer relationships. And our open platform means you can connect to prebuilt integrations or build out your own with our APIs..",
            requirements: [
                "Square has solutions for businesses of all sizes. Our connected tools are built to scale with future-focused, connected tools",
                "Square has solutions for businesses of all sizes. Our connected tools are built to scale with future-focused, connected tools",
                "Square has solutions for businesses of all sizes. Our connected tools are built to scale with future-focused, connected tools"
            ]
        }
    ]

    return (
        <div className="w-full ">
            <div className="max-w-[1900px] m-auto ">
                <Styled>

                    <GrowSection />

                    <div className="max-w-[1400px] m-auto px-6 xl:px-36">
                        <h3 className="text-center pt-10 mb-5 text-[#203035] text-[30px]">Open Positions</h3>

                        <ul className="border-b-[0.5px] border-[#5B5B5B]">
                            {career_list.map((item, idx) => {
                                return <li key={idx} className="border-t-[0.5px] border-[#5B5B5B] py-6" onClick={() => {
                                    if (selectedCareer == idx) {
                                        setSelectedCareer(null)
                                    } else {
                                        setSelectedCareer(idx)
                                    }
                                }}>
                                    <div className="flex justify-between items-center ">
                                        <h2 className="text-[16px] text-[#1D1D1D] font-[600] ">{item.title}</h2>

                                        <span className="text-[20px] font-thin ">{selectedCareer == idx ? "-" : "+"}</span>
                                    </div>
                                    {selectedCareer == idx && <>
                                        <p className="text=[#000000] text-[14px] mt-2 mb-2 ">Square has solutions for businesses of all sizes. Our connected tools are built to scale with future-focused, connected tools. Enhanced, customer-friendly experiences help build deeper data and better customer relationships. And our open platform means you can connect to prebuilt integrations or build out your own with our APIs..</p>
                                        
                                        <h5 className="text-[#02CB63] text-[15px] font-medium mb-2">Requirements</h5>

                                        <ul className="list-disc pl-8 ">
                                            <li className="text-[14px] text-[#000000] mb-2 max-w-[640px] leading-[19px] ">Square has solutions for businesses of all sizes. Our connected tools are built to scale with future-focused, connected tools</li>
                                            <li className="text-[14px] text-[#000000] mb-2 max-w-[640px] leading-[19px] ">Square has solutions for businesses of all sizes. Our connected tools are built to scale with future-focused, connected tools</li>
                                            <li className="text-[14px] text-[#000000] mb-2 max-w-[640px] leading-[19px] ">Square has solutions for businesses of all sizes. Our connected tools are built to scale with future-focused, connected tools</li>
                                        </ul>

                                        <a className="block border-[1px] border-[#203035] py-3 px-4 w-fit mt-10 text-[14px] cursor-pointer " href="#">Apply for this position</a>
                                    </>}
                                </li>
                            })}
                        </ul>
                    </div>
                    <CtaSection />
                    <CompanyInfo />
                    <Footer />

                </Styled>
            </div>
        </div>
    )
}

export default Careers

const Styled = styled.div`
    scroll-behavior: smooth;
    position: relative;
`
