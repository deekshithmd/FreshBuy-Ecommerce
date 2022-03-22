import b1 from "../../assets/images/fruit-banner.png"
import {Link} from "react-router-dom"
export default function Banner(){
    return(
        <div className="product-banner">
            <div id="slider">
                <img src={b1} alt=""/>
                <img src={b1} alt=""/>
                <img src={b1} alt=""/>
            </div>
            <Link to="/productlist" className="btn btn-solid-primary link-btn link-style-none order-now">Shop Now</Link>
         </div>
    )
}