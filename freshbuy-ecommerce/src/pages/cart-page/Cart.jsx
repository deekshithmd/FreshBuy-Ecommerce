import "./cart.css";
import {
  getWishlist,
  addWishlist,
  deleteCartlist,
  editCartlist,
} from "../../services";
import { useData } from "../../contexts";
export default function Cart() {
  const { data, dispatch, token } = useData();
  let cartPrice = 0;
  let cartDiscount = 0;
  let cartQty = 0;
  console.log(data.products)
  async function incrementCart(product, tokens) {
    const res = await editCartlist({
      productId: product._id,
      encodedToken: tokens,
      type: "increment",
    });
    //console.log(res.data.cart);
    dispatch({ type: "LOAD_CART", payload: res.data.cart });
    //dispatch({ type: "ADD_CART_DATA", payload: product });
  }

  async function decrementCart(product, tokens) {
    const res = await editCartlist({
      productId: product._id,
      encodedToken: tokens,
      type: "decrement",
    });
    dispatch({ type: "LOAD_CART", payload: res.data.cart });
    //dispatch({ type: "REMOVE_CART_DATA", payload: product });
  }

  async function addWish(product, tokens) {
    const responsewishlist = await getWishlist({ encodedToken: tokens });
    if (
      !responsewishlist.data.wishlist.find((item) => item._id === product._id)
    ) {
      const res = await addWishlist({ product: product, encodedToken: tokens });
      dispatch({ type: "LOAD_WISHLIST", payload: res.data.wishlist });
    }
  }

  async function deleteCart(product, tokens) {
    const responsecartlist = await deleteCartlist({
      productId: product._id,
      encodedToken: tokens,
    });
    dispatch({ type: "LOAD_CART", payload: responsecartlist.data.cart });
    //dispatch({ type: "REMOVE_CART_DATA", payload: product });
  }
  //console.log(data.cart)
  return data.cart.length > 0 ? (
    <div className="grid-container">
      <div className="cart-products">
        <section className="cart-items">
          <p className="product-page-heading text-lg text-bold">
            <span className="no-items-in-cart">{data.cart.length}</span>{" "}
            Products in your Basket
          </p>
          {data.cart.map((item) => {
            // setCartData((data) => ({
            //   ...data,
            //   totalPrice: data.totalPrice + item.price,
            //   totalDiscount:
            //     data.totalDiscount + (item.price * item.discount) / 100,
            //   qty: data.qty + 1,
            // }));
            return (
              <>
                <div className="card-container horizontal" key={item._id}>
                  <div className="card-img horizontal-img border-right">
                    <img src={item.image} alt="Apple" />
                  </div>
                  <div className="card-details card-details-horizontal">
                    <h2 className="card-heading">
                      {item.title}
                      <span>
                        <i
                          className="far fa-heart"
                          onClick={() => {
                            addWish(item, token);
                            deleteCart(item, token);
                          }}
                        ></i>
                      </span>
                    </h2>
                    {/* <p className="card-sub-heading">{item.description}</p> */}
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
                    <span className="qty-scale text-md">
                      Quantity:
                      <button
                        className="inc"
                        onClick={() => incrementCart(item, token)}
                      >
                        +
                      </button>
                      <div className="count">{item.qty}</div>
                      <button
                        className="dec"
                        onClick={() => decrementCart(item, token)}
                      >
                        -
                      </button>
                    </span>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => deleteCart(item, token)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </section>
        {data.cart.forEach((item) => {
          //console.log(item.price);
          cartPrice = cartPrice + item.qty * item.price;
          cartDiscount =
            cartDiscount + item.qty * ((item.price * item.discount) / 100);
          cartQty = cartQty + item.qty;
        })}

        <section className="item-data margin-t">
          <h3 className="text-md">Price Details</h3>
          <hr></hr>
          <p>
            Total Quantity <span className="rate">{cartQty}</span>
          </p>
          <p>
            Total Price <span className="rate">Rs.{cartPrice}</span>
          </p>
          <p>
            Discount <span className="rate">-Rs.{cartDiscount}</span>
          </p>
          <p>
            Delivery Charge{" "}
            <span className="rate">Rs.{data.cart.length * 15}</span>
          </p>
          <hr></hr>
          <h3 className="text-md">
            Total Amount{" "}
            <span className="rate">Rs.{cartPrice + data.cart.length * 15}</span>
          </h3>
          <hr></hr>
          <p>You will save Rs.{cartDiscount} on this order</p>
          <button className="btn btn-outline-primary margin-t">
            Place Order
          </button>
        </section>
      </div>
    </div>
  ) : (
    <p className="product-page-heading text-lg text-bold">
      No product added to your Basket
    </p>
  );
}
