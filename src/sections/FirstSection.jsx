import React from 'react';
import MezovestLogo  from "../assets/icons/mezovest-white-logo.svg"
//"../assets/images/mezovest-logo.svg";
import Navigator from '../components/Navigator';
import HeroSection from '../components/HeroSection';
import ProductDetail from '../components/ProductDetail';
import MezopayWhiteIcon from "../assets/icons/mezopay-logo-white.svg"
import MetlLogoIcon from "../assets/icons/metl-logo-white.svg";
import MezoPayIcon from "../assets/icons/mezo-pay-white.svg";
import MezoPayLimitedIcon from "../assets/icons/mezo-pay-limited-icon.svg";
import MezoCoinIcon from "../assets/icons/mezocoin-logo-white.svg";
import EmailIcon from "../assets/icons/email-icon.svg";
import CallIcon from "../assets/icons/call-icon.svg";


function FirstSection() {
  const productDetail = [
    {
      name: "FINANCE",
      icon: [MezopayWhiteIcon],
      features: ["Cash Icon", "Inventory Loan"],
      action: "Talk to sales",
      actionType: "mail",
      actionUrl: "",
      height: "md:h-[478px]",
      detail: [
        {
            type: "normal",
            text: "Mezovest offers cash loan and inventory financing to eligible vendors.",
        },
        {
            type: "normal",
            text: "We offer cash loans by monitoring their sales and use their volume of sales to determine how much we can lend to them.",
        },
        {
            type: "normal",
            text: "We provide inventory financing to vendors in different commerce sectors and we are currently servicing the LPG sector by providing cooking gas vendors with gas on credit with flexible pay-back plan to keep them in business and in profit."
        }
      ]
    },
    {
      name: "INFRASTRUCTURE",
      icon: [MetlLogoIcon],
      features: ["Reliability", "Innovative", "Safety", "Quantity"],
      action: "Learn more",
      actionType:"link",
      actionUrl: "mezoenergy.com",
      height: "md:h-[598px]",
      detail: [
        {
            type: "normal",
            text: "With Mezovest’s unique commerce solution model, F.I.T, mezovest founded a sister company, Mezo energy trading limited (METL) which uses supply chain infrastructures like logistic, micro distribution centres (MDCs) to supply cooking gas to her vendors since mezovest currently services the LPG commerce sector.",
        },
        {
            type: "sub",
            text: ["METL solves the problem of safety by introducing an innovative and aesthetically pleasing, non corrosive , composite gas cylinder.","METL offers convenience and reliability to customers and vendors by leveraging mezovest's digital product, “Mezopay” where gas cylinder and gas refill can be ordered and have delivered to the customer’s or vendor’s location. With the help of our developed MDC’s in strategic locations nationwide, and our fast and reliable logistics company, “Spatch”, we are able to have cooking gas delivered on-time to vendors and customers nationwide."]
        },
      ]
    },
    {
      name: "TECHNOLOGY",
      icon: [MezoPayIcon, MezoPayLimitedIcon, MezoCoinIcon],
      features: ["Swift Payment Processing", "Safe & Secure", "Innovative & Easy to use"],
      height: "md:h-[628px]",
      detail: [
        {
            type: "normal",
            text: "Technology is part of our core values. We have been able to develop sophisticated tools to for businesses and end users. In no particular order, here are some product of our innovative research;",
        },
        {
            type: "sub",
            text: ["Mezocoin: Mezovest is providing its users with a cryptocurrency token which users can use to purchase gas through the mezopay app. This innovation provides METL with enough leverage to acquire gas in a very large quantity hence making it possible to sell to users and vendors at very cheap retail price. More use cases for this token would arise in the future.",
            "Mezopay business: Mezopay for business is a state-of-the-art digital platform which consists of a vendor’s dashboard to help them simplify and automate their commercial activities securely. Activities such as sending and receiving money, invoicing, inventory management, creating a storefront, receiving money remotely using payment links, POS Terminal which will have the Mezopay for business mobile app running on it to process payments in walk-in stores, manage inventory and many more.",
            // "Sensor: Our embedded systems technology provides sensors to track gas level and alert users when gas level is low."
          ]
        },
      ]
    }
  ]
  const contactOptions =[
    {
      icon: "",
      title: "Email Us",
      description: "hello@mezovest.com",
      type: "mail",
    },
    {
      icon: "",
      title: "Phone Us",
      description: "+234 812 345 6789",
      type: "call"
    }
  ]
  return (
    <div className='py-7 md:pt-11 md:pb-24 px-6 xl:px-36 !bg-darkGreen h-full min-h-screen font-poppins '>
       <div className='flex justify-between'>
        <img src={MezovestLogo} alt="Mezovest Logo" className='h-[40px]' />
        <div className='hidden md:flex'>
          <a href="mailto:hello@mezovest.com" className='flex cursor-pointer'>
              <img src={EmailIcon} alt="mezovest email icon" />
              <div className='text-white ml-2'>
                <p className='font-semibold'>Email us</p>
                <p className='text-xs'>hello@mezovest.com</p>
              </div>
          </a>
          <a href="tel:+234 812 345 6789" className='flex cursor-pointer ml-6'>
              <img src={CallIcon} alt="mezovest email icon"/>
              <div className='text-white ml-2'>
                <p className='font-semibold'>Call Us</p>
                <p className='text-xs'>09133577245</p>
              </div>
          </a>
        </div>
       </div>
       <Navigator />
       <HeroSection />
        {productDetail.map((item, index) => (
          <ProductDetail key={index} {...item} />
        ))}
      
    </div>
  )
}

export default FirstSection