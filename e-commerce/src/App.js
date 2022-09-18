import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductListing from './pages/ProductListing';
import Register from './pages/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


function App() {
  const user = false;


  return (
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/products/:category' element={<ProductListing/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={user ? <Navigate to="/"/> : <Login />}/>
          <Route path='/register' element={user ? <Navigate to="/"/> : <Register />}/>
        </Routes>
    </Router>

  );
}

export default App;
