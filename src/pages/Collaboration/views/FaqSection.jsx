import React, { useState } from 'react'

function FaqSection() {
    const [showLeftMoreDetails, setShowLeftMoreDetails] = useState([])
    const [showRightMoreDetails, setShowRightMoreDetails] = useState([])
    const leftFaq = [
        {
            key:"pay",
            heading: "How reliable is Mezovest's logistics solution?",
            moreDetails: "Mezovest is committed to providing reliable logistics services. We have a track record of delivering goods safely and on time, ensuring customer satisfaction."
        },
        {
            key: "accept",
            heading: "What regions does Mezovest cover for its logistics services?",
            moreDetails: "We have an extensive network that covers Lagos for now."
        },
        {
            key: "method",
            heading: "Can Mezovest handle both small and large-scale logistics operations?",
            moreDetails: "Absolutely! Mezovest caters to businesses of all sizes. Whether you need to transport a single item or manage a large-scale logistics operation, we have the capacity and expertise to handle it."
        },
        {
            key: "acpt",
            heading: "How can I track my shipments with Mezovest's logistics solution?",
            moreDetails: "We provide a user-friendly tracking system that allows you to monitor the progress of your shipments in real-time. You can easily access tracking information through our online platform or mobile app."
        },
        {
            key: "mhod",
            heading: "Are there any insurance options available for goods transported through Mezovest's logistics services?",
            moreDetails: "Mezovest offers insurance options to protect your goods during transportation. Our team can provide you with details and assist you in choosing the appropriate coverage for your specific needs."
        },
    ]

    const rightFaq = [
        {
            key:"speed",
            heading: "What safety measures does Mezovest have in place to ensure the security of transported goods?",
            moreDetails: "We prioritize the safety and security of goods entrusted to us. Mezovest implements strict security protocols, including proper packaging, tracking systems, and trained personnel, to ensure the safe delivery of your goods."
        },
        {
            key: "fees",
            heading: "Can Mezovest handle specialized logistics requirements, such as temperature-controlled or fragile goods?",
            moreDetails: "Yes, Mezovest is equipped to handle specialized logistics requirements. We have experience in transporting temperature-controlled items, fragile goods, and other specialized cargo. Please let us know your specific needs, and we will tailor our services accordingly."
        },
        {
            key: "integration",
            heading: "What is Mezovest's approach to customer service in the logistics sector?",
            moreDetails: "Customer satisfaction is at the heart of our operations. We strive to provide excellent customer service by promptly addressing inquiries, providing regular updates, and ensuring a smooth logistics experience for our clients."
        },
        {
            key: "aept",
            heading: "How can I request a logistics service from Mezovest?",
            moreDetails: "Requesting a logistics service is simple. You can reach out to our dedicated customer support team through our website or contact our logistics department directly. We will guide you through the process and ensure a seamless experience."
        },
        {
            key: "ethod",
            heading: "What sets Mezovest apart from other logistics service providers?",
            moreDetails: "Mezovest stands out due to our commitment to reliability, customer-centric approach, extensive network, and ability to handle various logistics requirements. We aim to exceed customer expectations and establish long-term partnerships based on trust and exceptional service."
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