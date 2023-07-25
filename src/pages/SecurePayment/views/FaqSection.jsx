import React, { useState } from 'react'

function FaqSection() {
    const [showLeftMoreDetails, setShowLeftMoreDetails] = useState([])
    const [showRightMoreDetails, setShowRightMoreDetails] = useState([])
    const leftFaq = [
        {
            key:"pay",
            heading: "How secure are payment links with Mezovest?",
            moreDetails: "Mezovest prioritizes the security of your transactions. Our payment links utilize industry-standard encryption and security measures to ensure the safety of your payments. You can trust that your financial information is protected."
        },
        {
            key: "accept",
            heading: "Can I trust Mezovest's payment links for receiving payments?",
            moreDetails: "Absolutely! Mezovest's payment links are designed to provide a reliable and hassle-free payment experience. We have implemented robust systems and protocols to ensure seamless and secure transactions for both businesses and customers."
        },
        {
            key: "method",
            heading: "Are there any hidden fees or charges associated with using Mezovest's payment links?",
            moreDetails: "Mezovest believes in transparency. We provide clear information about our fees and charges, so you can make informed decisions. You can trust that our pricing is fair, upfront, and competitive."
        },
        {
            key: "acept",
            heading: "How quickly will I receive payments through Mezovest's payment links?",
            moreDetails: "The speed of payment processing depends on various factors, including the payment method used and the bank's processing times. However, Mezovest strives to facilitate swift payment transfers, ensuring you receive your funds in a timely manner."
        },
        {
            key: "mthod",
            heading: "What happens if there is an issue with a payment made through a Mezovest payment link?",
            moreDetails: "Our dedicated customer support team is here to assist you. If you encounter any issues or have concerns about a payment made through our platform, we will work diligently to resolve them and ensure your satisfaction."
        },
    ]

    const rightFaq = [
        {
            key:"speed",
            heading: "Can Mezovest support international payments through payment links?",
            moreDetails: "Yes! Mezovest enables seamless international payments through our payment links. Whether you have customers or partners overseas, our platform allows you to request and receive payments internationally."
        },
        {
            key: "fees",
            heading: "How can Mezovest's payment links benefit my business?",
            moreDetails: "Mezovest's payment links offer convenience, efficiency, and a professional payment solution for your business. By using our links, you can streamline your payment processes, improve cash flow, and provide a seamless payment experience for your customers."
        },
        {
            key: "integration",
            heading: "Is it easy to set up and use Mezovest's payment links?",
            moreDetails: "Response: Absolutely! Mezovest has designed our platform to be user-friendly and intuitive. Setting up and using our payment links is simple and straightforward, allowing you to start accepting payments with ease."
        },
        {
            key: "fes",
            heading: "Can I customize Mezovest's payment links to match my brand?",
            moreDetails: "Yes! Mezovest understands the importance of branding. You can customize your payment links with your brand name, providing a professional and consistent brand experience for your customers."
        },
        {
            key: "intetion",
            heading: "What if my customers are hesitant to use payment links?",
            moreDetails: "We understand that some customers may have reservations about new payment methods. We recommend educating your customers about the security and convenience of Mezovest's payment links. Once they see the benefits, they will feel more confident in using this reliable payment solution."
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