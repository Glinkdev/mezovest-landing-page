import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import RightArrowIcon from "../../../assets/icons/right-arrow-icon.svg"
import DropDownIcon from "../../../assets/icons/dropdown-icon.svg"
import NairaIcon from "../../../assets/icons/naira-icon.svg"
import CommerceIcon from "../../../assets/icons/commerce-icon.svg"
import DistributionIcon from "../../../assets/icons/distribution-icon.svg"


function Navigator() {
    const navigate = useNavigate()
    const [openSubmenu, setOpenSubMenu] = useState(false)
    const navigation = [
        {
            name: "Support",
            url: "/customers"
        },
        {
            name: "Become a partner",
            url: "/"
        },
        {
            name: "About us",
            url: "/customers"
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
                    route: "/secure-payment"
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
                {
                    name: "Secure Payment",
                    route: "/secure-payment"
                }
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

    const routeTo = (route) => {
        navigate(route)
    }
    return (
        <Styled>
            <div className='flex justify-between  bg-green px-3 py-5 md:py-7 md:px-14 font-poppins w-full  mt-8 '>
                <div className='flex justify-center md:justify-between w-full'>

                    <div className='hidden md:flex justify-between align-center w-3/6'>
                        <div className='relative'>
                            <div className='flex cursor-pointer' onClick={() => setOpenSubMenu(!openSubmenu)}>
                                <p className="cursor-pointer font-bold text-sm">
                                    {"Solutions"}
                                </p>
                                <img src={DropDownIcon} />
                            </div>
                            {openSubmenu &&
                                <div className='sub-menu-modal gap-8 absolute mt-4 z-50'>
                                    {subMenu.map((item, index) => (
                                        <div className='flex gap-4' key={index}>
                                            <div>
                                                <img src={item.icon} />
                                            </div>
                                            <div className='flex flex-col text-xs w-[180px]'>
                                                <p className='font-semibold text-green pb-2 border-b border-gray-300'>{item.name}</p>
                                                <div className='flex flex-col gap-2 mt-2'>
                                                    {item.subItems.map((subItem, index) => (
                                                        <p className='text-black font-medium cursor-pointer whitespace-nowrap' key={index} onClick={() => routeTo(subItem.route)}>{subItem.name}</p>
                                                    ))}
                                                </div>

                                            </div>

                                        </div>
                                    ))}

                                </div>
                            }
                        </div>


                        {navigation.map((item, index) => (
                            <a key={index} href={item.url} className="pointer font-bold text-sm">{item.name}</a>
                        ))}
                    </div>
                    <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        href="mailto:sales@mezovest.com"
                        className="pointer font-bold text-sm flex">
                            Talk to sales 
                        <img src={RightArrowIcon} className="ml-2" />
                    </a>
                </div>
            </div>
        </Styled>
    )

}
export default Navigator

const Styled = styled.div`
    .sub-menu-modal {
        display: flex;
        flex-direction: column;
        padding: 30px;
        border-radius: 10px;
        background: #FFF;
        box-shadow: 0px 5px 17px 0px rgba(0, 0, 0, 0.21);
    }

`