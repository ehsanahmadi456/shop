import { Route, Routes, Navigate } from 'react-router';

// Context
import ProductContextProvider from './context/ProductContextProvider';

// Components
import Home from './components/Home';

function App() {
  return (
    <ProductContextProvider>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </ProductContextProvider>
  );
}

export default App;
