import "./wishlist.css";
import { useData } from "../../contexts";
export default function Wishlist() {
  const { data } = useData();
  return (
    <div className="grid-container">
      <div className="wishlist-products">
        <p className="product-page-heading text-md text-bold">
          <span className="no-items-in-wishlist">5</span> Products in your
          wishlist
        </p>
        <div className="wishlist-items">
          {data.wishlist.map((item) => {
            return (
              <div className="card-container vertical">
                <div className="card-img vertical-img border-bottom">
                  <img src={item.image} alt="Apple" />
                </div>
                <div className="card-details card-details-vertical">
                  <h2 className="card-heading">
                    {item.title}
                    <span>
                      <i className="fas fa-heart wishlisted"></i>
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
                    <span className="btn-icon text-md">Move to Basket</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
