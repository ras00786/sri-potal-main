import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/HomeComponent/navbar/Navbar';
import Login from './Component/signUp/loginpage/Login';
import HomeMain from './Component/HomeComponent/homemain';
import Loader from './Component/SmallComponents/loader/Loader';
import SignUp from './Component/signUp/signUp/SignUp';
import PublicRoute from './routes/PublicRoutes';
import PrivateRoute from './routes/PrivateRoutes';
import ToastComponent from './utils/ToastMessage';
import ProductsPage from './pages/user/product';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed
  }, []);

  return (
    <div className="App">
      <ToastComponent /> {/* Add ToastComponent here */}
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Navbar />
          <Routes>
          
            {/* Public Routes */}
            <Route path="/" element={<PublicRoute />}>
              <Route index element={<HomeMain />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Route>

            {/* Private Routes */}
            <Route path="/" element={<PrivateRoute />}>
              {/* Add private pages here */}
              {/* <Route index element={<div>Dashboard</div>} /> */}
               <Route path="/products" element={<ProductsPage/>} />
            </Route>
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
