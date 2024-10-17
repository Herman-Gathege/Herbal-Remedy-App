import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import AboutUsPage from './components/AboutUsPage';
import ProductsPage from './components/ProductsPage';
import ContactPage from './components/ContactPage';
import Auth from './components/Auth'; // Import your Auth component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state

  const handleAuthenticate = () => {
    setIsAuthenticated(true); // Set authenticated state to true
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Auth onAuthenticate={handleAuthenticate} />} />
          <Route path="/home" element={isAuthenticated ? <Homepage /> : <Navigate to="/" />} />
          <Route path="/about" element={isAuthenticated ? <AboutUsPage /> : <Navigate to="/" />} />
          <Route path="/products" element={isAuthenticated ? <ProductsPage /> : <Navigate to="/" />} />
          <Route path="/contact" element={isAuthenticated ? <ContactPage /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;