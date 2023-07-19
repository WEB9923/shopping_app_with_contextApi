import {createContext,useContext,useState} from "react";
const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
    const [cartItems,setCartItems] = useState([]);
    const handleAddToCart = (item) => {
        setCartItems([...cartItems, {...item, pcs:1}]);
    }
    const handleDeleteFromCart = (itemId) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCartItems);
    }
    const value = {
        cartItems,
        handleAddToCart,
        handleDeleteFromCart
    }
    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}
export const useCartContext = () => useContext(CartContext);