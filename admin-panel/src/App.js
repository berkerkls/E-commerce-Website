import styled from "styled-components";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import { Product } from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import Login from "./pages/Login";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`


function App() {
  const adminUser = {
    username:"admin",
    password: "admin"
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
      <Navbar />
      <Container>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/users" element={<UserList/>}/>
          <Route path="/user/:userId" element={<User/>}/>
          <Route path="/newUser" element={<NewUser/>}/>
          <Route path="/products" element={<ProductList/>}/>
          <Route path="/product/:productId" element={<Product />}/>
          <Route path="/newproduct" element={<NewProduct />}/>
          <Route path="/login" element={(user.email != "") ? <Navigate to="/"/> : <Login AuthLogin={AuthLogin}/>}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
