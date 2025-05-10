import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Cart from "./pages/Cart";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";
import PaymentSuccess from "./pages/PaymentSuccess";
import { CartProvider } from "./context/CartContext";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#FEDEB8',
              color: '#98A869',
              borderRadius: '12px',
              fontFamily: 'inherit',
              fontWeight: 500,
              fontSize: '1rem',
              boxShadow: '0 4px 24px 0 rgba(152,168,105,0.10)',
              border: '1px solid #98A869',
              marginTop: '5rem',
            },
            success: {
              iconTheme: {
                primary: '#98A869',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#e53e3e',
                secondary: '#fff',
              },
            },
          }}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
