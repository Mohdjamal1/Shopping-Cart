import "./styles.css";
import Navbar from "./component/Navbar";
import AboutUs from "./component/AboutUs";
import ContactUs from "./component/ContactUs";
import Home from "./component/Home";
import Products from "./component/Products";
import ProductDetail from "./component/ProductDetail";
import Cart from "./component/Cart";
import Login from "./component/SignUpComponent/LoginForm";
import SignUp from "./component/SignUpComponent/SignUpForm";
import Razorpay from "./component/Razorpay";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./component/PrivateRoutes";
import ProfilePage from "./component/Profile";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* Protected Routes */}
        <Route element={<PrivateRoutes />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/razorpay" element={<Razorpay />} />
        </Route>
      </Routes>
    </>
  );
}
