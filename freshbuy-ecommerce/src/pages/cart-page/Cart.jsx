import "./cart.css";
import { useData } from "../../contexts";
export default function Cart() {
  const { data } = useData();
  return (
    <div className="grid-container">
      <div className="cart-products">
        <section className="cart-items">
          <p className="product-page-heading text-lg text-bold">
            <span className="no-items-in-cart">5</span> Products in your Basket
          </p>
          {data.cart.map((item) => {
            return (
              <div className="card-container horizontal">
                <div className="card-img horizontal-img border-right">
                  <img src={item.image} alt="Apple" />
                </div>
                <div className="card-details card-details-horizontal">
                  <h2 className="card-heading">
                    {item.title}
                    <span>
                      <i className="far fa-heart"></i>
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
                    <button className="inc">+</button>
                    <div className="count">{item.itemCounter}</div>
                    <button className="dec">-</button>
                  </span>
                  <button className="btn btn-outline-primary">Remove</button>
                </div>
              </div>
            );
          })}
        </section>
        <section className="item-data margin-t">
          <h3 className="text-md">Price Details</h3>
          <hr></hr>
          <p>
            Price <span className="rate">Rs.5222</span>
          </p>
          <p>
            Discount <span className="rate">-Rs.522</span>
          </p>
          <p>
            Delivery Charge <span className="rate">Rs.52</span>
          </p>
          <hr></hr>
          <h3 className="text-md">
            Total Amount <span className="rate">Rs.1444</span>
          </h3>
          <hr></hr>
          <p>You will save Rs.21 on this order</p>
          <button className="btn btn-outline-primary margin-t">
            Place Order
          </button>
        </section>
      </div>
    </div>
  );
}
