import React, { useState } from 'react'

function FaqSection() {
    const [showLeftMoreDetails, setShowLeftMoreDetails] = useState([])
    const [showRightMoreDetails, setShowRightMoreDetails] = useState([])
    const leftFaq = [
        {
            key:"pay",
            heading: "How does your gas supply ensure consistency and reliability?",
            moreDetails: "We have established strategic partnerships and operate Micro-distribution Centers (MDCs) in key locations, allowing us to meet the demand for gas consistently. Our robust supply chain ensures reliable and timely delivery, minimizing any disruptions to your business operations."
        },
        {
            key: "accept",
            heading: "What measures do you have in place to maintain the quality and safety of the gas supplied?",
            moreDetails: "We adhere to strict quality control standards and regulatory requirements to ensure the gas supplied is of the highest quality and safety. Our supply chain includes thorough monitoring, testing, and maintenance procedures to ensure compliance and customer satisfaction."
        },
        {
            key: "method",
            heading: "What payment methods are supported?",
            moreDetails: "We support a wide range of payment methods, including credit cards, debit cards, mobile wallets, and online banking, ensuring convenience for both you and your customers."
        },
    ]

    const rightFaq = [
        {
            key:"speed",
            heading: "How can I be assured of fair and competitive pricing for the gas supplied?",
            moreDetails: "We strive to offer competitive pricing for our gas supply, considering market conditions and industry standards. Our transparent pricing policy ensures you receive fair rates for the gas you purchase, allowing you to manage your costs effectively."
        },
        {
            key: "fees",
            heading: "AWhat happens in the event of an emergency or supply disruption?",
            moreDetails: "We have contingency plans in place to address emergencies and supply disruptions. Our dedicated team is available to handle any unforeseen situations promptly, ensuring minimal impact on your business and swift resolution of the issue."
        },
        {
            key: "integration",
            heading: "Can I track the status of my gas supply and receive updates on deliveries?",
            moreDetails: "Yes, we provide real-time tracking and regular updates on the status of your gas supply and deliveries. Our advanced logistics system allows you to stay informed and plan your operations accordingly, enhancing visibility and convenience."
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