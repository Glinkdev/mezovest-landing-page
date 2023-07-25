import React, { useState } from 'react'

function FaqSection() {
    const [showLeftMoreDetails, setShowLeftMoreDetails] = useState([])
    const [showRightMoreDetails, setShowRightMoreDetails] = useState([])
    const leftFaq = [
        {
            key:"pay",
            heading: "How reliable is Mezovest's supply chain solution?",
            moreDetails: "Mezovest prides itself on a reliable supply chain network. We have established a strong presence in Lagos and Abuja with our micro-distribution centers, ensuring efficient and hassle-free gas purchases for vendors."
        },
        {
            key: "accept",
            heading: "How can I benefit from Mezovest's supply chain solution as a gas vendor?",
            moreDetails: "As a gas vendor, Mezovest's supply chain solution provides you with easy access to gas procurement through our extensive network of micro-distribution centers. You can conveniently buy gas without the usual hassles, ensuring a smooth and reliable supply for your customers."
        },
        {
            key: "method",
            heading: "Are the gas products sourced through Mezovest's supply chain of high quality?",
            moreDetails: "Absolutely! Mezovest maintains stringent quality control measures to ensure that the gas products sourced through our supply chain are of the highest quality. We work with trusted suppliers and conduct regular quality checks to ensure customer satisfaction."
        },
        {
            key: "meth",
            heading: "How can I become a part of Mezovest's supply chain network as a gas vendor?",
            moreDetails: "Joining Mezovest's supply chain network as a gas vendor is straightforward. Please contact our team, and we will guide you through the onboarding process, ensuring that you can benefit from our reliable supply chain solution."
        },
        {
            key: "mth",
            heading: "Can Mezovest assist with the logistics and transportation of gas products?",
            moreDetails: "Mezovest can provide assistance with the logistics and transportation of gas products, ensuring timely delivery to our micro-distribution centers. Our goal is to streamline the entire supply chain process, making it more efficient and convenient for gas vendors."
        },
    ]

    const rightFaq = [
        {
            key:"speed",
            heading: "What measures are in place to ensure the safety and compliance of gas products in the supply chain?",
            moreDetails: "Safety and compliance are paramount in our supply chain operations. Mezovest adheres to strict safety guidelines and regulatory standards to guarantee the safe handling and transportation of gas products. We prioritize the well-being of our vendors and customers."
        },
        {
            key: "fees",
            heading: "How does Mezovest ensure a consistent and uninterrupted supply of gas products?",
            moreDetails: "Mezovest has implemented robust supply chain management practices to ensure a consistent and uninterrupted flow of gas products. We maintain strong relationships with suppliers, regularly monitor demand, and employ efficient inventory management techniques."
        },
        {
            key: "integration",
            heading: "Can I rely on Mezovest's supply chain solution for my gas business growth?",
            moreDetails: "Yes, Mezovest's supply chain solution is designed to support the growth of your gas business. Our reliable network, convenient purchasing process, and commitment to quality enable you to focus on expanding your customer base and increasing profitability."
        },
        {
            key: "fee",
            heading: "How does Mezovest handle any supply chain disruptions or unforeseen challenges?",
            moreDetails: "Mezovest is well-prepared to handle supply chain disruptions and unforeseen challenges. We have contingency plans in place, alternative sourcing options, and proactive communication channels to address any issues promptly and minimize any impact on our vendors and customers."
        },
        {
            key: "integrate",
            heading: "What additional support or services does Mezovest provide to gas vendors within its supply chain network?",
            moreDetails: "Mezovest goes beyond the supply chain by providing ongoing support and services to our gas vendors. We offer training programs, business development assistance, and access to valuable resources to help you optimize your operations and achieve long-term success."
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