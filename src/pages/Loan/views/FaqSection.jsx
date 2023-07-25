import React, { useState } from 'react'

function FaqSection() {
    const [showLeftMoreDetails, setShowLeftMoreDetails] = useState([])
    const [showRightMoreDetails, setShowRightMoreDetails] = useState([])
    const leftFaq = [
        {
            key:"pay",
            heading: "How reliable is Mezovest's credit loan facility?",
            moreDetails: "Mezovest takes pride in its reputation for reliability. Our credit loan facility is designed to provide transparent and trustworthy financial assistance to businesses and individuals."
        },
        {
            key: "accept",
            heading: "What is the eligibility criteria for obtaining a credit loan from Mezovest?",
            moreDetails: "We understand that each customer's situation is unique. Our eligibility criteria are flexible, and we consider various factors beyond traditional credit scores to ensure a fair evaluation."
        },
        {
            key: "method",
            heading: "How quickly can I receive the funds once my credit loan is approved?",
            moreDetails: "We strive for efficient processing. Upon approval, funds are typically disbursed within a short timeframe, allowing you to access the financial support you need promptly."
        },
        {
            key: "acept",
            heading: "Can I choose the repayment terms that suit my financial situation?",
            moreDetails: "Absolutely! Mezovest offers flexible repayment options, allowing you to select terms that align with your financial capabilities and ensure a manageable repayment plan."
        },
        {
            key: "methd",
            heading: "Is collateral required for obtaining a credit loan from Mezovest?",
            moreDetails: "We offer both secured and unsecured credit loan options. While collateral may be required for certain loan products, we have solutions available for those without collateral as well."
        },
    ]

    const rightFaq = [
        {
            key:"speed",
            heading: "What is the interest rate for Mezovest's credit loans?",
            moreDetails: "Our interest rates are competitive and based on various factors, including loan amount, repayment terms, and individual circumstances. We strive to provide fair and transparent rates."
        },
        {
            key: "fees",
            heading: "How can Mezovest help me improve my credit score?",
            moreDetails: "Mezovest understands the importance of credit health. By responsibly managing your credit loan and making timely repayments, you can positively impact your credit score over time."
        },
        {
            key: "integration",
            heading: "Can I apply for a credit loan even with a less-than-perfect credit history?",
            moreDetails: "Mezovest considers the overall financial profile of applicants. While credit history is important, we take a holistic approach and evaluate various factors to provide opportunities for individuals with different credit backgrounds."
        },
        {
            key: "fees",
            heading: "Does Mezovest charge any hidden fees or penalties?",
            moreDetails: "Transparency is our priority. Mezovest maintains clear terms and conditions, ensuring that there are no hidden fees or penalties. We believe in fostering trust and providing transparent financial solutions."
        },
        {
            key: "integration",
            heading: "How can I apply for a credit loan from Mezovest?",
            moreDetails: "Applying for a credit loan is simple. You can visit our website or contact our dedicated customer support team to initiate the application process. We'll guide you through the necessary steps and assist you along the way."
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
                                    <span className="font-bold text-md w-4/5">{item.heading}</span>
                                    <span className='font-bold text-xl cursor-pointer w-1/5 text-end' onClick={() => showLeftText(item.heading)}>{!showLongDetails ? "+" : "-"}</span>
                                </div>
                                {showLongDetails && (
                                    <p className='mt-4 text-md'>{item.moreDetails}</p>
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
                                    <span className="font-bold text-md w-4/5">{item.heading}</span>
                                    <span className='font-bold text-xl cursor-pointer w-1/5 text-end' onClick={() => showRightText(item.heading)}>{!showLongDetails ? "+" : "-"}</span>
                                </div>
                                {showLongDetails && (
                                    <p className='mt-4 text-md'>{item.moreDetails}</p>
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