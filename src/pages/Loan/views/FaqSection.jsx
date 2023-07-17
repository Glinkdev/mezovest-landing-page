import React, { useState } from 'react'

function FaqSection() {
    const [showLeftMoreDetails, setShowLeftMoreDetails] = useState([])
    const [showRightMoreDetails, setShowRightMoreDetails] = useState([])
    const leftFaq = [
        {
            key:"pay",
            heading: "How long does credit loan approval take?",
            moreDetails: "Our approval process is quick and efficient, and you can expect a decision within a few business days."
        },
        {
            key: "accept",
            heading: "Can I apply for a credit loan if with a low credit score?",
            moreDetails: "We understand that everyone's financial situation is unique, and we consider various factors when reviewing applications. While credit scores are taken into account, we also assess other aspects of your financial profile to provide opportunities for individuals with diverse credit backgrounds."
        },
        {
            key: "method",
            heading: "Can I repay my credit loan early without any penalties?",
            moreDetails: "Absolutely! We encourage responsible financial management, and there are no penalties for early repayment. You have the flexibility to settle your loan ahead of schedule and save on penalty charges."
        },
    ]

    const rightFaq = [
        {
            key:"speed",
            heading: "What is the maximum loan I can access?",
            moreDetails: "The maximum loan amount depends on several factors, such as your income, creditworthiness, and our assessment of your repayment capability. We strive to provide loan amounts that align with your needs while ensuring responsible lending practices."
        },
        {
            key: "fees",
            heading: "Are there any hidden fees or charges associated with the credit loan?",
            moreDetails: "Transparency is important to us. We provide clear and concise terms, and there are no hidden fees or charges. All applicable fees, interest rates, and repayment terms will be clearly outlined in the loan agreement."
        },
        {
            key: "integration",
            heading: "How can I apply for a credit loan?",
            moreDetails: "Applying for a credit loan is easy! Simply go through the outlined steps or contact our customer support team to initiate the application process. Our dedicated team will guide you through the required documentation and assist you every step of the way."
        },
    ]

    const showLeftText = (e) => {
        if (showLeftMoreDetails.includes(e)) {
            const newList = showLeftMoreDetails.map((item) => {
                if(item !== e){
                    return item
                }
                
            })
            setShowLeftMoreDetails([...newList])
            return
        }
        setShowLeftMoreDetails([...showLeftMoreDetails, e])
    }
    const showRightText = (e) => {
        if (showRightMoreDetails.includes(e)) {
            const newList = showRightMoreDetails.map((item) => {
                if(item !== e){
                    return item
                }
                
            })
            setShowRightMoreDetails(newList)
            return
        }
        setShowRightMoreDetails([...showRightMoreDetails, e])
    }
    return (
        <div className='py-7 md:pt-20 pb-20 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins'>
            <div className='font-liquefier mt-6 pb-5'>
                <span className='text-black text-6xl md:text-7xl md:text-[100px] font-normal leading-16 md:whitespace-nowrap'>FAQ</span>
            </div>
            <div className='flex gap-10 flex-col md:flex-row'>
                <div className='md:w-1/2'>
                    {leftFaq.map((item, index) => {
                        let showLongDetails = showLeftMoreDetails.includes(item.heading)
                        return (
                            <div className={`${index === 0 ? "border-t border-b": ""} py-7 border-b border-black`} key={index}>
                                <div className='flex justify-between text-base'>
                                    <span className="font-bold text-xl w-4/5">{item.heading}</span>
                                    <span className='font-bold text-xl cursor-pointer w-1/5 text-end' onClick={() => showLeftText(item.heading)}>{!showLongDetails ? "+" : "-"}</span>
                                </div>
                                {showLongDetails && (
                                    <p className='mt-4 text-lg'>{item.moreDetails}</p>
                                )}
                            </div>
                        )
                    })}
                </div>
                <div className='md:w-1/2'>
                {rightFaq.map((item, index) => {
                        let showLongDetails = showRightMoreDetails.includes(item.heading)
                        return (
                            <div className={`${index === 0 ? "md:border-t md:border-b": ""} py-7 border-b border-black`} key={index}>
                                <div className='flex justify-between text-base'>
                                    <span className="font-bold text-xl w-4/5">{item.heading}</span>
                                    <span className='font-bold text-xl cursor-pointer w-1/5 text-end' onClick={() => showRightText(item.heading)}>{!showLongDetails ? "+" : "-"}</span>
                                </div>
                                {showLongDetails && (
                                    <p className='mt-4 text-lg'>{item.moreDetails}</p>
                                )}
                            </div>
                        )
                    })}
                </div>


            </div>
        </div>
    )
}

export default FaqSection