import styled from "styled-components";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";
import UserList from "./pages/UserList";

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
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
