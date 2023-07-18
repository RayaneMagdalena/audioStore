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
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeFromCart: (productId: number) => void;
};

// Create context
export const CartContext = createContext<CartContextType>({
  cartProducts: [],
  addToCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  removeFromCart: () => {},
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

  // Increase the quantity of the product
  const increaseQuantity = (productId: number) => {
    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  // Decrease the quantity of the product
  const decreaseQuantity = (productId: number) => {
    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        // Set minimum quantity of products in the cart
        product.id === productId ? { ...product, quantity: Math.max(product.quantity - 1, 1) } : product
      )
    );
  };

  // Remove the product from the cart
  const removeFromCart = (productId: number) => {
    setCartProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <CartContext.Provider
      value={{ cartProducts, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
