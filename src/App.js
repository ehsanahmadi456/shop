import { Route, Routes, Navigate } from 'react-router';

// Context
import ProductContextProvider from './context/ProductContextProvider';
import HeartContextProvider from './context/HeartContextProvider';

// Components
import Home from './components/Home';
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import ProductsDetails from "./components/ProductsDetails"
import CartContextProvider from './context/CartContextProvider';
import ShopCart from './components/ShopCart';
import Like from "./components/Like"

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
              <Route path="/*" element={<Navigate to="/home" />} />
            </Routes>
          <Footer />
        </HeartContextProvider>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
