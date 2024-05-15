/*
 */
declare module "react-bootstrap-icons";
//============================================
type AppContextValue = {
  name: string;
  appDispatch: Function;
};

type AppContextProps = {
  appContextValue: AppContextValue;
  children: React.ReactNode;
};
//============================================
type THEME = "light" | "dark";

type VARIANT = "variant01";

type ThemeContextValue = {
  theme: THEME;
  appDispatch: (action: ActionData) => void;
};

type ThemeContextProps = {
  variant: VARIANT;
  themeContextValue: ThemeContextValue;
  children: ReactNode;
};
//============================================
type ActionState = {
  name: string;
  theme: THEME;
  variant: VARIANT;
};
type ActionData = {
  type: "changename" | "changetheme";
  payload: any;
};
type Actions = {
  [key: string]: (state: ActionState, data: ActionData) => ActionState;
};

