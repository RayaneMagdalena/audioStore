
import React, { createContext, useState } from 'react';

// Type cart product
type CartProduct = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

// Type Cart Context
type CartContextType = {
  cartProducts: CartProduct[];
  addToCart: (product: CartProduct) => void;
};

// Create context
export const CartContext = createContext<CartContextType>({
  cartProducts: [],
  addToCart: () => {},
});

// Create provider
export const CartProvider: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);


  // Add the product to the cart
    const addToCart = (product: CartProduct) => {
    const existingProduct = cartProducts.find((p) => p.id === product.id);

    // If the product already exists
    if (existingProduct) {
      console.log("Este produto já foi adicionado ao seu carrinho.");
    // New product
     } else {
      setCartProducts((prevProducts) => [...prevProducts, { ...product, quantity: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ cartProducts, addToCart }}>{children}</CartContext.Provider>
  );
};
