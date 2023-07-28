import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { createModal } from "react-prompt-modal";
import MobileCancelIcon from "../assets/icons/mobile-cancel-icon.svg";
import RightArrowIcon from "../assets/icons/right-arrow-icon.svg"
import DropDownIcon from "../assets/icons/dropdown-icon.svg"
import NairaIcon from "../assets/icons/naira-icon.svg"
import CommerceIcon from "../assets/icons/commerce-icon.svg"
import DistributionIcon from "../assets/icons/distribution-icon.svg"
import { Dialog, Transition } from "@headlessui/react";

function MobileMenu({ show, close, }) {
    const [navOpen, setNavOpen] = useState([])
    const navigation = [
        {
            name: "Support",
            url: "/testimonials"
        },
        // {
        //     name: "Pricing",
        //     url: "/payment"
        // },
        {
            name: "About us",
            url: "/testimonials"
        },
        {
            name: "Blog",
            url: "https://blog.mezovest.com"
        },
    ]
    const subMenu = [
        {
            name: "Payment",
            icon: NairaIcon,
            subItems: [
                {
                    name: "Accept Payment",
                    route: "/payment"
                },
                {
                    name: "Send Money",
                    route: "/send"
                },
                {
                    name: "Payment Links",
                    route: "/payment"
                },
                {
                    name: "POS",
                    route: "/pos"
                }
            ]
        },
        {
            name: "Commerce",
            icon: CommerceIcon,
            subItems: [
                {
                    name: "Storefront - e commerce",
                    route: "/storefront"
                },
                {
                    name: "Invoicing",
                    route: "/invoicing"
                },
                {
                    name: "Credit / Loan",
                    route: "/loan"
                },
            ]
        },
        {
            name: "Distribution",
            icon: DistributionIcon,
            subItems: [
                {
                    name: "Logistics",
                    route: "/logistics"
                },
                {
                    name: "Supply Chain",
                    route: "/supply-chain"
                },
            ]
        }
    ]
    const toggleNavBar = (e) => {
        if (navOpen.includes(e)) {
            const newList = navOpen.filter((item) => { return item !== e })
            setNavOpen(newList)
            return
        }
        setNavOpen([e])
    }
    const routeTo = (route) => {


    }
    return (
        <Transition.Root appear show={show} as={Fragment}>
            <Dialog as="div" className="absolute md:hidden top-0 z-10 h-screen right-0 bg-[#202F36] w-full" onClose={close}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-300"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <div className="bg-[#202f360] transform overflow-hidden rounded-lg  text-left shadow-xl transition-all sm:my-8 w-full min-h-content flex justify-end">
                        <div className=' md:hidden w-full bg-white h-screen pt-8 p-5 z-50 '>
                            <div className='flex justify-between'>
                                <p className=' text-2xl font-semibold'> Menu</p>
                                <img src={MobileCancelIcon} alt="cancel icon" onClick={() => close()} />
                            </div>
                            <div className='flex flex-col gap-10 mt-10'>
                                <div>
                                    <div className="pointer font-semibold text-lg flex">
                                        <p className="pointer font-semibold text-lg mr-2">
                                            {"Solutions"}
                                        </p>

                                    </div>

                                    <div className='sub-menu-modal gap-20 mt-6 z-50 ml-10'>
                                        {subMenu.map((item, index) => {
                                            let showMoreNav = navOpen.includes(item.name)
                                            return (
                                                <div className='flex gap-3 mt-6 ' key={index}>
                                                    <div>
                                                        <img src={item.icon} />
                                                    </div>
                                                    <div className='flex flex-col text-sm '>
                                                        <p className='font-semibold text-black pb-2 flex gap-20' onClick={() => toggleNavBar(item.name)}><span className='mr-2 w-[40px]'>{item.name} </span> <img src={DropDownIcon} className={`${showMoreNav ? "rotate-180" : ""}`} /></p>
                                                        {showMoreNav &&
                                                            <div className='flex flex-col gap-4 mt-2'>
                                                                {item.subItems.map((subItem, index) => (
                                                                    <a href={subItem.route} className='text-neutral-400 font-medium cursor-pointer whitespace-nowrap' key={index} >{subItem.name}</a>
                                                                ))}
                                                            </div>
                                                        }

                                                    </div>

                                                </div>
                                            )
                                        })}

                                    </div>

                                </div>

                                {navigation.map((item, index) => (
                                    <a key={index} href={item.url} className="pointer font-semibold text-lg">{item.name}</a>
                                ))}
                            </div>

                        </div>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition.Root>
    )
}

export default MobileMenu

MobileMenu.propTypes = {
    show: PropTypes?.func,
    close: PropTypes?.func,
};