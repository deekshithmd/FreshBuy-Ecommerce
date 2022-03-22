import s1 from "../../assets/images/alltime.jpg"
import s2 from "../../assets/images/summer.jpg"
import s3 from "../../assets/images/winter.jpg"
import { Link } from "react-router-dom"
 export default function Occasional(){
     return(
        <div className="occasional-products">
            
        <Link to="/productlist" className="occasional-item-1 link-style-none flex">
            <span className="text-md text-bold margin-b">Alltime available fruits</span>
            <img src={s1} alt=""/>
        </Link>
        <Link to="/productlist" className="occasional-item-2 link-style-none flex">
            <span className="text-md text-bold margin-b">Winter special fruits</span>
            <img src={s2} alt=""/>
        </Link>
        <Link to="/productlist" className="occasional-item-3 link-style-none flex">
            <span className="text-md text-bold margin-b">Summer special fruits</span>
            <img src={s3} alt=""/>
        </Link>
    </div>
     )
 }