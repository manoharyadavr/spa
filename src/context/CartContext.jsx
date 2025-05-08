import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  // Initialize cart from localStorage or empty array
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (service) => {
    // Check if service is already in cart
    const isInCart = cartItems.some(item => item.title === service.title);
    
    if (!isInCart) {
      // Calculate deposit (20% of price)
      const deposit = calculateDeposit(service.price);
      
      setCartItems(prevItems => [...prevItems, {
        ...service,
        deposit: `₹${deposit}`
      }]);
    }
  };

  const removeFromCart = (serviceTitle) => {
    setCartItems(prevItems => prevItems.filter(item => item.title !== serviceTitle));
  };

  const calculateDeposit = (price) => {
    // Remove currency symbol and convert to number
    const numericPrice = parseFloat(price.replace('₹', '').replace(/,/g, ''));
    return Math.round(numericPrice * 0.2);
  };

  const getTotalDeposit = () => {
    return cartItems.reduce((total, item) => {
      const deposit = parseFloat(item.deposit.replace('₹', '').replace(/,/g, ''));
      return total + deposit;
    }, 0);
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      getTotalDeposit,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
}; 