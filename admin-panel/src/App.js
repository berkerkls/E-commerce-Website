import styled from "styled-components";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";


const Container = styled.div`
  display: flex;
  justify-content: space-between;
`


function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Sidebar />
        <Home />
      </Container>
    </>
  );
}

export default App;
