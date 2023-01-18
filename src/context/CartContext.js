import { createContext,useReducer } from "react";
import { CartReducer } from "./CartReducer";


export const CartContext = createContext(null)

const initialState = {
    items:[],
    generalQuantity:0
}

export const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, initialState)

    console.log('estado')
    console.log(state)

    function addItem(item){
        if(isInCart(item.product)){
            state.items.forEach((element) => {
                if(element.product = item.product){
                    element.quantity = element.quantity + item.quantity
                }
            })
        } else {
            state.items.push(item)
        }
        
        state.generalQuantity = state.generalQuantity + item.quantity

        dispatch({
            type: "ADD_ITEM",
            payload: {
                item
            }
        })

    }

    function isInCart(item){
        return state.items.filter(element => element = item).length > 0
    }

    return(
        <CartContext.Provider value={
            {
                items: state.items,
                quantity: state.generalQuantity,
                addItem
            }
        }>
            {children}
        </CartContext.Provider>
    )
}