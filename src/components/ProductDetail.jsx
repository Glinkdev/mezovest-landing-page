import React from 'react';
import PropTypes from 'prop-types';
import MezopayWhiteIcon from "../assets/icons/mezopay-logo-white.svg";
import ShieldIcon from "../assets/icons/shield-icon.svg";


function ProductDetail({ name, icon, features, action, detail, height }) {

    return (
        <div className={`${height} flex md:flex-row flex-col w-full font-poppins  mt-20`} >
            <div className='w-full md:w-16 flex justify-center h-16 md:h-full rotated-text text-sm text-black bg-green align-center items-center font-bold text-xl tracking-wide ...'>
                {name}
            </div>
            <div className='flex flex-col md:flex-row w-full border-2 border-green md:min-h-full h-full p-6 md:py-14 md:px-16 divide-y md:divide-y-0 md:divide-x divide-white justify-center'>
                <div className='md:w-1/3 flex items-center md:items-start justify-center md:justify-between flex-col  py-5 md:py-10 md:pr-4'>
                    <div className={`${icon?.length > 1 ? "grid-cols-2" : "grid-cols-1"} grid md:grid-cols-none  gap-8 md:flex md:flex-col`}>
                        {icon && icon.map((item, index) => (
                            <img key={index} src={item} alt="mezopay icon" className='!w-52  md:col-span-1' />

                        ))}
                    </div>

                    <div className='md:mt-10 hidden md:flex md:flex-col'>
                        {features && features.map((item, index) => (
                            <div key={index} className="flex mb-6 align-center items-center">
                                <img src={ShieldIcon} alt="shield icon" />
                                <p className='text-base font-semibold ml-4 text-white flex items-center align-center'>{item}</p>
                            </div>
                        ))}
                    </div>
                    {action && (
                        <div className='flex items-center justify-start w-full hidden md:flex'>
                            <button className='bg-transparent border-white border text-base font-semibold text-white py-3.5 min-w-[200px]'>
                                {action}

                            </button>
                        </div>)}

                </div>
                <div className='w-full md:w-2/3 py-5 md:py-0'>
                    <div className='py-5 md:hidden grid grid-cols-2 gap-4 w-full justify-between'>
                        {features && features.map((item, index) => (
                            <div key={index} className="flex mb-6 col-span-1 align-center items-center">
                                <img src={ShieldIcon} alt="shield icon" />
                                <p className='text-sm md:text-base font-semibold ml-1 md:ml-4 text-white  flex items-center align-center'>{item}</p>
                            </div>
                        ))}
                    </div>
                    {detail && detail.map((item, index) => (
                        <div key={index} className="md:pl-16 md:pt-2 md:pr-10">

                            {
                                item.type === "normal" ? (
                                    <p className='font-normal text-xs xl:text-base text-white mb-8 !leading-7'>
                                        {item.text}
                                    </p>) : (
                                    <ul className='text-white list-disc list-inside text-xs xl:text-base' role="list">
                                        {item.text.map((item, index) => (
                                            <li className='font-normal text-xs xl:text-base text-white !leading-7 mb-4' key={index}>{item}</li>
                                        ))}
                                    </ul>
                                )
                            }
                        </div>
                    ))}
                    {action && (
                        <div className='flex items-center justify-center w-full md:hidden flex mt-10'>
                            <button className='bg-transparent border-white border text-base font-semibold text-white py-3.5 min-w-[200px]'>
                                {action || "Talk to sales"}

                            </button>
                        </div>)}
                </div>

            </div>

        </div>
    )
}
ProductDetail.propTypes = {
    name: PropTypes?.string?.isRequired, 
    icon: PropTypes?.array?.isRequired, 
    features: PropTypes?.array?.isRequired, 
    action: PropTypes.string.isRequired,
    detail: PropTypes?.array?.isRequired,
    height: PropTypes.string.isRequired, // Add the missing prop type validation
};

export default ProductDetail