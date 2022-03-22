import p1 from "../../assets/images/allium/allium.png"
import p2 from "../../assets/images/cruciferous/cruciferous.png"
import p3 from "../../assets/images/fruits/fruits.png"
import p4 from "../../assets/images/leafy green/leafy.png"
import p5 from "../../assets/images/marrow/marrow.png"
import p6 from "../../assets/images/root/root.png"
import {Link} from "react-router-dom"
export default function Category(){
    return(
        <div className="hero-section">
            <Link to="/productlist" className="hero-container link-style-none">
                <img src={p4} className="hero-image" alt=""/>
                <span className="text-md text-bold">Leafy Green</span>
            </Link>
            <Link to="/productlist" className="hero-container link-style-none">
                <img src={p5} className="hero-image" alt=""/>
                <span className="text-md text-bold">Marrow</span>
            </Link>
            <Link to="/productlist" className="hero-container link-style-none">
                <img src={p6} className="hero-image" alt=""/>
                <span className="text-md text-bold">Root</span>
            </Link>
            <Link to="/productlist" className="hero-container link-style-none">
                <img src={p1} className="hero-image" alt="" />
                <span className="text-md text-bold">Allium</span>
            </Link>
            <Link to="/productlist" className="hero-container link-style-none">
                <img src={p2} className="hero-image" alt="" />
                <span className=" text-md text-bold">Cruciferous</span>
            </Link>
            <Link to="/productlist" className="hero-container link-style-none">
                <img src={p3} className="hero-image" alt="" />
                <span className="text-md text-bold">Fruits</span>
            </Link>
        </div>
    )
}