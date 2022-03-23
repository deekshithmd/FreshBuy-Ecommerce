import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <div className="product-banner">
      <div id="slider">
        <img
          src="https://lh3.googleusercontent.com/krkvkTuzv42xEm_kCRHZ968498rgzmzcsNY4-HDwQ9vrE6FecnrYXtvyGhumpyDMOi27RiwbHBIYWqKoGZyJHXsk58gqhjL8j2kuJNIOBGNohPxgT_QNR0ZSAizPgeKSspzsSNDEt9XfStL6HEg2WVkToCN0vxUv8XkJhOw39gs7W2G-K6qfLa2HrXnTmUlUNVFooiDOttbmvIW0q0RCORLYWDABcPy0YviQKSyY6dbL7U3j1z0GOd04io6PXEirL-y7njnx_TXltkGU5XMoglbz0eW2y0Y3eTz4mm0rGBDbaZJXUnfebjKy51tJDrp4QSnV0WNIFBmVVBxlsH_2E_RbnZByCvX6Pbltpy9iNWnb2KBx7egRt5K8fNuqxV5oAbfr9wolFou-l3T07HwpcyCfqYZuSl-X9X63htkf6hG3FhJaXwyT_eX_yaYeQbMXGU2OKAlnY9j2FlmFjt6zzWn_hp1VzOyA4FAyqF6BCURaP20xrXPJqNqkTTVG6FKPNnHIysdQ-ZxJust5nxKGLYDSfB1Dj14VAmNF_9g-HV7baWBYHMLaZAXo1xv0mb5Zgs2QU3DGfvzRR6ic36ZwBKqmE9BCF4jAZLfKdX12cj0hat05KeXgjFUC1JpXzw-pLrwvJzLdjbpQjiDhkWzDcInIKiiNuMvPKuYY4ehrO_KH4H3nkfnlX7SbezQ4rLpPctkKweDkCQzj22f0zVIm1SqPso43beGgAKnwkP8AljLsXWThrxHEK_Ru4wnu=w676-h381-no?authuser=0"
          alt=""
        />
      </div>
      <Link
        to="/productlist"
        className="btn btn-solid-primary link-btn link-style-none order-now"
      >
        Shop Now
      </Link>
    </div>
  );
}
