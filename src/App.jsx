import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import NewHome from "./pages/NewHome";
import Payments from "./pages/Payments";
import Customers from "./pages/Customers";


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<NewHome />} />
        <Route path="/new" element={<Home />} />
        <Route path="/payment" element={<Payments />} />
        <Route path="/customers" element={<Customers />} />
        {/* <Route path="/*" element={<NewHome />} /> */}
      </Routes>
    </Router>
  )
}

export default App
