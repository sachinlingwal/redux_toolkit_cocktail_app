import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import SingleCocktail from "./components/pages/SingleCocktail";
import Sachin from "./components/Sachin";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
        <Route path="/sachin/:id" element={<Sachin />} />
      </Routes>
    </>
  );
}

export default App;
