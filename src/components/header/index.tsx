import { Sun, Moon } from "react-bootstrap-icons";
import { useThemeContext } from "../../hooks";
import { changeTheme, changeVariant } from "../../reducers";

import ThemeButton from "./theme-button";
import Logo from "./logo";
import VariantButton from "./variant-button";

const darkIcon = <Moon size={12} />;
const lightIcon = <Sun size={12} />;

export default function Header() {
  const { theme, variant, appDispatch } = useThemeContext();
  // const { variant } = useAppContext();

  console.log("Header.theme", theme);

  const toggleTheme = () =>
    appDispatch(changeTheme(theme === "light" ? "dark" : "light"));
  const toggleVariant = () =>
    appDispatch(changeVariant(variant === "variant01" ? 'variant02' : 'variant01'));

  const icon = theme === "light" ? darkIcon : lightIcon;
  const variantText = variant === "variant01" ? 'Var1' : 'Var2';

  // console.log('header');
  return (
    <div className="d-flex header">
      <Logo />
      <div className="col-6 d-flex justify-content-end">
     
      <VariantButton onclick={toggleVariant}>{variantText}</VariantButton>
  
      <ThemeButton onclick={toggleTheme}>{icon}</ThemeButton>
      </div>
    </div>
  );
}
