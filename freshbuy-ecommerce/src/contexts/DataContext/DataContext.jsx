import { createContext, useContext, useEffect, useReducer } from "react";
import { DataReducer } from "../Reducers";
import { getCartlist, getProducts, getWishlist } from "../../services";
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const token = localStorage.getItem("login");

  const [data, dispatch] = useReducer(DataReducer, {
    products: [],
    cart: [ {
      _id: 1,
      title: "Strawberry",
      category: "fruit",
      rating: 4.2,
      discount: 20,
      price: 190,
      image:
        "https://lh3.googleusercontent.com/3lVHDPkumpzgZoIVdv4hwYRBVOt6yJT1kny5R4fgGVhZYdYZOZA46Y0L41sfk5SdpFoderZ8z9Jil7ONrVE61BrMZxxu7Nz88pBxb1QtTkRsJahfG5Uz4mxC6gz76ti2qOU4mYUK16GCAszsyoopvjvT-1t84R7IiW9jp33FZ-mh5AymzdUBrKGdJBI6bq5DsvY90sOyNplid2vkH98SEI2svoFgVfs27yoR57iWDfOS_o47QlFkfQICyYLOmKTIXdEdRgOu5efTcw-y0CPqpLxXDdm4f5_ymzP7XNibV1yYqe_APQmxb8UKCUZbee82VpkKwvUa3KRTebgdqKDrna2PN7_N5u5rk3WW2embJjJtiL13ryO2XzlcZCnHqsjgIQ1QKmHESZwnqIbLQV_mBnd6Nd2Jo_zemvMHAiYY--m6tK2HUP6giNV-OOyTz5LdcQdsr3ea9IAIRH9crZhU76zq2Cs4fzaCsg96C-vX-2dLD8jHhra_CeSrBHOM1Gv5nrxu5_pKUdZDiEwU--ZYhRZCZWqWfwM6PSTw1Yyoi96cWGzU8i0eAqErz-axr5_hUY7S8pKl8-azZdZynvT0ZCR4siw-ip5QWXJuOXZWJv8xmTGY0T5ZayNzmHrAYs-0-uL4Y0WgjQ1m2sYnC1vUrUaiGY1LIz_XTh-bU3bs-3ckikw_v1nG8sd52YyKu6meSyGSmkbFBdcYc82JcWjjN-YR=s200-no?authuser=0",
      quantity: 0,
    },],
    wishlist: [ {
      _id: 2,
      title: "Strawberry",
      category: "fruit",
      rating: 4.2,
      discount: 20,
      price: 190,
      image:
        "https://lh3.googleusercontent.com/3lVHDPkumpzgZoIVdv4hwYRBVOt6yJT1kny5R4fgGVhZYdYZOZA46Y0L41sfk5SdpFoderZ8z9Jil7ONrVE61BrMZxxu7Nz88pBxb1QtTkRsJahfG5Uz4mxC6gz76ti2qOU4mYUK16GCAszsyoopvjvT-1t84R7IiW9jp33FZ-mh5AymzdUBrKGdJBI6bq5DsvY90sOyNplid2vkH98SEI2svoFgVfs27yoR57iWDfOS_o47QlFkfQICyYLOmKTIXdEdRgOu5efTcw-y0CPqpLxXDdm4f5_ymzP7XNibV1yYqe_APQmxb8UKCUZbee82VpkKwvUa3KRTebgdqKDrna2PN7_N5u5rk3WW2embJjJtiL13ryO2XzlcZCnHqsjgIQ1QKmHESZwnqIbLQV_mBnd6Nd2Jo_zemvMHAiYY--m6tK2HUP6giNV-OOyTz5LdcQdsr3ea9IAIRH9crZhU76zq2Cs4fzaCsg96C-vX-2dLD8jHhra_CeSrBHOM1Gv5nrxu5_pKUdZDiEwU--ZYhRZCZWqWfwM6PSTw1Yyoi96cWGzU8i0eAqErz-axr5_hUY7S8pKl8-azZdZynvT0ZCR4siw-ip5QWXJuOXZWJv8xmTGY0T5ZayNzmHrAYs-0-uL4Y0WgjQ1m2sYnC1vUrUaiGY1LIz_XTh-bU3bs-3ckikw_v1nG8sd52YyKu6meSyGSmkbFBdcYc82JcWjjN-YR=s200-no?authuser=0",
      quantity: 0,
    },],
  });

  useEffect(() => {
    (async () => {
      try {
        const productResponse = await getProducts();
        dispatch({
          type: "LOAD_PRODUCTS",
          payload: productResponse.data.products,
        });
        const cartResponse = await getCartlist({encodedToken:token});
        dispatch({
          type: "LOAD_CART",
          payload: cartResponse.data.products,
        });
        const wishlistResponse = await getWishlist({encodedToken:token});
        dispatch({
          type: "LOAD_WISHLIST",
          payload: wishlistResponse.data.products,
        });
      } catch (e) {
        console.log("load", e);
      }
    })();
  },[]);

  return (
    <DataContext.Provider value={{ data, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
