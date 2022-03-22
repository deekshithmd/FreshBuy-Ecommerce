import brand from "../../assets/brand-logo/freshbuy-logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
export default function Navigation() {
  const navigate = useNavigate();
  const { token, setToken } = useAuth();
  const LogoutHandler = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("id");
    setToken(false);
    navigate("/");
  };
  return (
    <nav className="navigation-bar">
      <section className="brand logo">
        <Link to="/">
          <img src={brand} alt="logo" />
        </Link>
      </section>
      <section className="search-item">
        <div className="input search-field outlined ">
          <button className="search-icon">
            <i className="fa fa-search"></i>
          </button>
          <input type="text" name="username" placeholder="Search here..." />
        </div>
      </section>
      <ul className="list-style-none account-data">
        {!token && (
          <li className="list-inline-item">
            <Link to="/login" className="btn btn-solid-primary link-btn">
              Login
            </Link>
          </li>
        )}
        <li className="list-inline-item">
          <div
            className="avatar avatar-text-xs avatar-text img-round user-profile"
            role="img"
            alt="Avatar"
          >
            AB
          </div>
        </li>
        <li className="list-inline-item">
          <button className="badge-container badge-btn">
            <Link to="/wishlist">
              <i className="fas fa-heart icon"></i>
              <span className="status-badge-icon bg-red">5</span>
            </Link>
          </button>
        </li>
        <li className="list-inline-item">
          <button className="badge-container badge-btn">
            <Link to="/cart">
              <i className="fas fa-cart-shopping"></i>
              <span className="status-badge-icon bg-red">5</span>
            </Link>
          </button>
        </li>
        {token && (
          <li className="list-inline-item">
            <button
              className="btn btn-icon-primary user-signout"
              onClick={LogoutHandler}
            >
              <i className="fa fa-sign-out fa-2x"></i>
            </button>
          </li>
        )}
        <li className="list-inline-item">
          <Link to="" className="nav-icon-link link-style-none">
            <i className="fas fa-sun nav-icon dark"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
