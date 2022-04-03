import "./homepage.css";
import { Category, Banner, Occasional } from "../../components";
// import {
//   addCartlist,
//   addWishlist,
//   getCartlist,
//   getWishlist,
// } from "../../services";
// import { useData } from "../../contexts";
// import { useEffect } from "react";
export default function HomePage() {
  // const token = localStorage.getItem("login");
  // const { dispatch } = useData();
  // useEffect(() => {
  //   (async () => {
  //     const cart = JSON.parse(localStorage.getItem("cart"));
  //     cart.map(async (item) => {
  //       await addCartlist({ product: item, encodedToken: token });
  //     });
  //     const cartResponse = await getCartlist({ encodedToken: token });
  //     dispatch({
  //       type: "LOAD_CART",
  //       payload: cartResponse.data.cart,
  //     });

  //     const wishlist = JSON.parse(localStorage.getItem("wishlist"));
  //     wishlist.map(async (item) => {
  //       await addWishlist({ product: item, encodedToken: token });
  //     });
  //     const wishlistResponse = await getWishlist({ encodedToken: token });
  //     dispatch({
  //       type: "LOAD_WISHLIST",
  //       payload: wishlistResponse.data.wishlist,
  //     });
  //   })();
  // },[]);

  return (
    <div className="grid-container">
      <Banner />
      <Category />
      <Occasional />
    </div>
  );
}
