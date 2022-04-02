import "./productlist.css";
import { Filter, ProductCard } from "../../components";
import { useData } from "../../contexts";

export default function ProductList() {
  const { data,filtered } = useData();
  return (
    <div className="grid-container-product">
      <Filter />
      <div className="product-list">
        {filtered.map((item) => {
          return <ProductCard key={item._id} product={item} />;
        })}
      </div>
    </div>
  );
}
