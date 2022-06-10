import { Route, Routes, Navigate } from 'react-router-dom';

// Context
import ProductContextProvider from './context/ProductContextProvider';
import HeartContextProvider from './context/HeartContextProvider';
import CartContextProvider from './context/CartContextProvider';

// Components
import Home from './components/Home';
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import ProductsDetails from "./components/ProductsDetails";
import ShopCart from './components/ShopCart';
import Like from "./components/Like";
import Profile from "./components/shared/Profile";
import SignUp from './components/shared/SignUp';
import Login from './components/shared/Login';

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <HeartContextProvider>
          <Navbar />
            <Routes>
              <Route path="/home/:id" element={<ProductsDetails />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cart" element={<ShopCart />} />
              <Route path="/favorite" element={<Like />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/*" element={<Navigate to="/home" />} />
            </Routes>
          <Footer />
        </HeartContextProvider>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
