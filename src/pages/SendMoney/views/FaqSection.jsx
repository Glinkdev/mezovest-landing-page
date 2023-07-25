import React, { useState } from 'react'

function FaqSection() {
    const [showLeftMoreDetails, setShowLeftMoreDetails] = useState([])
    const [showRightMoreDetails, setShowRightMoreDetails] = useState([])
    const leftFaq = [
        {
            key:"pay",
            heading: "Is Mezovest a secure platform for sending money?",
            moreDetails: "Absolutely! Mezovest prioritizes the security of your transactions. We employ robust encryption and authentication measures to ensure that your money is sent safely and securely."
        },
        {
            key: "accept",
            heading: "How reliable is Mezovest for sending money to partners?",
            moreDetails: "Mezovest is built on a reliable infrastructure that guarantees seamless and efficient money transfers. Our platform is designed to provide a dependable experience for businesses when sending funds to their partners."
        },
        {
            key: "method",
            heading: "Can I trust Mezovest with large or frequent money transfers?",
            moreDetails: "Absolutely! Mezovest is designed to handle transactions of all sizes, including large or frequent money transfers. You can trust us to facilitate your financial transactions with reliability and efficiency."
        },
        {
            key: "accet",
            heading: "What payment methods are available for sending money with Mezovest?",
            moreDetails: "Mezovest supports various payment methods, including bank transfers and digital wallets. You have the flexibility to choose the most convenient option for sending money to your partners."
        },
        {
            key: "metho",
            heading: "How long does it take for the recipient to receive the money?",
            moreDetails: "The speed of money transfers with Mezovest depends on factors such as the recipient's bank processing time. However, we strive to ensure that your funds are delivered in a timely manner to your partners."
        },
    ]

    const rightFaq = [
        {
            key:"speed",
            heading: "Can I track the status of my money transfers on Mezovest?",
            moreDetails: "Yes, Mezovest provides a comprehensive transaction history and tracking feature. You can easily monitor the progress of your money transfers, giving you peace of mind and transparency."
        },
        {
            key: "fees",
            heading: "Are there any hidden fees or additional charges when sending money with Mezovest?",
            moreDetails: "Mezovest believes in transparent pricing. We provide a clear fee structure, ensuring that you are aware of any charges associated with your money transfers. No hidden fees, just honest and upfront pricing."
        },
        {
            key: "integration",
            heading: "What if there is an issue or discrepancy with a money transfer?",
            moreDetails: "Our dedicated customer support team is available to assist you with any issues or discrepancies you may encounter. We are committed to resolving any concerns and ensuring a smooth money transfer experience."
        },
        {
            key: "fee",
            heading: "Can Mezovest help with international money transfers?",
            moreDetails: "Absolutely! Mezovest supports both domestic and international money transfers, allowing you to send funds to your partners across borders. We make cross-border transactions simple and reliable."
        },
        {
            key: "intion",
            heading: "How can Mezovest benefit my business in the long run?",
            moreDetails: "By utilizing Mezovest's secure and reliable money transfer solution, you can streamline your financial processes, enhance your business relationships, and ensure prompt payments to your partners. We are here to support your financial needs every step of the way."
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