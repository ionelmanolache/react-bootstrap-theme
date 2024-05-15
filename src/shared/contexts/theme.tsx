import { createContext, useEffect, useContext } from "react";
// import { ThemeContextProps, ThemeContextValue } from "../../types";

const empty = {} as ThemeContextValue;

export const ThemeContext = createContext<ThemeContextValue>(empty);

export function ThemeContextProvider({
  variant,
  themeContextValue,
  children,
}: ThemeContextProps) {
  useEffect(() => {
    if (themeContextValue.theme) {
      const variantTheme = `${variant}-${themeContextValue.theme}`;
      // const variantTheme = `${themeContextValue.theme}`;
      document.documentElement.setAttribute("data-bs-theme", variantTheme);
    }
  }, [variant, themeContextValue.theme]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  // console.log('useThemeContext', context);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeContext");
  }
  return context;
};
