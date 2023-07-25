import React, { useState } from 'react'

function FaqSection() {
    const [showLeftMoreDetails, setShowLeftMoreDetails] = useState([])
    const [showRightMoreDetails, setShowRightMoreDetails] = useState([])
    const leftFaq = [
        {
            key:"pay",
            heading: "Is Mezovest a reliable payment solution?",
            moreDetails: "Absolutely! Mezovest is built on a robust and secure platform that ensures seamless and reliable payment processing for businesses. We prioritize the trust and satisfaction of our customers."
        },
        {
            key: "accept",
            heading: "How secure is Mezovest for accepting payments?",
            moreDetails: "Security is our top priority. Mezovest employs advanced encryption and data protection measures to safeguard sensitive payment information. Your customers can feel confident that their transactions are secure."
        },
        {
            key: "method",
            heading: "Can I integrate Mezovest with my existing business systems?",
            moreDetails: "Yes, Mezovest offers easy integration with various POS systems, websites, and mobile apps. Our dedicated support team is available to assist you throughout the integration process."
        },
        {
            key: "acept",
            heading: "What payment methods does Mezovest support?",
            moreDetails: "Mezovest supports a wide range of payment methods, including debit cards, credit cards, mobile wallets, and bank transfers. We aim to provide your customers with a convenient and flexible payment experience."
        },
        {
            key: "mhod",
            heading: "How long does it take for funds to be deposited into my account?",
            moreDetails: "With Mezovest, funds are typically deposited into your account within a few minutes. We strive to ensure timely and efficient settlements for your transactions."
        },
    ]

    const rightFaq = [
        {
            key:"speed",
            heading: "Can I track and reconcile my transactions with Mezovest?",
            moreDetails: "Yes, Mezovest provides comprehensive transaction reporting and reconciliation tools. You can easily track and manage your payments, ensuring accurate record-keeping for your business."
        },
        {
            key: "fees",
            heading: "What if I encounter any issues or need support with Mezovest?",
            moreDetails: "We have a dedicated customer support team available to assist you with any questions or concerns you may have. Simply reach out to us, and we'll be happy to provide the support you need."
        },
        {
            key: "integration",
            heading: "Are there any hidden fees or additional charges with Mezovest?",
            moreDetails: "Transparency is important to us. Mezovest offers competitive pricing with no hidden fees. Our fee structure is clear and straightforward, ensuring you know exactly what to expect."
        },
        {
            key: "fes",
            heading: "Can Mezovest help me with chargebacks or disputes?",
            moreDetails: "Yes, Mezovest provides dispute resolution services to help you navigate chargebacks or customer disputes. We work closely with you to ensure fair and timely resolutions."
        },
        {
            key: "ingration",
            heading: "How can Mezovest benefit my business in the long term?",
            moreDetails: "By leveraging Mezovest, you can enhance your customers' payment experience, increase sales, and streamline your financial processes. Our reliable and user-friendly solution helps you focus on growing your business with peace of mind."
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