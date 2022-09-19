import { useState } from "react"
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
  const adminUser = {
    username:"test",
    password: "test"
}

  const [user, setUser] = useState({name: "", email:""})

  const AuthLogin = (details) => {
    console.log(details)

    if(details.username = adminUser.username && details.password == adminUser.password ) {
      setUser({
        username: details.username,
        password: details.password
      })
    } else {
      console.log("not match")
    }
  }


  return (
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/products/:category' element={<ProductListing/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={(user.email != "") ? <Navigate to="/"/> : <Login AuthLogin={AuthLogin}/>} />
          <Route path='/register' element={user ? <Navigate to="/"/> : <Register />}/>
        </Routes>
    </Router>

  );
}

export default App;
