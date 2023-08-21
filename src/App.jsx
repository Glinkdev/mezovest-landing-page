import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import NewHome from "./pages/NewHome";
import Payments from "./pages/Payments";
import Customers from "./pages/Customers";
import SendMoney from "./pages/SendMoney";
import StoreFront from "./pages/StoreFront";
import SecurePayment from "./pages/SecurePayment";
import Invoicing from "./pages/Invoicing";
import Loan from "./pages/Loan";
import Supply from "./pages/Supply";
import Collaboration from "./pages/Collaboration";
import POS from "./pages/POS";
import AboutUs from "./pages/AboutUs";
import WhyChooseUs from "./pages/WhyChooseUs";
import BecomeAPartner from "./pages/BecomeAPartner";
import ContactPage from "./pages/ContactPage";


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<NewHome />} />
        <Route path="/new" element={<Home />} />
        <Route path="/payment" element={<Payments />} />
        <Route path="/testimonials" element={<Customers />} />
        <Route path="/send" element={<SendMoney />} />
        <Route path="/storefront" element={<StoreFront />} />
        <Route path="/payment-link" element={<SecurePayment />} />
        <Route path="/invoicing" element={<Invoicing />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/logistics" element={<Supply />} />
        <Route path="/supply-chain" element={<Collaboration />} />
        <Route path="/pos" element={<POS />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/become-a-partner" element={<BecomeAPartner />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/*" element={<NewHome />} />
      </Routes>
    </Router>
  )
}

export default App
