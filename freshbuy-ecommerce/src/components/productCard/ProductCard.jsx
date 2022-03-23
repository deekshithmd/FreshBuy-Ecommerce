import {
  getWishlist,
  getCartlist,
  addCartlist,
  editCartlist,
  addWishlist,
} from "../../services";
import { useData } from "../../contexts";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const token = localStorage.getItem("login");
  const { dispatch } = useData();
  async function addWish(product, tokens) {
    console.log("wishresponsecall")
    const responsewishlist = await getWishlist({ encodedToken: tokens });
    console.log("wishresponse")
    if (
      !responsewishlist.data.wishlist.find((item) => item._id === product._id)
    ) {
      console.log("wishAdd")
      const res = await addWishlist({ product: product, encodedToken: tokens });
      console.log(res.data.wishlist);
      dispatch({ type: "LOAD_WISHLIST", payload: res.data.wishlist });
    }

    //dispatch({type:"ADD_WISH",payload:{products:p,encodedTokens:t}})
  }

  async function addCart(product, tokens) {
    console.log("cartresponsecall")
    const responsew = await getCartlist({ encodedToken: tokens });
    console.log("cartresponse")
    if (!responsew.data.cart.find((item) => item._id === product._id)) {
      console.log("cartAdd")
      const res = await addCartlist({ product: product, encodedToken: tokens });
      console.log(res.data.cart);
      dispatch({ type: "LOAD_CART", payload: res.data.cart });
    } else {
      const res = await editCartlist({
        productId: product._id,
        encodedToken: tokens,
        type: "increment",
      });
      console.log(res.data.cart);
      dispatch({ type: "LOAD_CART", payload: res.data.cart });
    }

    //dispatch({type:"ADD_WISH",payload:{products:p,encodedTokens:t}})
  }

  return (
    <div className="card-container vertical" key={product.id}>
      <div className="card-img vertical-img border-bottom">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="card-details card-details-vertical">
        <h2 className="card-heading">
          {product.title}
          <span>
            <i
              className="far fa-heart"
              onClick={() => addWish(product, token)}
            ></i>
          </span>
        </h2>
        {/* <p className="card-sub-heading">{product.description}</p> */}
        <div className="rating text-sm">
          <span className="rating-value">
            {product.rating}
            <i className="fa fa-star checked margin-l"></i>
          </span>
          (<span className="rating-number">2333</span>)
        </div>
        <h4 className="product-price">
          Rs.{product.price}/kg
          <span className="original-price text-strike-through">
            Rs.{product.price * 1.2}
          </span>
          <span className="discount-percentage">{product.discount}% off</span>
        </h4>
        <button
          className="btn btn-icon-text-primary-outline"
          onClick={() => addCart(product, token)}
        >
          <span className="btn-icon">
            <i className="fa fa-shopping-basket margin-r"></i>
          </span>
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export { ProductCard };
