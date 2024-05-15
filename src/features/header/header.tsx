import { Sun, Moon } from "react-bootstrap-icons";
import { useThemeContext } from "../../shared/contexts";
import { changeTheme } from "../../shared/reducers";

import ThemeButton from "./theme-button";
import Logo from "./logo";

const darkIcon = <Moon size={12} />;
const lightIcon = <Sun size={12} />;

export default function Header() {
  const { theme, appDispatch } = useThemeContext();

  console.log("Header.theme", theme);

  const toggleTheme = () =>
    appDispatch(changeTheme(theme === "light" ? "dark" : "light"));

  const icon = theme === "light" ? darkIcon : lightIcon;

  // console.log('header');
  return (
    <div className="d-flex header">
      <Logo />
      <ThemeButton onclick={toggleTheme}>{icon}</ThemeButton>
    </div>
  );
}
