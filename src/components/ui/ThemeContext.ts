import { createContext, Dispatch, SetStateAction } from 'react';
import { ThemeMode } from '../../types/theme';

interface ThemeContextProps {
  theme: ThemeMode;
  setTheme: Dispatch<SetStateAction<ThemeMode>>
}

const defaultThemeContext: ThemeContextProps =
  { theme: 'dark', setTheme: () => console.log("default") };

export const ThemeContext = createContext(defaultThemeContext);