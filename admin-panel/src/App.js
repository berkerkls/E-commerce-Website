import styled from "styled-components";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Provider
} from "react-router-dom";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import { Product } from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import Login from "./pages/Login";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`


function App() {
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
          <Route path="/login" element={<Login />}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
