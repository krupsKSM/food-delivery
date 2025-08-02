import { useState, useEffect } from "react"
import { food_list } from "../assets/food-del-assets/assets/frontend_assets/assets"
import { StoreContext, } from "./StoreContext"

const StoreContextProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState({})

    const addToCart = (itemId) =>{
        if(!cartItems[itemId]){
            setCartItems(prev => ({...prev, [itemId]: 1}))
        }else{
            setCartItems(prev => ({...prev, [itemId]: prev[itemId]+ 1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems(prev => {
            const updatedCart = {...prev}

            if(!updatedCart[itemId]) return prev // item not in cart

            if(updatedCart[itemId] === 1 ){
                delete updatedCart[itemId]  //remove item if count is 1
            }else{
                updatedCart[itemId] -=1   // decrement count
            }
            return updatedCart
        })
    }

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
    }
    return (
        <>
            <StoreContext.Provider value={contextValue}>
                {children}
            </StoreContext.Provider>
        </>
    )
}

export default StoreContextProvider