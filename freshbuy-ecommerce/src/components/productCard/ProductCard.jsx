import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <div className="card-container vertical" key={product.id}>
      <div className="card-img vertical-img border-bottom">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="card-details card-details-vertical">
        <h2 className="card-heading">
          {product.title}
          <span>
            <i className="far fa-heart"></i>
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
        <button className="btn btn-icon-text-primary-outline">
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
