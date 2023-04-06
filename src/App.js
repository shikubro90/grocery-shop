import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, About, Contact, Products, Order } from "./components/pages";
import {Nav} from "./components/sharable";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" elements={<Contact />} />
          <Route path="/about" elements={<About />} />
          <Route path="/products" elements={<Products />} />
          <Route path="/order" elements={<Order />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
