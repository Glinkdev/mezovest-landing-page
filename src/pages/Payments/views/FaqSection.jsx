import React, { useState } from 'react'

function FaqSection() {
    const [showLeftMoreDetails, setShowLeftMoreDetails] = useState([])
    const [showRightMoreDetails, setShowRightMoreDetails] = useState([])
    const leftFaq = [
        {
            key:"pay",
            heading: "Is your payment solution secure?",
            moreDetails: "Absolutely! We prioritize the security of your transactions and utilize industry-standard encryption protocols to safeguard your sensitive information."
        },
        {
            key: "accept",
            heading: "Can I accept payments from customers across different locations?",
            moreDetails: "Yes, our payment solution allows you to accept payments from customers nationwide, regardless of their location."
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
            heading: "How quickly will I receive customer payments?",
            moreDetails: "You can expect fast and reliable settlement times, with funds typically deposited into your account within a specified timeframe, ensuring smooth cash flow for your business."
        },
        {
            key: "fees",
            heading: "Are there any hidden fees or additional charges?",
            moreDetails: "We believe in transparency, and our pricing structure is designed to be clear and straightforward. We provide you with a breakdown of all applicable fees, so you know exactly what to expect."
        },
        {
            key: "integration",
            heading: "Can I integrate your payment solution with my existing business systems?",
            moreDetails: "Yes, our payment solution is designed to be easily integrated with various business systems, such as e-commerce platforms, point-of-sale (POS) systems, and accounting software, allowing for seamless operations."
        },
    ]

    const showLeftText = (e) => {
        console.log(showLeftMoreDetails.includes(e),showLeftMoreDetails )
        if (showLeftMoreDetails.includes(e)) {
            const newList = showLeftMoreDetails.map((item) => {
                if(item !== e){
                    return item
                }
                
            })
            console.log(newList, "newList")
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