import { Route, Routes, Navigate } from 'react-router';

// Context
import ProductContextProvider from './context/ProductContextProvider';

// Components
import Home from './components/Home';
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import CartContextProvider from './context/CartContextProvider';
import ShopCart from './components/ShopCart';

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
