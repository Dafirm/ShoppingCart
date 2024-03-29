import { Routes, Route} from "react-router-dom"
import { Container } from "react-bootstrap"
import  Home  from "./pages/Home";
import { Store } from "./pages/Store";

import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import "./index.css"
import { NavBar } from "./components/NavBar";
import { About } from "./pages/About";
function App() {

 
  return (
    <ShoppingCartProvider>
      <NavBar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
