import { useState } from "react";
import { SullyRouter } from "./containers/SullyRouter";
import { ThemeContext } from "./components/ui/ThemeContext";
import { ThemeMode } from "./types/theme";

export function App() {
  const [theme, setTheme] = useState<ThemeMode>("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <SullyRouter />
    </ThemeContext.Provider>
  );
}
