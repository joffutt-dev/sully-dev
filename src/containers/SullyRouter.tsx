import { BrowserRouter, Route, Routes } from "react-router";
import { Header } from "../components/Header";
import { Home } from "./Home";
import { SullySlides } from "./SullySlides";
import { About } from "./About";

export function SullyRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/sully" element={<SullySlides />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
