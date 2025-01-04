import { createContext, useEffect } from "react";

const empty = {} as ThemeContextValue;

const ThemeContext = createContext<ThemeContextValue>(empty);

function ThemeContextProvider({ themeContextValue, children }: ThemeContextProps) {

  useEffect(() => {
    if (themeContextValue.theme) {
      const variantTheme = `${themeContextValue.variant}-${themeContextValue.theme}`;
      document.documentElement.setAttribute("data-bs-theme", variantTheme);
    }
  }, [themeContextValue.variant, themeContextValue.theme]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };