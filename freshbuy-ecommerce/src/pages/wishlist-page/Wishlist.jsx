import "./wishlist.css";
import {
  getCartlist,
  addCartlist,
  deleteWishlist,
  editCartlist,
} from "../../services";
import { useData } from "../../contexts";
export default function Wishlist() {
  const { data, dispatch, token } = useData();

  async function addCart(product, tokens) {
    const responsew = await getCartlist({ encodedToken: tokens });
    if (!responsew.data.cart.find((item) => item._id === product._id)) {
      const res = await addCartlist({ product: product, encodedToken: tokens });
      dispatch({ type: "LOAD_CART", payload: res.data.cart });
    } else {
      const res = await editCartlist({
        productId: product._id,
        encodedToken: tokens,
        type: "increment",
      });
      dispatch({ type: "LOAD_CART", payload: res.data.cart });
    }
  }
  async function deleteWish(productid, tokens) {
    const responsewishlist = await deleteWishlist({
      productId: productid,
      encodedToken: tokens,
    });
    dispatch({
      type: "LOAD_WISHLIST",
      payload: responsewishlist.data.wishlist,
    });
  }
  return data.wishlist.length > 0 ? (
    <div className="grid-container">
      <div className="wishlist-products">
        <p className="product-page-heading text-md text-bold">
          <span className="no-items-in-wishlist">{data.wishlist.length}</span>{" "}
          Products in your wishlist
        </p>
        <div className="wishlist-items">
          {data.wishlist.map((item) => {
            return (
              <div className="card-container vertical" key={item._id}>
                <div className="card-img vertical-img border-bottom">
                  <img src={item.image} alt="Apple" />
                </div>
                <div className="card-details card-details-vertical">
                  <h2 className="card-heading">
                    {item.title}
                    <span>
                      <i
                        className="fas fa-heart wishlisted"
                        onClick={() => deleteWish(item._id, token)}
                      ></i>
                    </span>
                  </h2>
                  <p className="card-sub-heading">{item.description}</p>
                  <div className="rating text-sm">
                    <span className="rating-value">
                      {item.rating}
                      <i className="fa fa-star checked margin-l"></i>
                    </span>
                    (<span className="rating-number">2333</span>)
                  </div>
                  <h4 className="product-price">
                    Rs.{item.price}{" "}
                    <span className="original-price text-strike-through">
                      Rs.{item.price * 1.2}
                    </span>
                    <span className="discount-percentage">
                      {item.discount}% off
                    </span>
                  </h4>
                  <button className="btn btn-icon-text-primary-outline">
                    <span
                      className="btn-icon text-md"
                      onClick={() => {
                        addCart(item, token);
                        deleteWish(item._id, token);
                      }}
                    >
                      Move to Basket
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <p className="product-page-heading text-lg text-bold">
      No product wishlisted
    </p>
  );
}
