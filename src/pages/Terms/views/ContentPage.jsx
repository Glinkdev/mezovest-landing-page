import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import GreenDot from "../../../assets/icons/green-dot.svg";

function ContentPage() {
  return (
    <div className='py-7 md:pt-16 pb-20 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppin flex mb-4 md:mb-10'>
        <div className='w-full md:w-2/5 hidden md:flex flex-col'>
            <span className='text-black text-2xl font-semibold leading-16 md:whitespace-nowrap'>Content  </span>
            <h2 className='text-[#CCC] text-xl mt-4 font-semibold ml-2'>Terms of Service</h2>
            <h2 className='text-green text-2xl mt-8 font-semibold ml-2 flex md:whitespace-nowrap'><LazyLoadImage src={GreenDot} /> <span className='ml-2'>Privacy & Usage Policy</span></h2>

        </div>
        <div className='w-full md:w-3/5'>
            <div className='flex flex-col'>
                <h2 className='text-xl leading-16 font-normal'>1. Introduction</h2>
                <p className='mt-8 leading-8 text-base font-light'>
                    We are committed to safeguarding your privacy. This Privacy Policy outlines our practices concerning the collection, use, and protection of your personal information when you access and use our services. By using our services, you consent to the practices described in this Privacy Policy.
                </p>

            </div>
            <div className='flex flex-col mt-6'>
                <h2 className='text-xl leading-16 font-normal'>2. Information We Collect</h2>
                <p className='mt-10 leading-8 text-base font-light'>
                    We may collect various types of information from you, including:  <br />
                    Personal Information: Information that can identify you, such as your name, email address, phone number, and location data.  <br />
                    Usage Information: Information about how you use our services, such as your interactions with our website, mobile app, or other platforms.  <br />
                    Transaction Information: Information related to your transactions with us, such as payment details and purchase history.  <br />
                    Device and Log Information: Information about your device, IP address, browser type, and operating system.  <br />
                </p>
            </div>
            <div className='flex flex-col mt-6'>
                <h2 className='text-xl leading-16 font-normal'>3. How We Use Your Information</h2>
                <p className='mt-8 leading-8 text-base font-light'>
                We use the collected information for various purposes, including:
                <ul className="list-disc ml-6">
                    <li>Providing and improving our services.</li>
                    <li>Communicating with you regarding our services, updates, and promotions.</li>
                    <li>Personalizing your experience.</li>
                    <li>Processing transactions.</li>
                    <li>Analyzing and monitoring service usage.</li>
                    <li>Complying with legal obligations.</li>
                </ul>
                </p>
            </div>
            <div className='flex flex-col mt-6'>
                <h2 className='text-xl leading-16 font-normal'>4. Information Sharing</h2>
                <p className='mt-10 leading-8 text-base font-light'>
                    We may share your information with: <br />
                    Service providers who assist us in delivering our services.  <br />
                    Legal authorities or law enforcement when required.  <br />
                    Affiliates or business partners with whom we collaborate.  <br />
                </p>
            </div>
            <div className='flex flex-col mt-6'>
                <h2 className='text-xl leading-16 font-normal'>5. Your Choices</h2>
                <p className='mt-8 leading-8 text-base font-light'>
                <ul className="list-disc ml-6">
                    <li>You can manage your privacy preferences by:</li>
                    <li>Adjusting your account settings.</li>
                    <li>Unsubscribing from marketing communications.</li>
                    <li>PDeleting or updating your information.</li>
                </ul>
                </p>
            </div>
            <div className='flex flex-col mt-6'>
                <h2 className='text-xl leading-16 font-normal'>6. Security</h2>
                <p className='mt-4 leading-8 text-base font-light'>
                    We implement security measures to protect your information. And won’t disclose your information to a third-party
                </p>
            </div>
            <div className='flex flex-col mt-6'>
                <h2 className='text-xl leading-16 font-normal'>7. Cookies and Tracking</h2>
                <p className='mt-4 leading-8 text-base font-light'>
                We may use cookies and similar tracking technologies to enhance your experience. You can adjust your browser settings to manage cookies.
                </p>
            </div>
            <div className='flex flex-col mt-6'>
                <h2 className='text-xl leading-16 font-normal'>8. Changes to this Privacy Policy</h2>
                <p className='mt-4 leading-8 text-base font-light'>
                We may update this Privacy Policy periodically. You will be notified of significant changes.
                </p>
            </div>
            <div className='flex flex-col mt-6'>
                <h2 className='text-xl leading-16 font-normal'>9. Contact Us</h2>
                <p className='mt-4 leading-8 text-base font-light'>
                f you have questions or concerns about this Privacy Policy or your personal information, please contact us at product@mezovest.com
                </p>
            </div>
            <p className='mt-4 leading-8 text-base font-light'>Thank you for entrusting us with your privacy.</p>
            
            
        </div>
    </div>
  )
}

export default ContentPage