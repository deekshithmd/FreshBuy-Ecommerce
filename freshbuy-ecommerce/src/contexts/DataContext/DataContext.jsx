import { createContext, useContext, useEffect, useReducer } from "react";
import { DataReducer } from "../Reducers";
import { getProducts } from "../../services";
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const token = localStorage.getItem("login");

  const [data, dispatch] = useReducer(DataReducer, {
    products: [],
    cart: [],
    wishlist: [],
  });

  useEffect(() => {
    (async () => {
      try {
        const productResponse = await getProducts();
        dispatch({
          type: "LOAD_PRODUCTS",
          payload: productResponse.data.products,
        });
      } catch (e) {
        console.log("load", e);
      }
    })();
  }, []);

  return (
    <DataContext.Provider value={{ data, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
