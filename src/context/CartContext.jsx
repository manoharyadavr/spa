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
    setCartItems(prevItems => {
      const existing = prevItems.find(item => item.title === service.title);
      if (existing) {
        return prevItems.map(item =>
          item.title === service.title
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        const deposit = calculateDeposit(service.price);
        return [
          ...prevItems,
          {
            ...service,
            deposit: `₹${deposit}`,
            quantity: 1
          }
        ];
      }
    });
  };

  const decrementQuantity = (serviceTitle) => {
    setCartItems(prevItems => {
      const item = prevItems.find(item => item.title === serviceTitle);
      return prevItems
        .map(item =>
          item.title === serviceTitle
            ? { ...item, quantity: (item.quantity || 1) - 1 }
            : item
        )
        .filter(item => item.quantity > 0);
    });
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
      return total + deposit * (item.quantity || 1);
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
      decrementQuantity,
      getTotalDeposit,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
}; 