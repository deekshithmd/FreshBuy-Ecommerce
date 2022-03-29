import { createContext, useContext, useEffect, useReducer } from "react";
import { DataReducer } from "../Reducers";
import {
  getCartlist,
  getCategories,
  getProducts,
  getWishlist,
} from "../../services";
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const token = localStorage.getItem("login");

  const [data, dispatch] = useReducer(DataReducer, {
    products: [],
    cart: [],
    wishlist: [],
    categories: [],
    totalCartPrice:0,
    totalCartDiscount:0,
    price: 200,
    rating: 0,
    sortBy: null,
    allium: false,
    cruciferous: false,
    fruit: false,
    leafy: false,
    marrow: false,
    root: false,
  });

  useEffect(() => {
    (async () => {
      try {
        const productResponse = await getProducts();
        dispatch({
          type: "LOAD_PRODUCTS",
          payload: productResponse.data.products,
        });
        const categoryResponse = await getCategories();
        dispatch({
          type: "LOAD_CATEGORY",
          payload: categoryResponse.data.categories,
        });
        const cartResponse = await getCartlist({ encodedToken: token });
        dispatch({
          type: "LOAD_CART",
          payload: cartResponse.data.cart,
        });
        const wishlistResponse = await getWishlist({ encodedToken: token });
        dispatch({
          type: "LOAD_WISHLIST",
          payload: wishlistResponse.data.wishlist,
        });
      } catch (e) {
        console.log("load", e);
      }
    })();
  }, []);

  const priceFiltered =
    data.price === 200
      ? data.products
      : data.products.filter((item) => parseInt(item.price) < parseInt(data.price));

  const category =
    data.allium ||
    data.cruciferous ||
    data.marrow ||
    data.leafy ||
    data.fruit ||
    data.root;

  const allium = priceFiltered.filter((item) =>
    item.categoryName === "Allium" && data.allium ? true : false
  );
  const cruciferous = priceFiltered.filter((item) =>
    item.categoryName === "Cruciferous" && data.cruciferous ? true : false
  );
  const marrow = priceFiltered.filter((item) =>
    item.categoryName === "Marrow" && data.marrow ? true : false
  );
  const fruits = priceFiltered.filter((item) =>
    item.categoryName === "Fruit" && data.fruit ? true : false
  );
  const leafy = priceFiltered.filter((item) =>
    item.categoryName === "Leafy" && data.leafy ? true : false
  );
  const root = priceFiltered.filter((item) =>
    item.categoryName === "Root" && data.root ? true : false
  );
  const categoryfiltered = category
    ? [...allium, ...cruciferous, ...marrow, ...fruits, ...leafy, ...root]
    : priceFiltered;

  const ratingfiltered=data.rating===0?categoryfiltered:categoryfiltered.filter(item=>item.rating>data.rating)

  function getSorted(product, sortBy) {
    const output =
      sortBy === null
        ? product
        : product.sort((a, b) =>{
            if(sortBy === "LOW_TO_HIGH")
              return parseInt(a.price) - parseInt(b.price)
            else if(sortBy==="HIGH_TO_LOW")
                    return parseInt(b.price) - parseInt(a.price)
                  else
                    return parseFloat(b.rating)-parseFloat(a.rating)
        }
          );
    return output;
  }

  const filtered=getSorted(ratingfiltered,data.sortBy)
  
  return (
    <DataContext.Provider value={{ data, dispatch, token, filtered }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
