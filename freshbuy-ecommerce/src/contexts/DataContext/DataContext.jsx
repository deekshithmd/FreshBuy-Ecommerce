import {createContext,useContext,useEffect,useReducer} from "react"
import { DataReducer } from "../reducers";
import { getCartlist,getWishlist,getProducts } from "../../services";
const DataContext=createContext();

const DataProvider=({children})=>{
    const token=localStorage.getItem("login")

    useEffect(()=>{
        (async()=>{
            const productResponse=await getProducts()
            dispatch({type:"LOAD_PRODUCTS",payload:productResponse.data.products})
            const cartResponse=await getCartlist({encodedToken:token})
            dispatch({type:"LOAD_CART",payload:cartResponse.data.cart})
            const wishlistResponse= await getWishlist({encodedToken:token})
            dispatch({type:"LOAD_WISHLIST",payload:wishlistResponse.data.wishlist})

        })()
    })

    const [data,dispatch]=useReducer(DataReducer,{
        products:[],
        cart:[],
        wishlist:[]
    })

    return(
        <DataContext.Provider value={{data,dispatch}}>
            {children}
        </DataContext.Provider>
    )
}

const useData=()=>useContext(DataContext)

export {useData,DataProvider}