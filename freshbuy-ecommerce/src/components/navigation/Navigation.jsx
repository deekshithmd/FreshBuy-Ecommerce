import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
export default function Navigation() {
  const navigate = useNavigate();
  const { token, setToken } = useAuth();
  const LogoutHandler = () => {
    localStorage.removeItem("login");
    setToken(false);
    navigate("/");
  };
  return (
    <nav className="navigation-bar">
      <section className="brand logo">
        <Link to="/">
          <img
            src="https://lh3.googleusercontent.com/Y0-EwmO5d0z_XlBt83tyVRoBR5jnYKne4LqqXjgLDe7GfcEW2TopSdDxcgYQf-VF5g5tFM59BsOBVrtrbvBq-w7aOoiULWovv6AGjaaG-Uaj8KH8HZsiOpDdM3fcO-WoPSx0L8BVvQNMY5xN_rPxax9ughkbA7OQeJd6txXXNBTRP3zoeYSepx9xD1aEKavKnGiJ8HrTFPmcL5lJMSCNQQnopCjhah4D1ojYMLPeB6nOUW9AHr0Am4onm4mdKoiEjcpPGnitnUOo1KAtaEnSGlyUfQKzLtin3ObcmK05YN_NC8mt2hZn-rKFeGZXHZUuUBa8d3V_F8oCUZFO6XujIW5_mIqWZ4UAhGcNG_iGqhxVl0ajmdnKNUYh47GPuL3E8QKHD7yw4WpCOoFvOeAJ18jXCxmoewWPWz323eC8wSLv71HSblXXxqf7DlaPdn3PpFDGDwe5ALYTbtjpYA6fOHLZYktrfZmY1Z93oypzYpTsE5qDC_cC1IuALXFtaHjLPqZOUahRM7zoJtpYmTIiG7z20KfAe1sXYAhyReqLgVoaeT2hE--HUindHp3Uf56BH_GBg535wjvU-zW0D72oF3GKmiRz2uSRhKQeoQno9iyFXfvHS2GTDpk5JH-scCdZ_atmXzrgWCfM8rGqwqfsQPBO0c75WnQBlcuhdrT1OKJbz0oqd5teOFnKsfB4RQJ0AFAu4WV1zqir17s9pUhnG7sWoYiW2l4D6dTM6oIoZkPgZLKGDNeKrRfe46hQ=w317-h79-no?authuser=0"
            alt="logo"
          />
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
