import React, {createContext, useState, useContext} from 'react'

const StoreContext = createContext()
const CartContext = () => useContext(StoreContext)


export const StoreProvider = ({children}) =>{

    const [products, setProducts] = useState([])
    const [inCart, setInCart] = useState(false)

    const addItem = (item, quantity) => {
        const inCartList = products.find((i) => i.id === item.id)
        setInCart(true)
        if(inCartList){
            inCartList.quantity += quantity
            setProducts([...products])
        } else {
            setProducts([...products, {...item, quantity}])
        }
    }

    const removeItem = (id) => {
        products.splice(
            products.findIndex((i) => i.id === id), 1
        )
        setProducts([...products])
        if(products.length === 0){
            setInCart(false)
        }
    }

    const totalPrice = () => {
        return products.reduce((add, i) => (add += i.price * i.quantity), 0)
    }

    const productCount = () => {
        return products.reduce((add,i) => (add += i.quantity), 0)
    }

     
    return(
        <StoreContext.Provider 
        value = {{ products, addItem, removeItem, totalPrice, inCart, productCount }}>
            {children}
        </StoreContext.Provider>
    )

}
export default CartContext