import { useReducer, createContext, useState} from "react";

export const Context = createContext();

const initState = {
    products: [],
    productInput: ""
}

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_INPUT":
            return {
                ...state,
                productInput: action.input
            }
        case "ADD": 
            return {
                ...state,
                productInput: "",
                products: [
                    ...state.products,
                    action.data
                ]
            }
        case "DELETE": 
            return {
                ...state,
                products: state.products.filter((item, index) => index !== action.data)
            }
        default:
            break;
    }
}

const Provider = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider;