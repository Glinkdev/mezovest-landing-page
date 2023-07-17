import React, { useState } from 'react'

function FaqSection() {
    const [showLeftMoreDetails, setShowLeftMoreDetails] = useState([])
    const [showRightMoreDetails, setShowRightMoreDetails] = useState([])
    const leftFaq = [
        {
            key:"pay",
            heading: "Can I customize my invoice layout and design?",
            moreDetails: "Absolutely! Our invoicing solution provides customizable templates, allowing you to personalize your invoice design, add your logo, and tailor it to reflect your brand."
        },
        {
            key: "accept",
            heading: "How can I track the status of my invoices?",
            moreDetails: "Our invoicing system offers real-time tracking, allowing you to monitor the status of your invoices. You can easily see when an invoice is sent, viewed, and paid, keeping you informed every step of the way."
        },
        {
            key: "method",
            heading: "Can I accept online payments through my invoices?",
            moreDetails: "Yes, you can! Our invoicing solution integrates with popular payment gateways, enabling you to accept online payments directly from your invoices. It provides a convenient and secure way for your clients to make payments, ensuring faster and hassle-free transactions."
        },
    ]

    const rightFaq = [
        {
            key:"speed",
            heading: "Can I schedule recurring invoices?",
            moreDetails: "Certainly! With our invoicing solution, you can set up recurring invoices for regular clients, saving you time and effort. Simply specify the frequency and duration, and our system will automatically generate and send the invoices for you."
        },
        {
            key: "fees",
            heading: "Is my invoicing data secure?",
            moreDetails: "We prioritize the security of your invoicing data. Our platform implements industry-standard security measures to protect your information, including encryption, secure data storage, and regular backups. You can trust that your invoicing data is safe with us."
        },
        {
            key: "integration",
            heading: "Can I generate reports and track my income?",
            moreDetails: "Absolutely! Our invoicing solution provides reporting features that allow you to generate financial reports, track your income, and gain insights into your business's invoicing performance. You can analyze your sales, monitor outstanding payments, and make informed financial decisions."
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