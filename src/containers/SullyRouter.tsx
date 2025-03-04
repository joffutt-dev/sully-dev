import { BrowserRouter, Route, Routes } from "react-router";
import { Header } from "../components/Header";
import { Home } from "./Home";
import { About } from "./About";
import { useContext } from "react";
import { ThemeContext } from "../components/ui/ThemeContext";
import { SeeSully } from "./SeeSully";
import { SullyVideos } from "../components/SullyVideos";

export function SullyRouter() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme} bg-gray-200 dark:bg-gray-700 dark:text-white`}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/sully" element={<SeeSully />} />
          <Route path="/sully-videos" element={<SullyVideos />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
