//import { useData } from "../DataContext/DataContext";
//import {getSorted} from "../../utils"
export const DataReducer = (state, action) => {
  //const {data}=useData()

  // const getSorted = (productlist, sortBy) => {
  //   const sortedData =
  //     sortBy === null
  //       ? productlist
  //       : productlist.sort((a, b) => {
  //           if (sortBy === "LOW_TO_HIGH")
  //             return parseInt(a.price) - parseInt(b.price);
  //           else if (sortBy === "HIGH_TO_LOW") {
  //             return parseInt(b.price) - parseInt(a.price);
  //           } else {
  //             return parseFloat(b.rating) - parseFloat(a.rating);
  //           }
  //         });
  //   return sortedData;
  // };
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return { ...state, products: action.payload };
    case "LOAD_WISHLIST":
      localStorage.setItem("wishlist", JSON.stringify(action.payload));
      return { ...state, wishlist: action.payload };
    case "LOAD_CART":
      localStorage.setItem("cart", JSON.stringify(action.payload));
      return { ...state, cart: action.payload };
    case "LOAD_CATEGORY":
      return { ...state, categories: action.payload };
    // case "ADD_CART_DATA":
    //   return {
    //     ...state,
    //     totalCartPrice: state.totalCartPrice + action.payload.price,
    //     totalCartDiscount:
    //       state.totalCartDiscount +
    //       (action.payload.price * action.payload.discount) / 100,
    //     cartQty:state.cartQty+1
    //   };
    // case "REMOVE_CART_DATA":
    //   return {
    //     ...state,
    //     totalCartPrice: state.totalCartPrice - action.payload.price,
    //     totalCartDiscount:
    //       state.totalCartDiscount -
    //       (action.payload.price * action.payload.discount) / 100,
    //       cartQty:state.cartQty-1
    //   };

    case "PRICE":
      return { ...state, price: action.payload };
    case "RATING":
      return { ...state, rating: action.payload };
    case "SORT":
      return { ...state, sortBy: action.payload };
    case "ALLIUM":
      return { ...state, allium: !state.allium };
    case "CRUCIFEROUS":
      return { ...state, cruciferous: !state.cruciferous };
    case "ROOT":
      return { ...state, root: !state.root };
    case "FRUIT":
      return { ...state, fruit: !state.fruit };
    case "MARROW":
      return { ...state, marrow: !state.marrow };
    case "LEAFY":
      return { ...state, leafy: !state.leafy };
    case "ALLTIME":
      return { ...state, alltime: !state.alltime };
    case "SUMMER":
      return { ...state, summer: !state.summer };
    case "WINTER":
      return { ...state, winter: !state.winter };
    case "CLEAR":
      return {
        ...state,
        totalCartPrice: 0,
        totalCartDiscount: 0,
        price: 200,
        rating: 0,
        sortBy: null,
        allium: false,
        cruciferous: false,
        fruit: false,
        leafy: false,
        marrow: false,
        root: false,
        alltime: false,
        summer: false,
        winter: false,
      };
    case "LOGOUT":
      return { ...state, wishlist: [], cart: [] };
    // case "CART_DATA":
    //   return {
    //     ...state,
    //     totalCartPrice: state.totalCartPrice + action.payload.price,
    //     totalCartDiscount: state.totalCartDiscount + action.payload.price * 0.2,
    //   };
    default:
      return state;
  }
};
