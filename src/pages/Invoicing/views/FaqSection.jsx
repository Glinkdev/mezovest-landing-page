import React, { useState } from 'react'

function FaqSection() {
    const [showLeftMoreDetails, setShowLeftMoreDetails] = useState([])
    const [showRightMoreDetails, setShowRightMoreDetails] = useState([])
    const leftFaq = [
        {
            key:"pay",
            heading: "How secure is Mezovest's invoicing solution?",
            moreDetails: "We prioritize your data security. Mezovest employs state-of-the-art encryption technology to ensure the utmost protection for your business and customer information."
        },
        {
            key: "accept",
            heading: "Can I customize my invoices with Mezovest?",
            moreDetails: "Absolutely! Mezovest allows you to personalize your invoices with your business logo, colors, and relevant details, giving them a professional and unique touch."
        },
        {
            key: "method",
            heading: "How does Mezovest help with inventory control?",
            moreDetails: "Our invoicing solution includes inventory tracking features, enabling you to monitor product sales, stock levels, and automatically update your inventory records for better control and accuracy."
        },
        {
            key: "acpt",
            heading: "Can Mezovest help with overdue payments and reminders?",
            moreDetails: "Yes, definitely! Mezovest's invoicing solution includes automated reminders for overdue payments, ensuring you stay on top of outstanding invoices and receive payments promptly."
        },
    ]

    const rightFaq = [
        {
            key:"speed",
            heading: "Can I access my invoicing data from anywhere?",
            moreDetails: "Absolutely! Mezovest's invoicing solution is cloud-based, enabling you to access your invoicing data securely from any device with an internet connection, giving you flexibility and convenience."
        },
        {
            key: "fees",
            heading: "Does Mezovest integrate with accounting software?",
            moreDetails: "Yes, Mezovest seamlessly integrates with popular accounting software, making it easy to sync your invoicing data and streamline your accounting processes."
        },
        {
            key: "integration",
            heading: "What customer support is available for Mezovest's invoicing solution?",
            moreDetails: "We have a dedicated customer support team ready to assist you. You can reach out to us through various channels, including email, phone, and live chat, ensuring you receive prompt and reliable assistance."
        },
        {
            key: "mehod",
            heading: "Is Mezovest's invoicing solution user-friendly?",
            moreDetails: "We understand the importance of simplicity. Mezovest's invoicing solution is designed to be intuitive and user-friendly, allowing business owners of all tech backgrounds to easily navigate and utilize its features."
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