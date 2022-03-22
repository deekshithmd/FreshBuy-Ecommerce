import "./App.css";
import { HomePage, ProductList, Cart, Wishlist, Login, Signup } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "../src/components";
import { useAuth } from "./contexts/AuthContext/AuthContext";
import Mockman from "mockman-js";
function App() {
  const { token } = useAuth();
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/cart" element={token?<Cart />:<Login/>} />
        <Route path="/wishlist" element={token?<Wishlist />:<Login/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
