import { Route, Routes, Navigate } from 'react-router';

// Context
import ProductContextProvider from './context/ProductContextProvider';

// Components
import Home from './components/Home';

function App() {
  return (
    <ProductContextProvider>
    </ProductContextProvider>
  );
}

export default App;
