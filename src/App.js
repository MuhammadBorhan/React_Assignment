import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        <Route path="/thankyou" element={<ThankYou></ThankYou>}></Route>
      </Routes>
    </div>
  );
}

export default App;
