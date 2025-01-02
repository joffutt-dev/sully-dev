import { BrowserRouter, Route, Routes } from "react-router";
import { Header } from "../components/Header";
import { Home } from "./Home";
import { SullySlides } from "./SullySlides";
import { About } from "./About";
import { useContext } from "react";
import { ThemeContext } from "../components/ui/ThemeContext";

export function SullyRouter() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/sully" element={<SullySlides />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
