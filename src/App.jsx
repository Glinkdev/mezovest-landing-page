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


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<NewHome />} />
        <Route path="/new" element={<Home />} />
        <Route path="/payment" element={<Payments />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/send" element={<SendMoney />} />
        <Route path="/storefront" element={<StoreFront />} />
        <Route path="/secure-payment" element={<SecurePayment />} />
        <Route path="/invoicing" element={<Invoicing />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/supply" element={<Supply />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/pos" element={<POS />} />
        <Route path="/*" element={<NewHome />} />
      </Routes>
    </Router>
  )
}

export default App
