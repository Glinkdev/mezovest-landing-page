import React, { useState } from 'react'
import { styled } from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import GreenStroke from "../../../assets/icons/green-stroke.svg"
import OfflineImage from "../../../assets/images/fast-reliable-image.svg";
import MezoBagImage from "../../../assets/images/mez-shopbag-img.png";
import PhoneImage from "../../../assets/images/aboutus-phone-image.svg";
import OfficeImage from "../../../assets/images/office-image.svg";
import LightImage from "../../../assets/images/aboutus-light-image.svg";
import ManPhoneImage from "../../../assets/images/aboutus-man-with-phone-image.svg";
import PipeImage from "../../../assets/images/aboutus-pipe-image.svg";
import PassionImage from "../../../assets/images/aboutus-passion-led-us-image.svg";
import BecomeAPartner from "../../../assets/images/become-a-partner-image.svg"
import SmallGreenStroke from "../../../assets/icons/short-green-stroke.svg";
import PearlRestaurantImage from "../../../assets/images/pearl-restaurant-image.svg";
import PearlLogo from "../../../assets/images/pearl-logo.svg";
import ClientSlider from '../../../components/ClientSlider';
import GreenCallIcon from "../../../assets/icons/green-call-icon.svg";
import GreenEmailIcon from "../../../assets/icons/green-email-icon.svg";
import GreenLocationIcon from "../../../assets/icons/green-location-icon.svg";
import { validateEmail } from '../../../utils';


function OfflineSection() {
    const [inputField, setInputField] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [isEmailValid, setEmailIsValid] = useState(false)
    const buttonEnabled = inputField.name && inputField.email &&  inputField.message

    console.log(inputField)
    const validateEmailAddress = (email) => setEmailIsValid(validateEmail(email));

    const info = [
        {
            id: 1,
            image: GreenCallIcon,
            heading: "Call us",
            subheading: "+234 913 357 7245",
        },
        {
            id: 2,
            image: GreenEmailIcon,
            heading: "Email Us",
            subheading: "hello@mezovest.com",
        },
        {
            id: 3,
            image: GreenLocationIcon,
            heading: "Ajah",
            subheading: "Ajah Lagos",
        },
    ]

    const handleUserInput = (event) => {
        const { name, value } = event.target

        if (name === "email") {
            validateEmailAddress(value)
        }
        setInputField((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const sendEmail = () => {
        const {email, name, message} = inputField
        const subject = `Email from ${name}`
        document.location = "mailto:"+email+"?subject="+subject+"&body="+message;
    }

    return (
        <div className='py-7 md:pt-16 pb-68 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins relative'>
            <ContactForm className='flex flex-col max-w-[916px] p-9 md:p-10  gap-20 bg-white rounded-2xl m-auto absolute -top-52 w-full m-auto right-0 left-0'>
                <div className='flex flex-col justify-center'>
                    <span className='text-black text-3xl md:text-[35px] font-semibold leading-[3rem] md:whitespace-nowrap text-center'>Leave a   <span className='text-green '> message<br /></span> </span>
                    <p className='mt-2 text-center'>Please fill in all required fields.</p>
                </div>
                <div className='gap-8 flex flex-col max-w-[621px] m-auto w-full items-center'>
                    <Input
                        type="text"
                        placeholder='Name'
                        name="name"
                        onChange={handleUserInput}
                    />
                    <Input
                        type="text"
                        placeholder='Email'
                        name="email"
                        onChange={handleUserInput}
                    />
                    <TextArea
                        type="text"
                        placeholder='Message'
                        name="message"
                        onChange={handleUserInput}
                    />
                    <Button
                        onClick={sendEmail}
                        className={buttonEnabled ? "" : "disabled"}
                    >
                        Submit
                    </Button>
                </div>


            </ContactForm>
            <div className='flex flex-col w-full flex justify-center  mt-[30rem]'>
                <div className='flex justify-center flex-col col-span-1'>
                    <span className='text-black text-3xl md:text-[40px] font-semibold leading-[3rem] md:whitespace-nowrap text-left'>Have a   <span className='text-green '> question?<br /></span> </span>
                    <div className='mt-2 leading-[2rem] flex justify-start'>
                        <p className='text-left'>Our customer service is always available to reply all queries </p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-between mt-10 gap-10'>
                    {info.map((item) => (
                        <div className='mt flex ' key={item.id}>
                             <LazyLoadImage src={item.image} className="w-[50px] h-[50px]" />
                            <div className='ml-2  justify-center flex flex-col'>
                                <p className='text-md md:text-xl font-medium'>{item?.heading}</p>
                                <p className='text-xs md:text-sm mt-1'>{item?.subheading}</p>
                            </div>
                        </div>
                    ))}

                </div>


            </div>


        </div>

    )
}

export default OfflineSection;

const ContactForm = styled.div`
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.09);

`

const Input = styled.input`
    width: 100%;
    padding:  20px 32px;
    border-radius: 20px;
    border: 1px solid #C5C5C5;
`

const TextArea = styled.textarea`
    width: 100%;
    padding:  20px 32px;
    border-radius: 20px;
    border: 1px solid #C5C5C5;
`

const Button = styled.button`
    width: fit-content;
    display: flex;
    padding: 10px 52px;
    border-radius: 43px;
    background: #02CB63;
    color: white;
    
    .disabled {
        opacity: 0.7;
        pointer-events: none;
    }
`